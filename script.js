let hadithContainer = document.getElementById("randomHadithContainer");

let randomHadithIndex;

let randomHadith;

let randomHadithContainerTemplate = (randomHadith) => `
<div class="overflow-x-hidden">
        <h3 class="font-semibold text-2xl dark:text-amber-500 mb-2 justify-self-center">${randomHadith.englishNarrator}</h3>
        <p class="text-black dark:text-white md:text-lg mb-2">${randomHadith.hadithEnglish}</p>
        <p class="justify-end text-right text-sm text-black dark:text-white mb-2">${randomHadith.book.bookName} - Hadith Number ${randomHadith.hadithNumber} - <span class="self-center justify-self-end font-bold rounded-full ${randomHadith.status.toLowerCase() ==='sahih' ? 'text-green-500' : randomHadith.status.toLowerCase() ==='hasan' ? 'text-yellow-500' : randomHadith.status.toLowerCase() === 'da`eef' ? 'text-red-500' : 'text-gray-500'}">${randomHadith.status.charAt(0).toUpperCase() + randomHadith.status.slice(1)} Hadith</span></p>
        <a href="/hadiths.html?book=sahih-bukhari&hadithNumber=${randomHadith.hadithNumber}&source=random"><h4 class="text-black font-semibold dark:text-white hover:bg-amber-600 bg-amber-500 p-1 rounded-lg justify-self-center">Read the Hadith</h4>
</div>`;

let fetchScreen = document.getElementById("fetchScreen");

fetchScreen.style.display = "block"

const hadithSwiper = document.getElementById("hadithSwiper");

function showNewHadith(hadith) {
    setTimeout(() => {
        hadithContainer.innerHTML = randomHadithContainerTemplate(hadith);
    }, 500);
}

fetch(`https://hadithapi.com/public/api/hadiths?apiKey=${API_KEY}&book=sahih-bukhari&paginate=500&random-r`)
    .then(response => response.json())
    .then(data => {
        const hadithList = data.hadiths.data;
        const totalHadiths = 500;
        fetchScreen.style.display = "none"

        function generateRandomIndex() {
            randomHadithIndex = Math.floor(Math.random() * totalHadiths);
            randomHadith = hadithList[randomHadithIndex];

            if (randomHadith.hadithEnglish.length >= 225 || randomHadith.hadithEnglish.length <= 15) {
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