let param = new URLSearchParams(window.location.search);
let book = param.get('book');
const chaptersCon  = document.getElementById("chapters");

const API_KEY = "$2y$10$IVFvV9k3N77oHksoyUH0dOWs6L4STQsRb1lsJMycxN3WdH4bJQnc";
let url = `https://www.hadithapi.com/api/${book}/chapters?apiKey=${API_KEY}`

let bookSlug = [
    "sahih-bukhari",
    "sahih-muslim",
    "al-tirmidhi",
    "abu-dawood",
    "ibn-e-majah",
    "sunan-nasai",
    "mishkat"
]

let hbookName = [
    "Sahih Bukhari",
    "Sahih Muslim",
    "Jami' Al-Tirmidhi",
    "Sunan Abu Dawood",
    "Sunan Ibn-e-Majah",
    "Sunan An-Nasa'i",
    "Mishkat Al-Masabih"
];
let compiler = ["Muhammad ibn Isma'il al-Bukhari",
    "IAbū al-Ḥusayn Asākir ad-Dīn Muslim ibn al-Ḥajjāj ibn Muslim ibn Ward ibn Kawshādh al-Qushayrī an-Naysābūrī or commonly known as Imam Muslim",
    "Abū ʿĪsā Muḥammad ibn ʿĪsā as-Sulamī aḍ-Ḍarīr al-Būghī at-Tirmidhī",
    "Abū Dāwūd (Dā’ūd) Sulaymān ibn al-Ash‘ath ibn Isḥāq al-Azdī al-Sijistānī",
    "Abū ʿAbd Allāh Muḥammad ibn Yazīd Ibn Mājah al-Rabʿī al-Qazwīnī",
    "Abū ʿAbd al-Raḥmān Aḥmad ibn Shuʿayb ibn ʿAlī ibn Sinān al-Nasāʾī",
    "Walī ad-Dīn Abū ʿAbd Allāh Muḥammad ibn ʿAbd Allāh al-Khaṭīb at-Tibrīzī"];


    
const chapterCardCode = (chapterNumber, chapterEnglish, chapterArabic) => {
    return  `
    <div class="bg-gray-100 dark:bg-gray-950 duration-300 hover:scale-[1.030] w-3/4 md:w-1/2 mx-auto mt-4 p-6 md:p-8 rounded-2xl text-center shadow-lg shadow-black dark:shadow-amber-500">
            <div title="Learn About">
            <div class="text-xl dark:text-white font-bold text-start">${chapterNumber}
              </div>
            </div>
            <h2 class="text-2xl text-black dark:text-white font-bold">${chapterEnglish}</h2>
            <p class="text-base text-gray-800 dark:text-gray-300 md:text-lg mt-3">${chapterArabic}</p>
            <button class="bg-amber-500 hover:bg-amber-600 dark:text-white font-bold py-2 duration-200 px-4 rounded-full mt-4" onclick='window.location.href = "/hadiths.html?book=${book}&chapter=${chapterNumber}&source=ab"'>Read Hadith</button>
        </div>
        `;
    }
const compilerInfoCode = (hbookName, compiler) => {
    return  `
    <h3 class="text-3xl md:text-4xl font-bold flex justify-between flex-col sm:flex-row text-left mx-20 mt-6 text-black dark:text-white mb-8 items-center">${hbookName} <span class="text-base font-normal max-w-lg"><b>Compiled by: </b>${compiler}</span></h3>
        `;
    }
document.getElementById("compilerInfo").insertAdjacentHTML('beforeend', compilerInfoCode(hbookName[bookSlug.indexOf(book)], compiler[bookSlug.indexOf(book)]));
    
    

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.chapters);
        
        data.chapters.forEach(chapter => {
            chaptersCon.insertAdjacentHTML('beforeend', chapterCardCode(chapter.chapterNumber, chapter.chapterEnglish, chapter.chapterArabic));
        });
        loadingScreen.style.display = "none";
        
    })
    .catch(error => {
        console.log(error);
    });
    
