document.querySelector('.search-btn').addEventListener('click', function() {
    const searchInput = document.querySelector('.search-input');
    if (searchInput.classList.contains('show')) {
        searchInput.classList.remove('show');
        searchInput.style.width = '0'; 
    } else {
        searchInput.classList.add('show');
        searchInput.style.width = '250px'; 
    }
});
