const intro = document.getElementById("intro");

const introCode = () => {
    return  `
    <h1 class="text-4xl md:text-6xl font-bold text-center mt-28 mx-4 text-black dark:text-white">The Hadith Stack</h1>
    <p class="text-center md:text-xl mt-6 mx-4 text-gray-900 dark:text-gray-300">A Hadith collection implemented by Sazid. Find hadiths from different books in one place.</p> 
    `;
}

intro.insertAdjacentHTML('afterbegin', introCode());
