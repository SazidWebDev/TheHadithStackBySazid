const navbar = document.getElementById("navbar");

const navCode = () => {
    return  `
    <nav class="bg-amber-500 dark:bg-black p-2 overflow-hidden flex md:hidden font-medium justify-between items-center fixed w-full overflow-x-hidden top-0 z-[100]">
            <button onclick="document.getElementById('hamburgerMenu').classList.toggle('hidden')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-black dark:stroke-white">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
              </svg>     
            </button>         
            <a href="/"><img src="https://i.postimg.cc/Pqjzs65f/logo.png" draggablle="false" alt="Logo" class="w-10 select-none pointer-events-none dark:bg-gray-200 rounded-lg hover:bg-amber-600 dark:hover:bg-amber-500 duration-200"></a>
            <div class="flex items-center animateonscroll">
                <img src="/images/moon.svg" alt="dark mode" class="moon w-6 cursor-pointer hover:animate-pulse">
                <img src="/images/sun.svg" alt="light mode" class="sun w-6 cursor-pointer hover:animate-pulse">
            </div>
        </nav>
        <ul id="hamburgerMenu" class="hidden md:hidden rounded-b-xl justify-center dark:text-white space-y-3 p-5 text-center fixed top-[50px] left-0 w-full z-10 font-semibold bg-amber-500 dark:bg-black border-b-2 border-black dark:border-white">
            <hr class="border-black dark:border-white"><li class="p-2"><a class="hover:text-gray-900 statusMob cursor-pointer p-2 px-4 my-2 hover:bg-amber-600 dark:hover:bg-amber-500 rounded-3xl duration-200" href="/">Hadith Collection</a></li>
            <hr class="border-black dark:border-white"><li class="p-2"><a class="hover:text-gray-900 statusMob cursor-pointer p-2 px-4 my-2 hover:bg-amber-600 dark:hover:bg-amber-500 rounded-3xl duration-200" href="/about.html">About</a></li>
            <hr class="border-black dark:border-white"><li class="p-2"><a class="hover:text-gray-900 statusMob cursor-pointer p-2 px-4 my-2 hover:bg-amber-600 dark:hover:bg-amber-500 rounded-3xl duration-200" href="/credits.html">Credits</a></li>
            <hr class="border-black dark:border-white"><li class="p-2"><a class="hover:text-gray-900 statusMob cursor-pointer p-2 px-4 my-2 hover:bg-amber-600 dark:hover:bg-amber-500 rounded-3xl duration-200" href="/contact.html">Contact</a></li>
        </ul>
        <nav class="bg-amber-500 dark:bg-black p-3 overflow-hidden hidden md:block font-medium fixed w-full overflow-x-hidden top-0 z-[100]">
            <div class="flex justify-between items-center">
                <a href="/"><img src="https://i.postimg.cc/Pqjzs65f/logo.png" draggablle="false" alt="Logo" class="w-10 select-none pointer-events-none dark:bg-gray-200 rounded-lg hover:bg-amber-600 dark:hover:bg-amber-500 duration-200"></a>
                <ul class="flex -space-x-1 justify-center dark:text-white">
                    <li class="p-2"><a class="hover:text-gray-900 hover:dark:text-white status cursor-pointer p-2 px-4 hover:bg-amber-600 dark:hover:bg-gray-700 rounded-3xl duration-200" href="/">Hadith Collection</a></li>
                    <li class="p-2"><a class="hover:text-gray-900 hover:dark:text-white status cursor-pointer p-2 px-4 hover:bg-amber-600 dark:hover:bg-gray-700 rounded-3xl duration-200" href="/about.html">About</a></li>
                    <li class="p-2"><a class="hover:text-gray-900 hover:dark:text-white status cursor-pointer p-2 px-4 hover:bg-amber-600 dark:hover:bg-gray-700 rounded-3xl duration-200" href="/credits.html">Credits</a></li>
                    <li class="p-2"><a class="hover:text-gray-900 hover:dark:text-white status cursor-pointer p-2 px-4 hover:bg-amber-600 dark:hover:bg-gray-700 rounded-3xl duration-200" href="/contact.html">Contact</a></li>
                </ul>
                <div class="flex items-center animateonscroll">
                    <img src="/images/moon.svg" alt="dark mode" class="moon2 w-6 cursor-pointer hover:animate-pulse">
                    <img src="/images/sun.svg" alt="light mode" class="sun2 w-6 cursor-pointer hover:animate-pulse">
                </div>
            </div>
        </nav>
    `;
}

navbar.innerHTML = navCode();

const currentPath = window.location.pathname;

let number;
let numberMob;

if (currentPath === '/') {
    number = 0;
    numberMob = 0;
} else if (currentPath === '/about.html') {
    number = 1;
    numberMob = 1;
} else if (currentPath === '/credits.html') {
    number = 2;
    numberMob = 2;
} else if (currentPath === '/contact.html') {
    number = 3;
    numberMob = 3;
} else {
    number = 0;
    numberMob = 0;
}

const liNumber = document.querySelectorAll('.status')[number];
const liNumberMob = document.querySelectorAll('.statusMob')[numberMob];

liNumber.classList.add('bg-gray-900', 'text-white', 'dark:text-black', 'dark:bg-amber-500');
liNumberMob.classList.add('bg-gray-900', 'text-white', 'dark:text-black', 'dark:bg-amber-500');

//Mode Toggles
const sunIcon = document.querySelector(".sun");
const sunIcon2 = document.querySelector(".sun2");
const moonIcon = document.querySelector(".moon");
const moonIcon2 = document.querySelector(".moon2");
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
const iconToggle = () => {
  moonIcon2.classList.toggle("display-none");
  sunIcon2.classList.toggle("display-none");
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");
};
const themeCheck = () => {
  if (userTheme === 'dark' || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    moonIcon2.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
  sunIcon2.classList.add("display-none");
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
sunIcon2.addEventListener("click", () => {
  themeSwitch();
});
moonIcon2.addEventListener("click", () => {
  themeSwitch();
});
themeCheck();
