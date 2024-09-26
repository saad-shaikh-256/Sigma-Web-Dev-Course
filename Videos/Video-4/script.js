document.addEventListener('DOMContentLoaded', () => {
   const searchForm = document.getElementById('searchForm');
   const searchInput = document.getElementById('searchInput');

   searchForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const query = searchInput.value;
      if (query) {
         window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
      } else {
         alert('Please enter data to search');
      }
   });
});