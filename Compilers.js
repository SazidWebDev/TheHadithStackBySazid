let slug = document.getElementById("bookSlug");
// Get book name from URL parameters
let params = new URLSearchParams(window.location.search);
let bookName = params.get("book");

let aboutWriter = document.getElementById("aboutWriter");
const createAboutCard = (hbookName, compiler, paragraph, image, links, bookSlug) => `
    <div id="${bookSlug}" class="w-3/4 mx-auto duration-300 hover:scale-[1.020] mt-4 p-6 md:p-8 rounded-2xl text-center shadow-lg shadow-black dark:shadow-amber-500 bg-white dark:bg-gray-950">
        <h2 class="text-3xl dark:text-white font-bold">${hbookName}</h2>
        <p class="text-base text-gray-800 dark:text-gray-300 md:text-lg mt-3"><b>Compiler: </b>${compiler}</p>
        <img src="${image}" alt="${hbookName}" draggable="false" class="w-36 select-none pointer-events-none mx-auto mt-4" />
        <p class="text-base text-gray-800 dark:text-gray-300 md:text-[18px] mt-2">${paragraph}</p>
        <a class="mt-4 bg-amber-500 hover:bg-amber-600 dark:text-white font-bold p-4 py-2 duration-200 px-4 rounded-full block" href="${links}" target="_blank">Learn more</a>
    </div>
`;

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
    "Imam Muslim",
    "Abū ʿĪsā Muḥammad ibn ʿĪsā as-Sulamī aḍ-Ḍarīr al-Būghī at-Tirmidhī",
    "Abū Dāwūd (Dā’ūd) Sulaymān ibn al-Ash‘ath ibn Isḥāq al-Azdī al-Sijistānī",
    "Abū ʿAbd Allāh Muḥammad ibn Yazīd Ibn Mājah al-Rabʿī al-Qazwīnī",
    "Abū ʿAbd al-Raḥmān Aḥmad ibn Shuʿayb ibn ʿAlī ibn Sinān al-Nasāʾī",
    "Walī ad-Dīn Abū ʿAbd Allāh Muḥammad ibn ʿAbd Allāh al-Khaṭīb at-Tibrīzī"];
let image = [
    "https://i.postimg.cc/tgLj2X34/sahih-bukhari.jpg",
    "https://i.postimg.cc/FsZhNX4T/sahih-muslim.jpg",
    "https://i.postimg.cc/tg1b31Vc/al-tirmidhi.png",
    "https://i.postimg.cc/3RvKTy8G/abu-dawood.jpg",
    "https://i.postimg.cc/G2G1fZKJ/ibn-e-majah.jpg",
    "https://i.postimg.cc/15Pyk5Lg/sunan-nasai.jpg",
    "https://i.postimg.cc/MH0qnhjK/mishkat.jpg"
];
let links = [
    "https://en.wikipedia.org/wiki/Muhammad_al-Bukhari",
    "https://en.wikipedia.org/wiki/Muslim_ibn_al-Hajjaj",
    "https://en.wikipedia.org/wiki/Al-Tirmidhi",
    "https://en.wikipedia.org/wiki/Abu_Dawud_al-Sijistani",
    "https://en.wikipedia.org/wiki/Ibn_Majah",
    "https://en.wikipedia.org/wiki/Al-Nasa%27i",
    "https://en.wikipedia.org/wiki/Mishkat_al-Masabih"
];
let paragraph = [

    "Muhammad ibn Isma'il al-Bukhari (Arabic: محمد بن إسماعيل البخاري, romanized: Muḥammad ibn Ismāīl al-Bukhārī, 21 July 810 – 1 September 870), commonly referred to as Imām al-Bukhāri or Imām Bukhāri, was a 9th-century Muslim muhaddith who is widely regarded as the most important hadith scholar in the history of Sunni Islam. Al-Bukhari's extant works include the hadith collection Sahih al-Bukhari, Al-Tarikh al-Kabir, and Al-Adab al-Mufrad.<br>Born in Bukhara in present-day Uzbekistan, Al-Bukhari began learning hadith at a young age. He travelled across the Abbasid Caliphate and learned under several influential contemporary scholars. Bukhari memorized thousands of hadith narrations, compiling the Sahih al-Bukhari in 846. He spent the rest of his life teaching the hadith he had collected. Towards the end of his life, Bukhari faced claims the Quran was created, and was exiled from Nishapur. Subsequently, he moved to Khartank, near Samarkand.<br>Sahih al-Bukhari is revered as the most important hadith collection in Sunni Islam. Sahih al-Bukhari and Sahih Muslim, the hadith collection of Al-Bukhari's student Muslim ibn al-Hajjaj, are together known as the Sahihayn (Arabic: صحيحين, romanized: Saḥiḥayn) and are regarded by Sunnis as the most authentic books after the Quran. It is part of the Kutub al-Sittah, the six most highly regarded collections of hadith in Sunni Islam.",

    "Abū al-Ḥusayn Asākir ad-Dīn Muslim ibn al-Ḥajjāj ibn Muslim ibn Ward ibn Kawshādh al-Qushayrī an-Naysābūrī (Arabic: أبو الحسين عساكر الدين مسلم بن الحجاج بن مسلم بن وَرْد بن كوشاذ القشيري النيسابوري; after 815 – May 875 CE / 206 - 261 AH) or Muslim Nayshāpūrī (Persian: مسلم نیشاپوری), commonly known as Imam Muslim, was an Islamic scholar from the city of Nishapur, particularly known as a muhaddith (scholar of hadith). His hadith collection, known as Sahih Muslim, is one of the six major hadith collections in Sunni Islam and is regarded as one of the two most authentic (sahih) collections, alongside Sahih al-Bukhari. Muslim ibn al-Hajjaj was born in the town of Nishapur in the Abbasid province of Khorasan, in present-day northeastern Iran. Historians differ as to his date of birth, though it is usually given as 202 AH (817/818), 204 AH (819/820), or 206 AH (821/822).<br>Al-Dhahabi said, 'It is said that he was born in the year 204 AH,' though he also said, 'But I think he was born before that.'<br>Ibn Khallikan could find no report of Muslim's date of birth, or age at death, by any of the ḥuffāẓ (hadith masters), except their agreement that he was born after 200 AH (815/816). Ibn Khallikan cites Ibn al-Salah, who cites Ibn al-Bayyiʿ's Kitab ʿUlama al-Amsar, in the claim that Muslim was 55 years old when he died on 25 Rajab, 261 AH (May 875) and therefore his year of birth must have been 206 AH (821/822).<br>Ibn al-Bayyiʿ reports that he was buried in Nasarabad, a suburb of Nishapur.<br>According to scholars, he was of Arab or Persian origin. The nisbah of 'al-Qushayri' signifies Muslim's belonging to the Arab tribe of Banu Qushayr, members of which migrated to the newly conquered Persian territory during the expansion of the Rashidun Caliphate. The 14th-century Arab scholar Al-Dhahabi stated that he may have been a mawla of Persian descent, attributed to the Qushayr tribe by way of wala' (alliance). An ancestor of Muslim may have been a freed slave of a Qushayri, or may have accepted Islam at the hands of a Qushayri. According to two other scholars, Ibn al-Athīr and Ibn al-Salāh, he was actually an Arab member of that tribe of which his family had migrated to Iran nearly two centuries earlier following the conquest. The majority of Scholars including the Brillant Spaniard Muslim scientist (Ibn Al Hazm) considered him as an Actual member of Arab tribe.<br>Estimates on the number of hadiths in his books vary from 3,033 to 12,000, depending on whether duplicates are included, or only the text (isnad) is. His Sahih (authentic) is said to share about 2000 hadiths with Bukhari's Sahih.<br>The author's teachers included Harmala ibn Yahya, Sa'id ibn Mansur, Abd-Allah ibn Maslamah al-Qa'nabi, al-Dhuhali, al-Bukhari, Ibn Ma'in, Yahya ibn Yahya al-Nishaburi al-Tamimi, and others. Among his students were al-Tirmidhi, Ibn Abi Hatim al-Razi, and Ibn Khuzaymah, each of whom also wrote works on hadith. After his studies throughout the Arabian Peninsula, Egypt, Iraq and Syria, he settled in his hometown of Nishapur, where he met, and became a lifelong friend of al-Bukhari.",

    "Abū ʿĪsā Muḥammad ibn ʿĪsā as-Sulamī aḍ-Ḍarīr al-Būghī at-Tirmidhī (Arabic: أبو عيسى محمد بن عيسى السلمي الضرير البوغي الترمذي; Persian: ترمذی, Termezī; 824 – 9 October 892 CE / 209 - 279 AH), often referred to as Imām at-Termezī/Tirmidhī, was an Islamic scholar, and collector of hadith from Termez (early Khorasan and in present-day Uzbekistan). He wrote al-Jami` as-Sahih (known as Jami` at-Tirmidhi), one of the six canonical hadith compilations in Sunni Islam. He also wrote Shama'il Muhammadiyah (popularly known as Shama'il at-Tirmidhi), a compilation of hadiths concerning the person and character of the Islamic prophet, Muhammad. At-Tirmidhi was also well versed in Arabic grammar, favoring the school of Kufa over Basra due to the former's preservation of Arabic poetry as a primary source.<br>Muhammad ibn `Isa at-Tirmidhi was born during the reign of the Abbasid caliph al-Ma'mun. His year of birth has been reported as 209 AH (824/825). Adh-Dhahabi only states that at-Tirmidhi was born near the year 210 AH (825/826), thus some sources give his year of birth as 210 AH. Some sources indicate that he was born in Mecca (Siddiqi says he was born in Mecca in 206 AH (821/822)) while others say he was born in Tirmidh (Persian: Termez), in what is now southern Uzbekistan. The stronger opinion is that he was born in Tirmidh. Specifically, he was born in one of its suburbs, the village of Bugh (hence the nisbats at-Tirmidhi and al-Bughi).<br> At-Tirmidhi began the study of hadith at the age of 20. From the year 235 AH (849/850) he traveled widely in Khurasan, Iraq, and the Hijaz in order to collect hadith. His teachers and those he narrated from included: al-Bukhari, Abū Rajā’ Qutaybah ibn Sa‘īd al-Balkhī al-Baghlāni, ‘Alī ibn Ḥujr ibn Iyās as-Sa‘dī al-Marwazī, Muḥammad ibn Bashshār al-Baṣrī, ‘Abd Allāh ibn Mu‘āwiyah al-Jumaḥī al-Baṣrī, Abū Muṣ‘ab az-Zuhrī al-Madanī, Muḥammad ibn ‘Abd al-Mālik ibn Abī ash-Shawārib al-Umawī al-Baṣrī, Ismā‘īl ibn Mūsá al-Fazārī al-Kūfi, Muḥammad ibn Abī Ma‘shar as-Sindī al-Madanī, Abū Kurayb Muḥammad ibn al-‘Alā’ al-Kūfī, Hanād ibn al-Sarī al-Kūfī, Ibrāhīm ibn ‘Abd Allāh al-Harawī, Suwayd ibn Naṣr ibn Suwayd al-Marwazī, Muḥammad ibn Mūsā al-Baṣrī, Zayd ibn Akhzam al-Baṣrī, al-‘Abbās al-‘Anbarī al-Baṣrī, Muḥammad ibn al-Muthanná al-Baṣrī, Muḥammad ibn Ma‘mar al-Baṣrī, ad-Darimi, Muslim, Abu Dawud",

    "Abū Dāwūd (Dā’ūd) Sulaymān ibn al-Ash‘ath ibn Isḥāq al-Azdī al-Sijistānī (Arabic: أبو داود سليمان بن الأشعث الأزدي السجستاني), commonly known as Abū Dāwūd al-Sijistānī, was a scholar of prophetic hadith who compiled the third of the six 'canonical' hadith collections recognized by Sunni Muslims, the Sunan Abu Dāwūd. He was a Persian speaker of Arab descent.<br>Abū Dā’ūd was born in Sistan and died in 889 in Basra. He travelled widely collecting ḥadīth (traditions) from scholars in numerous locations including Iraq, Egypt, Syria, Hijaz, Tihamah, Nishapur and Merv. His focus on legal ḥadīth arose from a particular interest in fiqh (law). His collection included 4,800 ḥadīth, selected from some 500,000. His son, Abū Bakr ‘Abd Allāh ibn Abī Dā’ūd (died 928/929), was a well known ḥāfiẓ and author of Kitāb al-Masābīh, whose famous pupil was Abū 'Abd Allāh al-Marzubānī. Principal among his twenty-one works are:<br><br>Sunan Abu Dāwūd: contains 4,800 hadith – mostly sahih (authenticated), some marked ḍaʿīf (unauthenticated) – usually numbered after the edition of Muhammad Muhyi al-Din `Abd al-Hamid (Cairo: Matba`at Mustafa Muhammad, 1354 AH/1935 CE), where 5,274 are distinguished. Islamic scholar Ibn Hajar al-Asqalani, and some others, believe a number of the unmarked hadith are ḍaʿīf.<br><br>Kitab al-Marāsīl lists 600 extensively investigated sahih mursal hadith.<br><br>Risālat Abu Dāwūd ilā Ahli Makkah: letter to the people of Makkah describing his Sunan Abu Dāwūd collection.<br><br>Kitāb al-Masāhif: catalogues non-Uthmanic variants of the Qur'an text.",

    "Abū ʿAbd Allāh Muḥammad ibn Yazīd Ibn Mājah al-Rabʿī al-Qazwīnī (Arabic: ابو عبد الله محمد بن يزيد بن ماجه الربعي القزويني; (b. 209/824, d. 273/887) commonly known as Ibn Mājah, was a medieval scholar of hadith of Persian origin. He compiled the last of Sunni Islam's six canonical hadith collections, Sunan Ibn Mājah. Ibn Mājah was born in Qazwin, the modern-day Iranian province of Qazvin, in 824 CE/209 AH to a family who were members (mawla) of the Rabīʻah tribe. Mājah was the nickname of his father, and not that of his grandfather nor was it his mother's name, contrary to those claiming this. The hāʼ at the end is un-voweled whether in stopping upon its pronunciation or continuing because it a non-Arabic name. He left his hometown to travel the Islamic world visiting Iraq, Makkah, the Levant and Egypt. He studied under Ibn Abi Shaybah (through whom came over a quarter of al-Sunan), Muḥammad ibn ʻAbdillāh ibn Numayr, Jubārah ibn al-Mughallis, Ibrāhīm ibn al-Mundhir al-Ḥizāmī, ʻAbdullāh ibn Muʻāwiyah, Hishām ibn ʻAmmār, Muḥammad ibn Rumḥ, Dāwūd ibn Rashīd and others from their era. Abū Yaʻlā al-Khalīlī praised Ibn Mājah as 'reliable (thiqah), prominent, agreed upon, a religious authority, possessing knowledge and the capability to memorize.'<br><br>According to al-Dhahabī, Ibn Mājah died on approximately February 19, 887 CE/with eight days remaining of the month of Ramadan, 273 AH, or, according to al-Kattānī, in either 887/273 or 889/275. He died in Qazwin.<br><br>What he compiled/did Al-Dhahabī mentioned the following of Ibn Mājah's works: Sunan Ibn Mājah: one of the six canonical collections of hadith Kitāb al-Tafsīr: a book of Qur'an exegesis Kitāb al-Tārīkh: a book of history or, more likely, a listing of hadith transmitters The Sunan consists of 1,500 chapters and about 4,000 hadith. Upon completing it, he read it to Abu Zur’a al-Razi, a hadith authority of his time, who commented, 'I think that were people to get their hands on this, the other collections, or most of them, would be rendered obsolete.'",

    "Al-Nasāʾī (214 – 303 AH; c. 829 – 915 CE), full name Abū ʿAbd al-Raḥmān Aḥmad ibn Shuʿayb ibn ʿAlī ibn Sinān al-Nasāʾī, (variant: Abu Abdel-rahman Ahmed ibn Shua'ib ibn Ali ibn Sinan ibn Bahr ibn Dinar Al-Khurasani), was a noted collector of hadith (sayings of Muhammad),<br>from the city of Nasa (early Khorasan and present day Turkmenistan),<br>and the author of 'As-Sunan', one of the six canonical hadith collections recognized by Sunni Muslims.<br>From his 'As-Sunan al-Kubra (The Large Sunan)' he wrote an abridged version, 'Al-Mujtaba' or Sunan al-Sughra (The Concise Sunan). Of the fifteen books he is known to have written, six treat the science of hadīth.<br>Of Persian origin, Al-Nasa'i himself states he was born in the year 830 (215 h.) - although some say it was in 829 or 869 (214 or 255 h.) - in the city of Nasa in present-day Turkmenistan - part of Khorasan, a region in Western Asia and Central Asia known for its many centres of Islamic learning. There he attended the gatherings and circles of knowledge, known as 'halqas'. At about 15 years old, he began his travels with his first journey to Qutaibah. He covered the whole Arabian Peninsula seeking knowledge from scholars in Iraq, Kufa, the Hijaz, Syria and Egypt, where he eventually settled. A habit of his was to fast every other day, as this was a habit of Dawud. Death: In 302 AH/915 AD, he stopped by in the city of Damascus in between his long journey from Cairo to Mecca just as a stopping point. Near the time of his death, he had become a renowned scholar in the Islamic world and decided to give a speech in the Umayyad Mosque as a scholar of his repute tends to do. The lecture he did was on the virtues of the companions of Muhammad, specifically throughout the lecture he recited the virtues of Ali that he had heard of throughout his life. His narrating the virtues of Ali railed up the crowd due to the anti-alid sentiments in Damascus. In opposition, the crowd felt that there was nothing about Muawiya I in the lecture and asked him to narrate something related to the Umayyad caliph. He responded back by saying the only narration that he had heard about him about Muawiya by Muhammed was when Muhammed prayed to Allah saying 'May Allah not fill his stomach'. The crowd took this narration as a demerit from Muhammad leading the crowd to beat him and he eventually died due to his injuries on the outskirts of the city.",

    "Mishkāt al-Maṣābīḥ (Arabic: مشكاة المصابيح, lit. 'The Niche of Lanterns') by Walī ad-Dīn Abū ʿAbd Allāh Muḥammad ibn ʿAbd Allāh al-Khaṭīb at-Tibrīzī is an expanded and revised version of al-Baghawī's Maṣābīḥ as-Sunnah.<br>Khaṭīb at-Tibrīzī rendered this version of the original text more accessible to those not having an advanced knowledge of the science of hadith. It contains 5945 aḥādīth divided into 29 chapters and is considered to be an important collection of aḥādīth by Sunni Islamic scholars. An example of a hadith from Mishkat al-Masabih is as follows: 'He is not a perfect believer, who goes to bed full and knows that his neighbour is hungry.'<br>Differences from al-Baghawī's Maṣābīḥ as-Sunnah Imām at-Tibrīzī added 1511 aḥādīth to the total of 4434 aḥādīth already in Maṣābīḥ as-Sunnah. Al-Baghawī classified many aḥādīth as authentic to which other scholars did not agree at times. At-Tibrīzī expounded on the classifications that al-Baghawī placed on the aḥādīth and re-classified many of them. He also added a third section to Masabih al-Sunnah, which was already divided in two parts by al-Baghawī. This section consisted of narrations that he felt fit into the chapter and provided further clarification. Al-Baghawī did not mention the isnad of the aḥādīth he collected whereas at-Tibrīzī mentions the source from which the aḥādīth can originally be found - making the text more reliable."
];
for (let i = 0; i < hbookName.length; i++) {
    let aboutCard = createAboutCard(hbookName[i], compiler[i], paragraph[i], image[i], links[i], bookSlug[i]);
    aboutWriter.insertAdjacentHTML('beforeend', aboutCard);
}

// Scroll to section

if (bookName) {
    let targetElement = document.getElementById(bookName);

    if (targetElement) {
        let targetOffset = targetElement.offsetTop;
        let duration = 800; 
        let startTime = null;
        function scrollToTarget(timestamp) {
            if (!startTime) {
                startTime = timestamp;
            }
            let progress = timestamp - startTime;
            let easeOut = t => t * (2 - t);
            let scrollPosition = easeOut(Math.min(1, progress / duration)) * targetOffset * 1.070;
            window.scrollTo(0, scrollPosition);
            if (progress < duration) {
                requestAnimationFrame(scrollToTarget);
            }
        }
        requestAnimationFrame(scrollToTarget);
    }
}
