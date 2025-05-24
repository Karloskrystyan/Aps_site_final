window.addEventListener("scroll",function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY >0)
})
const themeToggle = document.getElementById('themeToggle');
  const body = document.body;
  
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '☀️ Modo Claro';
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      themeToggle.textContent = '☀️ Modo Claro';
    } else {
      localStorage.setItem('theme', 'light');
      themeToggle.textContent = '🌙 Modo Escuro';
    }
  })
  document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const indicators = document.querySelectorAll('.indicator');
    let currentIndex = 0;
    const totalItems = items.length;

    function updateCarousel() {
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Atualiza indicadores
      indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
      });
    };

    // Navegação por botões
    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalItems) % totalItems;
      updateCarousel();
    });

    // Navegação por indicadores
    indicators.forEach(indicator => {
      indicator.addEventListener('click', () => {
        currentIndex = parseInt(indicator.getAttribute('data-slide-to'));
        updateCarousel();
      });
    });

    // Auto-rotacionar (opcional)
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalItems;
      updateCarousel();
    }, 5000);
  });
