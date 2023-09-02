let headContainer = document.getElementById("headCon")
let hbookName = [
    "Sahih Bukhari",
    "Sahih Muslim",
    "Jami' Al-Tirmidhi",
    "Sunan Abu Dawood",
    "Sunan Ibn-e-Majah",
    "Sunan An-Nasa'i",
    "Mishkat Al-Masabih",
    "Musnad Ahmad",
    "Al-Silsila Sahiha"
];
let compiler = ["Muhammad ibn Isma'il al-Bukhari",
    "Abū al-Ḥusayn Asākir ad-Dīn Muslim ibn al-Ḥajjāj ibn Muslim ibn Ward ibn Kawshādh al-Qushayrī an-Naysābūrī or commonly known as Imam Muslim",
    "Abū ʿĪsā Muḥammad ibn ʿĪsā as-Sulamī aḍ-Ḍarīr al-Būghī at-Tirmidhī",
    "Abū Dāwūd (Dā’ūd) Sulaymān ibn al-Ash‘ath ibn Isḥāq al-Azdī al-Sijistānī",
    "Abū ʿAbd Allāh Muḥammad ibn Yazīd Ibn Mājah al-Rabʿī al-Qazwīnī",
    "Abū ʿAbd al-Raḥmān Aḥmad ibn Shuʿayb ibn ʿAlī ibn Sinān al-Nasāʾī",
    "Walī ad-Dīn Abū ʿAbd Allāh Muḥammad ibn ʿAbd Allāh al-Khaṭīb at-Tibrīzī",
    "Saahibul Hadith Imam Ul Adham Ahmad ibn Hanbal al-Dhuhli",
    "Muhammad b. al-Hajj Nuh b. Nijati b. Adam al-Ishqudri al-Albani al-Arnauti"];
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
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const source = urlParams.get('source');
const book = urlParams.get('book');
let i = slug.indexOf(book)
document.title = hbookName[i];
let compileText;
if (source == "search" && book == null) {
    compileText = ""
}
if (source == "search" && book !== null) {
    compileText = "Compiled by:"
}
if (source == "ab" || source == "random") {
    compileText = "Compiled by:"
}
const createheaderTemplete = () => `
<section class="text-gray-600 body-font">
<div class="container px-5 pt-24 mx-auto">
    <div class="flex flex-col">
        <div class="h-1 bg-gray-200 rounded overflow-hidden">
            <div class="w-24 h-full bg-indigo-500"></div>
        </div>
        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 class="sm:w-2/5 text-gray-900 dark:text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                ${hbookName[i] || ""}</h1>
            <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 dark:text-gray-200"><b>${compileText}
                </b>${compiler[i] || ""}</p>
        </div>
    </div>
</div>
</section>`
const headerTemplete = createheaderTemplete();
headContainer.insertAdjacentHTML("afterbegin", headerTemplete);