let showHadith = document.getElementById("showHad");
let hadithChapterName = document.getElementById("hadithChapterName")
let key = "$2y$10$IVFvV9k3N77oHksoyUH0dOWs6L4STQsRb1lsJMycxN3WdH4bJQnc";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const book = urlParams.get('book');
const chapter = urlParams.get('chapter');
const chapterName = urlParams.get('chapterName');
const hadithNumber = urlParams.get('hadithNumber');
const hadithEnglish = urlParams.get('hadithEnglish');
const source = urlParams.get('source');
const page = urlParams.get('page');
hadithChapterName.innerText = `Hadiths - ${chapterName || "From Search"}`
if (source == "random") {
    hadithChapterName.innerText = `Hadiths - ${chapter}`
}
let apiUrl;
let createHadithCard;
const searchParams = new URLSearchParams(window.location.search);
if (source == "random") {
    apiUrl = `https://www.hadithapi.com/public/api/hadiths?apiKey=${key}&book=sahih-bukhari&hadithNumber=${hadithNumber}`
}
if (source == "ab") {
    apiUrl = `https://www.hadithapi.com/public/api/hadiths?apiKey=${key}`
    if (page != null) {
        apiUrl += `&page=${page}`;
    }
    if (hadithEnglish != null) {
        apiUrl += `&hadithEnglish=${hadithEnglish}`;
    }
    if (hadithNumber != null) {
        apiUrl += `&hadithNumber=${hadithNumber}`;
    }
    if (chapter != null) {
        apiUrl += `&chapter=${chapter}`;
    }
    if (book != null) {
        apiUrl += `&book=${book}`;
    }
}
if (source == "search") {
    apiUrl = `https://www.hadithapi.com/public/api/hadiths?apiKey=${key}`;
    if (hadithEnglish != null) {
        apiUrl += `&hadithEnglish=${hadithEnglish}`;
    }
    if (hadithNumber != null) {
        apiUrl += `&hadithNumber=${hadithNumber}`;
    }
    if (chapter != null) {
        apiUrl += `&chapter=${chapter}`;
    }
    if (book != null) {
        apiUrl += `&book=${book}`;
    }
    document.title = "Search Hadith"
}
if (source == "search") {
    createHadithCard = (hadith) => `
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg justify-center p-7 shadow-gray-900 dark:shadow-indigo-500 -mx-6 md:mx-10 duration-300 my-10 hover:scale-[1.02]">
        <div class="flex items-center justify-between mb-4">
            <span class="text-indigo-600 dark:text-indigo-400 font-bold text-lg">Hadith #${hadith.hadithNumber}</span>
        </div>
        <h2 class="text-gray-900 dark:text-white text-xl font-semibold mb-2">${hadith.englishNarrator}</h2>
        <br>
        <br>
        <p class="text-gray-700 dark:text-gray-300 text-lg text-right">${hadith.hadithArabic}</p>
        <br>
        <p class="text-gray-700 dark:text-gray-300 text-lg">${hadith.hadithEnglish}</p>
        <p class="text-indigo-600 dark:text-indigo-400 text-base mt-2 text-right">${hadith.book.bookName}, Chapter - ${hadith.chapter.chapterEnglish}, Hadith Number - ${hadith.hadithNumber}</p>
    </div>
`;
} else {
    createHadithCard = (hadith) => `
    <div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg justify-center p-7 shadow-gray-900 dark:shadow-indigo-500 -mx-6 md:mx-10 duration-300 my-10 hover:scale-[1.02]">
        <div class="flex items-center justify-between mb-4">
            <span class="text-indigo-600 dark:text-indigo-400 font-bold text-lg">Hadith #${hadith.hadithNumber}</span>
        </div>
        <h2 class="text-gray-900 dark:text-white text-xl font-semibold mb-2">${hadith.englishNarrator}</h2>
        <br>
        <br>
        <p class="text-gray-700 dark:text-gray-300 text-lg text-right">${hadith.hadithArabic}</p>
        <br>
        <p class="text-gray-700 dark:text-gray-300 text-lg">${hadith.hadithEnglish}</p>
    </div>
`;
}
let i;
let pmter;
if (page != null) {
    pmter += `&page=${page}`;
}
if (hadithEnglish != null) {
    pmter += `&hadithEnglish=${hadithEnglish}`;
}
if (hadithNumber != null) {
    pmter += `&hadithNumber=${hadithNumber}`;
}
if (chapter != null) {
    pmter += `&chapter=${chapter}`;
}
if (chapterName != null) {
    pmter += `&chapterName=${chapterName}`;
}
if (book != null) {
    pmter += `&book=${book}`;
}
const pageButton = (hadith) => `
<div class="text-center flex justify-center space-x-2 space-y-2 mb-4">
    <h3 class="text-lg text-black dark:text-white font-semibold p-2">Page: ${hadith.hadiths.current_page}</h3>
    <a href="/hadiths.html?book=${book}&chapter=${chapter}&page=1&source=${source}&chapterName=${chapterName}" class="text-lg border-2 border-gray-600 text-black dark:text-white rounded-xl dark:border-gray-500 p-2 px-3">1</a>
    <div class="items-center grid grid-cols-3 space-x-1" id="pageButtonLOL"></div>
    <a href="/hadiths.html?&book=${book}&chapter=${chapter}&page=${hadith.hadiths.last_page}&source=${source}&chapterName=${chapterName}" class="text-lg border-2 border-gray-600 text-black dark:text-white rounded-xl dark:border-gray-500 p-2 px-3">${hadith.hadiths.last_page}</a>
</div>`
const pageButtonLOL = (pageNumber) => `
<a href="/hadiths.html?${pmter}&page=${pageNumber}&source=${source}" class="text-lg border-2 border-gray-600 text-black dark:text-white rounded-xl dark:border-gray-500 p-2 px-4">${pageNumber}</a>`
const loadingScreen = document.getElementById("loadingScreen");
loadingScreen.style.display = "block";
fetch(apiUrl)
    .then(response => response.json())
    .then(hadith => {
        loadingScreen.style.display = "none";
        document.getElementById("pageButton").innerHTML = pageButton(hadith);
        let pageButtonLOLY = document.getElementById("pageButtonLOL");
        for (i = 2; i < hadith.hadiths.last_page; i++) {
            pageButtonLOLY.insertAdjacentHTML('beforeend', pageButtonLOL(i));
        }
        hadith.hadiths.data.forEach(hadith => {
            const hadithCardTemplate = createHadithCard(hadith);
            showHadith.insertAdjacentHTML('beforeend', hadithCardTemplate);
        });
    })
    .catch(error => {
        console.log(error);
        loadingScreen.style.display = "none";
    });