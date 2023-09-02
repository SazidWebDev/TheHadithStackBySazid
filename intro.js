const introContainer = document.getElementById("introCon")
const createIntroTemplate = () => 
`<div class="text-center overflow-hidden mt-6 md:mt-24">
<h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mt-16">The Hadith Stack</h1>
<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 text-center px-6 mb-2">A Hadith collection implemented by Sazid. Find hadiths from different books in one place.</p>`
introContainer.innerHTML = createIntroTemplate();