let param = new URLSearchParams(window.location.search);
let book = param.get('book');
let chapter = param.get('chapter');
let source = param.get('source');
let hadithNumber = param.get('hadithNumber');
let hadithEnglish = param.get('hadithEnglish');
let page = param.get('page') || "1";
const hadithsCon  = document.getElementById("hadiths");
const paginationContainer = document.getElementById("pagination");

const loadingScreen = document.getElementById("loadingScreen");

const API_KEY = "$2y$10$IVFvV9k3N77oHksoyUH0dOWs6L4STQsRb1lsJMycxN3WdH4bJQnc";
let url = `https://www.hadithapi.com/public/api/hadiths?apiKey=${API_KEY}&book=${book}&chapter=${chapter}&page=${page}`

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
    "Jami Al-Tirmidhi",
    "Sunan Abu Dawood",
    "Sunan Ibn-e-Majah",
    "Sunan An-Nasai",
    "Mishkat Al-Masabih"
];
let compiler = ["Muhammad ibn Isma'il al-Bukhari",
    "Abū al-Ḥusayn Asākir ad-Dīn Muslim ibn al-Ḥajjāj ibn Muslim ibn Ward ibn Kawshādh al-Qushayrī an-Naysābūrī or commonly known as Imam Muslim",
    "Abū ʿĪsā Muḥammad ibn ʿĪsā as-Sulamī aḍ-Ḍarīr al-Būghī at-Tirmidhī",
    "Abū Dāwūd (Dā’ūd) Sulaymān ibn al-Ash‘ath ibn Isḥāq al-Azdī al-Sijistānī",
    "Abū ʿAbd Allāh Muḥammad ibn Yazīd Ibn Mājah al-Rabʿī al-Qazwīnī",
    "Abū ʿAbd al-Raḥmān Aḥmad ibn Shuʿayb ibn ʿAlī ibn Sinān al-Nasāʾī",
    "Walī ad-Dīn Abū ʿAbd Allāh Muḥammad ibn ʿAbd Allāh al-Khaṭīb at-Tibrīzī"];

if (source==="ab") {
document.title = `The Hadith Stack - ${hbookName[bookSlug.indexOf(book)]}`;
}
if (source==="search") {
document.title = `The Hadith Stack - Search Results`;
}
if (source==="favourite") {
document.title = `The Hadith Stack - Favourites`;
}
    function removeLineBreaks(inputString) {
        return inputString.replace(/[\r\n]+/g, ' ');
    }
    
const hadithCardCode = (hadithNumber, englishNarrator, hadithArabic, hadithEnglish, status, hbookName, hbookSlug) => {
    if(hadithArabic === null) {
        hadithArabic = "";
    }
    if(englishNarrator === null) {
        englishNarrator = "";
    }
    if(hadithEnglish === null) {
        hadithEnglish = "";
    }
    const sanitizedHadithArabic = removeLineBreaks(hadithArabic.replace(/['"`()\/\n]+/g, ' ').replace(/ﷺ/g, '(Peace be upon him)').replace(/[\n]+/g, " "))
    const sanitizedEnglishNarrator = removeLineBreaks(englishNarrator.replace(/['"`()\/\n]+/g, ' ').replace(/ﷺ/g, '(Peace be upon him)').replace(/[\n]+/g, " "))
    const sanitizedHadithEnglish = removeLineBreaks(hadithEnglish.replace(/['"`\/\n]+/g, ' ').replace(/ﷺ/g, '(Peace be upon him)').replace(/[\n]+/g, " "))

    return ` 
    <div class="bg-gray-100 dark:bg-gray-950 duration-300 md:hover:scale-[1.030] w-3/4 mx-auto mt-4 p-6 md:p-8 rounded-2xl shadow-lg  shadow-black dark:shadow-amber-500 overflow-hidden">
    <div class="text-xl dark:text-white flex items-center justify-between font-bold text-start">Hadith #${hadithNumber}
    <div class="justify-end flex">
            <button onclick='copyHadith("${hadithNumber}", "${status}", "${sanitizedEnglishNarrator}", "${sanitizedHadithArabic}", "${sanitizedHadithEnglish}", "${hbookName}", "${hbookSlug}")' class="text-white mr-1 sm:mr-2 rounded-md">
            <svg id="copyHadith&hadithNumber=${hadithNumber}&book=${hbookSlug}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 duration-200 stroke-black box-border sm:hover:bg-gray-300 sm:dark:hover:bg-gray-800 rounded-full p-2 dark:stroke-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
            </svg>
            </button>
            <button onclick="toggleFavorite(${hadithNumber}, '${hbookSlug}');" class="text-white rounded-md mr-0 sm:mr-3">
            <svg id="favHadith&hadithNumber=${hadithNumber}&book=${hbookSlug}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 duration-200 stroke-black box-border sm:hover:bg-gray-300 sm:dark:hover:bg-gray-800 rounded-full p-2 dark:stroke-white ${localStorage.getItem(`hadithNumber=${hadithNumber}&book=${hbookSlug}`) === 'favHadith' ? 'fill-red-600' : ''}">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
            </button>
            <div class="text-lg sm:text-xl hidden sm:block dark:text-white self-center font-bold p-1 px-3 sm:p-2 sm:px-4 rounded-full ${status.toLowerCase() ==='sahih' ? 'bg-green-500' : status.toLowerCase() ==='hasan' ? 'bg-yellow-500' : status.toLowerCase() === 'da`eef' ? 'bg-red-500' : 'bg-gray-500'}">${status.charAt(0).toUpperCase() + status.slice(1)}</div>
            </div>
            </div>
            <div class="text-lg sm:text-xl my-2 sm:hidden text-center dark:text-white self-center font-bold p-1 px-3 sm:p-2 sm:px-4 rounded-full ${status.toLowerCase() ==='sahih' ? 'bg-green-500' : status.toLowerCase() ==='hasan' ? 'bg-yellow-500' : status.toLowerCase() === 'da`eef' ? 'bg-red-500' : 'bg-gray-500'}">${status.charAt(0).toUpperCase() + status.slice(1)} Hadith</div>
            <h2 class="text-xl sm:text-2xl text-black dark:text-white font-bold text-start mt-4">${englishNarrator}</h2>
            <p class="text-lg sm:text-xl text-gray-800 dark:text-gray-300 md:text-lg mt-5 text-end">${hadithArabic}</p>
            <p class="text-lg sm:text-xl text-gray-800 dark:text-gray-300 md:text-lg mt-5">${hadithEnglish}</p>
            <p class="${source === 'favourite' || source === 'search' ? '' : 'hidden'} text-lg sm:text-xl text-gray-800 dark:text-gray-300 md:text-lg mt-5 text-right font-semibold">${hbookName} - Hadith Number ${hadithNumber}</p>
        </div>
        `;
    }

const toggleFavorite = (hadithNumber, hbookSlug) => {
    const element = document.getElementById(`favHadith&hadithNumber=${hadithNumber === 0 ? 1 : hadithNumber}&book=${hbookSlug}`);
    
    if (element) {
        element.classList.toggle('fill-red-600');

        if (element.classList.contains('fill-red-600')) {
            localStorage.setItem(`hadithNumber=${hadithNumber === 0 ? 1 : hadithNumber}&book=${hbookSlug}`, 'favHadith');
        } else {
            localStorage.removeItem(`hadithNumber=${hadithNumber === 0 ? 1 : hadithNumber}&book=${hbookSlug}`);
        }
    }
}

const copyHadith = (hadithNumber, status, sanitizedEnglishNarrator, sanitizedHadithArabic, sanitizedHadithEnglish, hbookName, hbookSlug) => {
    navigator.clipboard.writeText(`${hbookName} - Hadith Number ${hadithNumber} - ${status.charAt(0).toUpperCase() + status.slice(1)} Hadith - ${sanitizedHadithArabic} - ${sanitizedEnglishNarrator} - ${sanitizedHadithEnglish}`);
    const copyHadithElement = document.getElementById(`copyHadith&hadithNumber=${hadithNumber}&book=${hbookSlug}`);
    copyHadithElement.classList.add("fill-blue-500");

    setTimeout(() => {
        copyHadithElement.classList.remove("fill-blue-500");
    }, 1500);
}

const pagination = (pageNumber, moreOnclickActions, nextOrPrevPageAvailable) => {
    let baseUrl = `/hadiths.html?`;
    if (book) {
        baseUrl += `book=${book}`;
    }
    if (chapter) {
        baseUrl += `&chapter=${chapter}`;
    }
    if (hadithNumber) {
        baseUrl += `&hadithNumber=${hadithNumber}`;
    }
    if (hadithEnglish) {
        baseUrl += `&hadithEnglish=${hadithEnglish}`;
    }
    baseUrl += `&source=${source}`;
    
    return `
    <button onclick="window.location.href = '${baseUrl}&${moreOnclickActions}'" ${nextOrPrevPageAvailable === true || pageNumber === '...' ? 'disabled ' : ''}class="text-xl duration-300 ${nextOrPrevPageAvailable === true ? 'opacity-50 ' : ''}font-semibold text-left mt-6 mx-3 mb-8 ${page === `${pageNumber}` && pageNumber !== '&laquo; Previous' | 'Next &raquo;' ? 'text-black bg-white' : 'bg-gray-900 dark:bg-amber-500 dark:text-black text-white'} p-2 px-3 rounded-xl">${pageNumber}</button>
    `
}

const compilerInfoCode = (hbookName, compiler, chapterName) => {
    return  `
    <h3 class="text-3xl md:text-4xl font-bold flex sm:justify-between justify-center flex-col sm:flex-row text-left mx-6 md:mx-20 mt-6 text-black dark:text-white mb-8 items-center">${hbookName} <span class="text-base font-normal max-w-lg"><b>Compiled by: </b>${compiler}</span></h3>
    <p class="text-3xl text-center mb-14 font-bold dark:text-white mx-auto mt-4 decoration-[3px] decoration-white dark:decoration-amber-500 underline underline-offset-4">Hadiths - ${chapterName}
    <button onclick="downloadFile('${hbookName}', '${chapterName}');" class="text-xl text-center font-semibold hover:bg-gray-950 duration-300 dark:hover:bg-amber-600 dark:text-black text-white mx-auto mt-4 sm:mt-0 sm:ml-4 bg-gray-900 dark:bg-amber-500 py-2 px-4 rounded-full">Download</button></p>
    <div class="flex justify-center">
    <img id="spinner" src="/images/spinner_load.svg" alt="spinner" class="w-16 -mt-8 absolute rounded-full bg-white dark:bg-gray-900 hidden" />
    </div>
    `;
    }

if (source === 'ab') {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.hadiths.data);

        document.getElementById("compilerInfo").insertAdjacentHTML('beforeend', compilerInfoCode(hbookName[bookSlug.indexOf(book)], compiler[bookSlug.indexOf(book)], data.hadiths.data[0].chapter.chapterEnglish));
        data.hadiths.data.forEach(hadith => {
            hadithsCon.insertAdjacentHTML('beforeend', hadithCardCode(hadith.hadithNumber === null ? '' : hadith.hadithNumber, hadith.englishNarrator === null ? '' : hadith.englishNarrator, hadith.hadithArabic === null ? '' : hadith.hadithArabic, hadith.hadithEnglish === null ? '' : hadith.hadithEnglish, hadith.status === null ? '' : hadith.status, hbookName[bookSlug.indexOf(hadith.bookSlug)], hadith.bookSlug));
        });
        data.hadiths.links.forEach(elementUrl => {
            paginationContainer.insertAdjacentHTML('beforeend', pagination(elementUrl.label, elementUrl.label === 'Next &raquo;' ? `page=${parseInt(page) + 1}` : `page=${elementUrl.label}` && elementUrl.label === '&laquo; Previous' ? `page=${parseInt(page) - 1}` : `page=${elementUrl.label}`, page === "1" && elementUrl.label === '&laquo; Previous' ? true : false || page === `${data.hadiths.last_page}` && elementUrl.label === 'Next &raquo;' ? true : false));
        });
        loadingScreen.style.display = "none";
        
    })
    .catch(error => {
        console.log(error);
    });
}

if (source === 'favourite') {
    function getKeysByValue(value) {
        const matchingKeys = [];
      
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const storedValue = localStorage.getItem(key);
      
          if (storedValue === value) {
            matchingKeys.push(key);
          }
        }
        return matchingKeys;
      }
      document.getElementById("compilerInfo").insertAdjacentHTML('beforeend', `
      <div class="text-center mt-4">
      <button onclick="downloadFile('Hadiths', 'Favourites');" class="text-xl text-center font-semibold hover:bg-gray-950 duration-300 dark:hover:bg-amber-600 dark:text-black text-white mx-auto bg-gray-900 dark:bg-amber-500 py-2 px-4 rounded-full">Download</button></p>
      <div class="flex justify-center">
      <img id="spinner" src="/images/spinner_load.svg" alt="spinner" class="w-16 mt-4 absolute rounded-full bg-white dark:bg-gray-900 hidden" />
      </div>
      </div>
      ` );
      console.log(getKeysByValue('favHadith'));
      const favHadith = getKeysByValue('favHadith');
      if (favHadith.length === 0) {
        console.log('No favorite hadiths found.');
          loadingScreen.style.display = "none";
          hadithsCon.insertAdjacentHTML('beforeend', `<div class="bg-gray-100 dark:bg-gray-950 duration-300 hover:scale-[1.030] w-3/4 md:w-1/2 mx-auto mt-4 p-6 md:p-16 rounded-2xl text-center shadow-lg shadow-black dark:shadow-amber-500">
          <p class="text-3xl text-center font-bold dark:text-white mx-auto">No favorite hadiths found 🙁</p>
          <p class="text-xl text-center font-normal dark:text-gray-200 text-gray-900 mx-auto mt-2">Click on the heart icon ❤ to add hadiths to your favorites</p></div>`
          );
      }
        favHadith.forEach(element => {
          fetch(`https://www.hadithapi.com/public/api/hadiths?apiKey=${API_KEY}&${element}`)
          .then(response => response.json())
          .then(data => {
            data.hadiths.data.forEach(hadith => {
                hadithsCon.insertAdjacentHTML('beforeend', hadithCardCode(hadith.hadithNumber, hadith.englishNarrator, hadith.hadithArabic, hadith.hadithEnglish, hadith.status, hbookName[bookSlug.indexOf(hadith.bookSlug)], hadith.bookSlug));
            });
                loadingScreen.style.display = "none";
              console.log(data);
          })
      });
}

if (source === 'search') {
    let baseUrl = `https://www.hadithapi.com/public/api/hadiths?apiKey=${API_KEY}`;
    if (book) {
        baseUrl += `&book=${book}`;
    }
    if (chapter) {
        baseUrl += `&chapter=${chapter}`;
    }
    if (hadithNumber) {
        baseUrl += `&hadithNumber=${hadithNumber}`;
    }
    if (hadithEnglish) {
        baseUrl += `&hadithEnglish=${hadithEnglish}`;
    }
    if (page) {
        baseUrl += `&page=${page}`;
    }
    document.getElementById("compilerInfo").insertAdjacentHTML('beforeend', `
    <div class="text-center mt-4 mb-16">
    <button onclick="downloadFile('Hadiths', 'Favourites');" class="text-xl text-center font-semibold hover:bg-gray-950 duration-300 dark:hover:bg-amber-600 dark:text-black text-white mx-auto bg-gray-900 dark:bg-amber-500 py-2 px-4 rounded-full">Download</button></p>
    <div class="flex justify-center">
    <img id="spinner" src="/images/spinner_load.svg" alt="spinner" class="w-16 mt-4 absolute rounded-full bg-white dark:bg-gray-900 hidden" />
    </div>
    </div>
    ` );

    fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
        if (data.status === 200) {
            data.hadiths.data.forEach(hadith => {
                hadithsCon.insertAdjacentHTML('beforeend', hadithCardCode(hadith.hadithNumber, hadith.englishNarrator, hadith.hadithArabic, hadith.hadithEnglish, hadith.status, hbookName[bookSlug.indexOf(hadith.bookSlug)], hadith.bookSlug));
            });
            data.hadiths.links.forEach(elementUrl => {
                paginationContainer.insertAdjacentHTML('beforeend', pagination(elementUrl.label, elementUrl.label === 'Next &raquo;' ? `page=${parseInt(page) + 1}` : `page=${elementUrl.label}` && elementUrl.label === '&laquo; Previous' ? `page=${parseInt(page) - 1}` : `page=${elementUrl.label}`, page === "1" && elementUrl.label === '&laquo; Previous' ? true : false || page === `${data.hadiths.last_page}` && elementUrl.label === 'Next &raquo;' ? true : false));
            });
            
        }
        if (data.status === 404) {
            console.log('No results found.');
            hadithsCon.insertAdjacentHTML('beforeend', `<div class="bg-gray-100 dark:bg-gray-950 duration-300 hover:scale-[1.030] w-3/4 md:w-1/2 mx-auto mt-4 p-6 md:p-16 rounded-2xl text-center shadow-lg shadow-black dark:shadow-amber-500">
            <p class="text-3xl text-center font-bold dark:text-white mx-auto">No results found 🙁</p>
            <p class="text-xl text-center font-normal dark:text-gray-200 text-gray-900 mx-auto mt-2">Try another search</p></div>`);
        }
          loadingScreen.style.display = "none";
        console.log(data);
    })
}

if (source === "random") {
    fetch(`https://www.hadithapi.com/public/api/hadiths?apiKey=${API_KEY}&book=sahih-bukhari&hadithNumber=${hadithNumber}`)
          .then(response => response.json())
          .then(data => {
            document.getElementById("compilerInfo").insertAdjacentHTML('beforeend', compilerInfoCode(hbookName[bookSlug.indexOf(book)], compiler[bookSlug.indexOf(book)], data.hadiths.data[0].chapter.chapterEnglish));
            data.hadiths.data.forEach(hadith => {
                hadithsCon.insertAdjacentHTML('beforeend', hadithCardCode(hadith.hadithNumber, hadith.englishNarrator, hadith.hadithArabic, hadith.hadithEnglish, hadith.status, hbookName[bookSlug.indexOf(hadith.bookSlug)], hadith.bookSlug));
            });
                loadingScreen.style.display = "none";
              console.log(data);
          })

}
const downloadFile = async (bookName, chapterName) => {
    document.getElementById('spinner').classList.remove('hidden');
    setTimeout(() => {document.getElementById('spinner').classList.add('hidden')}, 6000);
    html2pdf().from(document.body).save(`${bookName} - ${chapterName}.pdf`);
      };