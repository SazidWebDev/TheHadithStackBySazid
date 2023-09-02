const navTemplete = `<nav class="bg-gray-200 dark:bg-black fixed z-50 top-0 w-full overflow-hidden">
<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-white"
                aria-controls="mobile-menu" aria-expanded="false">
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        <a href="/"><div class="flex flex-1 items-center justify-center sm:justify-start">
            <div class="flex flex-shrink-0 items-center">
                <img class="w-8 p-1 bg-gray-500 rounded-md" src="/logo.png" alt="Your Company">
            </div></a>
            <div class="hidden sm:block">
                <div class="flex space-x-4">
                    <a href="/"
                        class="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white block rounded-md px-3 py-2 text-sm font-medium"
                        aria-current="page">Hadith Collection</a>
                    <a href="/about.html"
                        class="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white rounded-md px-3 py-2 text-sm font-medium">About</a>
                    <a href="/credits.html
                    "
                        class="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white rounded-md px-3 py-2 text-sm font-medium">Credits</a>
                    <a href="/contact.html"
                        class="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white rounded-md px-3 py-2 text-sm font-medium">Contact</a>
                </div>
            </div>
        </div>
        <div class="w-6 h-6">
            <img src="/moon.svg" alt="moon icon" class="moon hover:animate-pulse">
            <img src="/sun.svg" alt="sun icon" class="sun hover:animate-pulse">
        </div>
    </div>
</div>
<div class="hidden sm:hidden fixed z-50 top-16 bg-gray-300 dark:bg-gray-900 text-gray-800 dark:text-gray-300 w-full" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2">
        <a href="/"
            class="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page">Hadith Collection</a>
        <a href="/about.html"
            class="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</a>
        <a href="/credits.html
        "
            class="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white block rounded-md px-3 py-2 text-base font-medium">Credits</a>
        <a href="/contact.html"
            class="text-gray-800 dark:text-gray-300 hover:bg-gray-700 hover:text-white dark:hover:bg-gray-700 dark:hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</a>
    </div>
</div>
</nav>
<div class="text-center">
<h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mt-10 md:mt-24">About the hadith compilers</h1>
<p class="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 text-center px-6 mb-16">In this page you can find about the compilers of the hadith books.</p>
</div>`
const tempContainer = document.createElement("div");
tempContainer.innerHTML = navTemplete;
const navElement = tempContainer.querySelector("nav");
document.getElementById("navDisplay").insertAdjacentElement("afterbegin", navElement);
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};
const themeCheck = () => {
    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
}
sunIcon.addEventListener("click", () => {
    themeSwitch();
});
moonIcon.addEventListener("click", () => {
    themeSwitch();
});
themeCheck();
const mobileMenuButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
  const expanded = mobileMenuButton.getAttribute('aria-expanded') === 'true' || false;
  mobileMenuButton.setAttribute('aria-expanded', !expanded);
  mobileMenu.classList.toggle('hidden', expanded);
});