document.addEventListener('DOMContentLoaded', () => {
  console.log('Pokémon Retro New Tab loaded!');

  // Update clock
  const timeElement = document.querySelector('#clock');
  function updateClock() {
    const now = new Date();
    timeElement.textContent = now.toLocaleTimeString();
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Handle search
  const searchInput =document.querySelector(search-input);
  const searchButton = document.querySelector('#search-button');

  searchButton.addEventListener('click', () => {
    searchButton.style.transform = 'scale(0.9)';
    setTimeout(() => {
      searchButton.style.transform = 'scale(1)';
    }, 100);
    const query = searchInput.value.trim();
    if (query) {
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
      window.location.href = searchUrl;
    }
  });

  // Allow Enter key to trigger search
  searchInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      searchButton.style.transform = 'scale(0.9)';
      setTimeout(() => {
        searchButton.style.transform = 'scale(1)';
      }, 100);
      const query = searchInput.value.trim();
      if (query) {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.location.href = searchUrl;
      }
    }
  });

  // Fetch random Pokémon sprite from PokéAPI
  const spriteElement = document.querySelector('#pokemon-sprite');
  const randomId = Math.floor(Math.random() * 1025) + 1; // Random ID from 1 to 1025
  fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
    .then(response => response.json())
    .then(data => {
      spriteElement.src = data.sprites.front_default || '';
      spriteElement.alt = data.name.charAt(0).toUpperCase() + data.name.slice(1);
    })
    .catch(error => {
      console.error('Error fetching Pokémon sprite:', error);
      spriteElement.alt = 'Failed to load Pokémon';
      spriteElement.style.background = '#FFD700'; // Fallback yellow background
      spriteElement.style.border = '2px solid #000000';
    });
});