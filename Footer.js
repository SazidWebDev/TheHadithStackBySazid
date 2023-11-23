 let foot = document.getElementById("foot")

const createFooter = () => `
<div class="bg-white dark:bg-gray-900 mt-20 text-black dark:text-white">
        <div class="container mx-auto py-8 px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="col-span-1">
                    <h2 class="text-xl font-semibold mb-4">About Me</h2>
                    <p>I'm Sazid. I create visually stunning and user-friendly frontend UI. <br>
                        <a href="https://sazidfrontend.netlify.app/" target="_blank" class="underline-offset-4 decoration-2 underline hover:decoration-amber-500">Visit my portfolio to learn more about me.</a>
                    </p>
                </div>
                <div class="col-span-1">
                    <h2 class="text-xl font-semibold mb-4">Contact</h2>
                    <p>Email: <a href="mailto:subenglishschool@gmail.com" class="underline-offset-4 decoration-2 underline hover:decoration-amber-500">subenglishschool@gmail.com</a> <br>or use the <a href="/contact.html" class="underline-offset-4 decoration-2 underline hover:decoration-amber-500">contact page.</a></p>
                    </div>
            </div>
            <hr class="my-6 border-gray-700">
            <p class="text-center">&copy; 2023 The Hadith Stack. All rights reserved.</p>
        </div>
    </div>
`;

foot.innerHTML = createFooter()