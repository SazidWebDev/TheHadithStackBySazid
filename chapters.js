let showContainer = document.getElementById("showCon");
let loadingScreen = document.getElementById("loadingScreen");
let key = "$2y$10$IVFvV9k3N77oHksoyUH0dOWs6L4STQsRb1lsJMycxN3WdH4bJQnc";
let apiUrl = `https://www.hadithapi.com/api/${book}/chapters?apiKey=${key}`
let slug = [
    "sahih-bukhari",
    "sahih-muslim",
    "al-tirmidhi",
    "abu-dawood",
    "ibn-e-majah",
    "sunan-nasai",
    "mishkat",
    "musnad-ahmad",
    "al-silsila-sahiha"
];
let i = slug.indexOf(book)
const createChapterCard = (chapter) => `
    <a href="/hadiths.html?book=${slug[i]}&chapter=${chapter.chapterNumber}&chapterName=${chapter.chapterEnglish}&source=ab"><div class="bg-white dark:bg-gray-800 shadow-lg rounded-lg justify-center p-7 shadow-gray-900 dark:shadow-indigo-500 -mx-6 md:mx-10 duration-300 my-10 hover:scale-[1.02]">
    <div class="flex items-center justify-between mb-4">
    <span class="text-indigo-600 dark:text-indigo-400 font-bold text-lg">Chapter #${chapter.chapterNumber}</span>
    </div>
    <h2 class="text-gray-900 dark:text-white text-xl font-semibold mb-2">${chapter.chapterEnglish}</h2>
    <p class="text-gray-600 dark:text-gray-400 text-sm">${chapter.chapterArabic}</p>
    </div>
    </a>
`;
loadingScreen.style.display = "block";
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        loadingScreen.style.display = "none";
        data.chapters.forEach(chapter => {
            const ChaptercardTemplate = createChapterCard(chapter);
            showContainer.insertAdjacentHTML('beforeend', ChaptercardTemplate);
        });
    })
    .catch(error => {
        console.log(error);

        loadingScreen.style.display = "none";
    });