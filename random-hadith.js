let key = "$2y$10$IVFvV9k3N77oHksoyUH0dOWs6L4STQsRb1lsJMycxN3WdH4bJQnc";
const url = `https://hadithapi.com/public/api/hadiths?apiKey=${key}&book=sahih-bukhari&paginate=500&random-r`
let hadithContainer = document.getElementById("randomHadithContainer");
let randomHadithIndex;
let randomHadith;
let randomHadithContainerTemplate = (randomHadith) => `
<div class="overflow-x-hidden">
<h3 class="font-medium text-xl md:text-2xl text-indigo-600 mb-2">${randomHadith.englishNarrator}</h3>
<p class="text-gray-700 dark:text-gray-300 font-normal text-sm md:text-lg mb-2">${randomHadith.hadithEnglish}</p>
<p class="justify-end text-right text-sm text-gray-700 dark:text-gray-300 mb-2">${randomHadith.book.bookName}, Chapter - ${randomHadith.chapter.chapterEnglish}, Hadith Number - ${randomHadith.hadithNumber}</p>
<a href="/hadiths.html?book=sahih-bukhari&hadithNumber=${randomHadith.hadithNumber}&chapter=${randomHadith.chapter.chapterEnglish}&source=random"><h4 class="text-white hover:bg-indigo-600 bg-indigo-500 p-1 rounded-lg justify-self-center">Read the Hadith</h4>
</div>`;
let fetchScreen = document.getElementById("fetchScreen");
fetchScreen.style.display = "block"
const hadithSwiper = document.getElementById("hadithSwiper");
function showNewHadith(hadith) {
    hadithContainer.classList.add("swipe-out");
    setTimeout(() => {
        hadithContainer.innerHTML = randomHadithContainerTemplate(hadith);
        hadithContainer.classList.remove("swipe-out");
        hadithContainer.classList.add("swipe-in");
        setTimeout(() => {
            hadithContainer.classList.remove("swipe-in");
        }, 500);
    }, 500);
}
fetch(url)
    .then(response => response.json())
    .then(data => {
        const hadithList = data.hadiths.data;
        const totalHadiths = 500;
        fetchScreen.style.display = "none"
        function generateRandomIndex() {
            randomHadithIndex = Math.floor(Math.random() * totalHadiths);
            randomHadith = hadithList[randomHadithIndex];
            if (randomHadith.hadithEnglish.length >= 225) {
                generateRandomIndex();
            } 
            if (randomHadithIndex === 0) {
                hadithContainer.innerHTML = randomHadithContainerTemplate(randomHadith);
            } else {
                showNewHadith(randomHadith);
            }
        }
        generateRandomIndex();
        setInterval(generateRandomIndex, 10000);
    })
    .catch(error => {
        console.log(error);
        fetchScreen.style.display = "none"
    });
