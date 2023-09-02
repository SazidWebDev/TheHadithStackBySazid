let showContainer = document.getElementById("showCon");
let loadingScreen = document.getElementById("loadingScreen");
let key = "$2y$10$IVFvV9k3N77oHksoyUH0dOWs6L4STQsRb1lsJMycxN3WdH4bJQnc";
const createBookCard = (book) => `
  <div class="text-center book-card bg-gray-100 dark:bg-gray-900 shadow-lg rounded-xl justify-center p-7 shadow-gray-900 dark:shadow-indigo-500 duration-300 hover:scale-[1.02] mx-4 md:mx-[10vw] py-6 mb-10">
    <h3 class="text-2xl md:text-3xl font-bold mb-2 dark:text-white">${book.bookName}</h3>
    <p class="text-gray-600 text-base md:text-lg dark:text-gray-400 mb-2"><b>Writer:</b> ${book.writerName}</p>
    <p class="text-gray-600 text-base md:text-lg dark:text-gray-400 mb-2"><b>Hadith Count:</b> ${book.hadiths_count}</p>
    <p class="text-gray-600 text-base md:text-lg dark:text-gray-400"><b>Chapters Count:</b> ${book.chapters_count}</p>
    <a href="chapters.html?book=${book.bookSlug}&source=ab"><button class="text-white hover:bg-indigo-600 bg-indigo-500 p-2 rounded-md my-6">Read Hadith from <b>${book.bookName}</b></button></a>
    <div class="flex justify-end space-x-4 mt-4">
    <a href="about.html">
      <button class="hover:text-indigo-600 text-indigo-500 hover:underline">About the writer</button>
    </a>
  </div>
  </div>
`;
loadingScreen.style.display = "block";
fetch(`https://www.hadithapi.com/api/books?apiKey=${key}`)
  .then(response => response.json())
  .then(data => {
    loadingScreen.style.display = "none";
    data.books.forEach(book => {
      const cardTemplate = createBookCard(book);
      showContainer.insertAdjacentHTML('beforeend', cardTemplate);
    });
  })
  .catch(error => {
    console.log(error);
    loadingScreen.style.display = "none";
  });