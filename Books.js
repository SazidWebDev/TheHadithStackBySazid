const books = document.getElementById("books");

const API_KEY = "$2y$10$IVFvV9k3N77oHksoyUH0dOWs6L4STQsRb1lsJMycxN3WdH4bJQnc";

const bookCardCode = (bookName, writerName, hadiths_count, chapters_count, bookSlug) => {
    return  `
    <div class="bg-gray-100 dark:bg-gray-950 duration-300 hover:scale-[1.030] w-3/4 md:w-1/2 mx-auto mt-4 p-6 md:p-8 rounded-2xl text-center shadow-lg shadow-black dark:shadow-amber-500">
            <div title="Learn About ${bookName}">
            <div><svg onclick='aboutBook("${bookSlug}")' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 md:w-8 h-7 md:h-8 dark:stroke-white hover:bg-gray-300 dark:hover:bg-gray-800 rounded-full p-[2px] duration-200">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              </div>
            </div>
            <h2 class="text-2xl dark:text-white font-bold">${bookName}</h2>
            <p class="text-base text-gray-800 dark:text-gray-300 md:text-lg mt-3"><b>Compiler: </b>${writerName}</p>
            <p class="text-base text-gray-800 dark:text-gray-300 md:text-lg"><b>Hadith Count: </b>${hadiths_count}</p>
            <p class="text-base text-gray-800 dark:text-gray-300 md:text-lg"><b>Chapter Count: </b>${chapters_count}</p>
            <button class="bg-amber-500 hover:bg-amber-600 dark:text-white font-bold py-2 duration-200 px-4 rounded-full mt-4" onclick='window.location.href = "/chapters.html?book=${bookSlug}"'>Read Hadith</button>
        </div>
        `;
    }
    
    const apiUrl = `https://www.hadithapi.com/api/books?apiKey=${API_KEY}`;
    
    const aboutBook = (book) => {
        window.location.href = `/about.html?book=${book}`;
      }
    
    const pathname = window.location.pathname;
    
fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data.books);
        let selectedBooks = [];
        
        data.books.forEach(book => {
            if (book.hadiths_count !== "0") {
                selectedBooks.push(book);
            }
        });
        
        selectedBooks.forEach(book => {
            books.insertAdjacentHTML('beforeend', bookCardCode(book.bookName, book.writerName, book.hadiths_count, book.chapters_count, book.bookSlug));
        });
        
        loadingScreen.style.display = "none";
        
    })
    .catch(error => {
        console.log(error);
    });
    
