const search = document.getElementById("search");

const searchCode = () => {
    return  `
    <form id="searchForm" class="hidden md:block mb-6 mt-2">
            <label for="default-search"
                class="mb-2 ml-3 text-sm font-medium text-gray-900 sr-only dark:text-white content-center justify-center">Search</label>
            <div class="inline-flex items-center ml-3">
                <select id="book-select"
                    class="block w-40 p-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500">
                    <option value="" disabled selected>Select Book</option>
                    <option value="">All Books</option>
                    <option value="sahih-bukhari">Sahih Bukhari</option>
                    <option value="sahih-muslim">Sahih Muslim</option>
                    <option value="al-tirmidhi">Jami' Al-Tirmidhi</option>
                    <option value="abu-dawood">Sunan Abu Dawood</option>
                    <option value="ibn-e-majah">Sunan Ibn-e-Majah</option>
                    <option value="sunan-nasai">Sunan An-Nasa'i</option>
                    <option value="mishkat">Mishkat Al-Masabih</option>
                </select>
                <select id="search-select"
                    class="ml-3 p-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500">
                    <option value="hadithNumber">Hadith Number</option>
                    <option value="hadithEnglish">Words in English</option>
                    <option value="chapter">Chapter number of any book</option>
                </select>
                <input type="search" id="default-search"
                    class="ml-3 block flex-1 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                    placeholder="Search for Hadith" required>
                <button type="submit"
                    class="ml-2 duration-200 bg-gray-900 text-white dark:text-black hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-amber-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-amber-500 dark:hover:bg-amber-600 dark:focus:ring-amber-500">Search</button>
            </div>
        </form>

        <form id="searchFormMobile" class="block md:hidden mt-4 mb-6 mx-10 space-y-2">
            <div class="sm:flex sm:justify-center">
                <div class="mb-3 sm:mb-0">
                    <select id="book-select-mobile"
                        class="block w-full p-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500">
                        <option value="" disabled selected>Select Book</option>
                        <option value="">All Books</option>
                        <option value="sahih-bukhari">Sahih Bukhari</option>
                        <option value="sahih-muslim">Sahih Muslim</option>
                        <option value="al-tirmidhi">Jami' Al-Tirmidhi</option>
                        <option value="abu-dawood">Sunan Abu Dawood</option>
                        <option value="ibn-e-majah">Sunan Ibn-e-Majah</option>
                        <option value="sunan-nasai">Sunan An-Nasa'i</option>
                        <option value="mishkat">Mishkat Al-Masabih</option>
                    </select>
                </div>
                <div class="mb-3 sm:mb-0 sm:ml-3">
                    <select id="search-select-mobile"
                        class="block w-full p-2 text-sm border border-gray-300 rounded-lg bg-white focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500">
                        <option value="hadithNumber">Hadith Number</option>
                        <option value="hadithEnglish">Words in English</option>
                        <option value="chapter">Chapter number of any book</option>
                    </select>
                </div>
            </div>
            <div class="mt-3 sm:flex sm:justify-center">
                <input type="search" id="default-search-mobile"
                    class="block w-full p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500"
                    placeholder="Search for Hadith" required>
                <button type="submit"
                    class="ml-2 mt-3 duration-200 bg-gray-900 text-white dark:text-black hover:bg-gray-950 focus:ring-4 focus:outline-none focus:ring-amber-500 font-medium rounded-lg text-sm px-4 py-2 dark:bg-amber-500 dark:hover:bg-amber-600 dark:focus:ring-amber-500">Search</button>
            </div>
        </form>
    `;
}

search.insertAdjacentHTML('afterbegin', searchCode());

const handleSearch = (event) => {
        event.preventDefault();
        const bookSelect = document.getElementById('book-select').value;
        const bookSelectMobile = document.getElementById('book-select-mobile').value;
        const searchSelect = document.getElementById('search-select').value;
        const searchSelectMobile = document.getElementById('search-select-mobile').value;
        const searchTerm = document.getElementById('default-search').value;
        const searchTermMobile = document.getElementById('default-search-mobile').value;
        let queryParams = '';
        if (searchSelect === 'hadithNumber' || searchSelect === 'chapter' || searchSelectMobile === 'hadithNumber' || searchSelectMobile === 'chapter' ) {
            queryParams = `${searchSelect || searchSelect}=${searchTerm || searchTermMobile}`;
        } else {
            queryParams = `${searchSelect || searchSelectMobile}=${encodeURIComponent(searchTerm || searchTermMobile)}`;
        }
        if (bookSelect || bookSelectMobile) {
            queryParams += `&book=${bookSelect || bookSelectMobile}`;
        }
        window.location.href = `/hadiths.html?${queryParams}&source=search`;
    ;
}

document.getElementById("searchForm").addEventListener("submit", handleSearch);
document.getElementById("searchFormMobile").addEventListener("submit", handleSearch);