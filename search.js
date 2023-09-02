const bookSelect = document.getElementById("bookSelect");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultContainer = document.getElementById("resultContainer");
document.getElementById('formpc').addEventListener('submit', function (event) {
    event.preventDefault();
    const bookSelect = document.getElementById('book-select');
    const selectedBook = bookSelect.value;
    const searchSelect = document.getElementById('search-select');
    const selectedSearch = searchSelect.value;
    const searchTerm = document.getElementById('default-search').value;
    let queryParams = '';
    if (selectedSearch === 'hadithNumber' || selectedSearch === 'chapter') {
        queryParams = `${selectedSearch}=${searchTerm}`;
    } else {
        queryParams = `${selectedSearch}=${encodeURIComponent(searchTerm)}`;
    }
    if (selectedBook) {
        queryParams += `&book=${selectedBook}`;
    }
    window.location.href = `/hadiths.html?${queryParams}&source=search`;
});

document.getElementById('formmobile').addEventListener('submit', function (event) {
    event.preventDefault();
    const bookSelect = document.getElementById('book-select');
    const selectedBook = bookSelect.value;
    const searchSelect = document.getElementById('search-select');
    const selectedSearch = searchSelect.value;
    const searchTerm = document.getElementById('default-search').value;
    let queryParams = '';
    if (selectedSearch === 'hadithNumber' || selectedSearch === 'chapter') {
        queryParams = `${selectedSearch}=${searchTerm}`;
    } else {
        queryParams = `${selectedSearch}=${encodeURIComponent(searchTerm)}`;
    }
    if (selectedBook) {
        queryParams += `&book=${selectedBook}`;
    }
    window.location.href = `/hadiths.html?${queryParams}&source=search`;
});