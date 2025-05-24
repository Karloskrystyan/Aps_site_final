document.addEventListener("DOMContentLoaded", () => {
    // Função para os cards clicáveis
    const cards = document.querySelectorAll(".card-img");
    
    cards.forEach((card) => {
        // Garante que todos os textos começam escondidos
        const textElement = card.closest('.card-container').querySelector(".h3-card");
        textElement.style.display = 'none';
        
        card.addEventListener("click", () => {
            const container = card.closest('.card-container');
            const textElement = container.querySelector(".h3-card");
            
            // Fecha outros cards abertos
            document.querySelectorAll('.h3-card').forEach(el => {
                if (el !== textElement) {
                    el.classList.remove("visible");
                    el.style.display = 'none';
                    el.closest('.card-container').querySelector('.card-img').classList.remove("slide-left");
                }
            });
            
            // Alterna o card clicado
            card.classList.toggle("slide-left");
            
            if (card.classList.contains("slide-left")) {
                textElement.style.display = 'block';
                setTimeout(() => {
                    textElement.classList.add("visible");
                }, 10);
            } else {
                textElement.classList.remove("visible");
                setTimeout(() => {
                    textElement.style.display = 'none';
                }, 500);
            }
        });
    });

    // Animação ao rolar para aparecer elementos
    const aparecerElements = document.querySelectorAll('.aparecer');
    
    function animarAoRolar() {
        aparecerElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('visivel');
            }
        });
    }

    // Header no scroll
    window.addEventListener("scroll", function(){
        let header = document.querySelector('header');
        header.classList.toggle('rolagem', window.scrollY > 0);
        animarAoRolar();
    });

    // Ajusta a altura dos cards para mobile
    function ajustarAlturaCards() {
        const cards = document.querySelectorAll('.card-img');
        cards.forEach(card => {
            card.style.height = window.innerWidth < 992 ? '300px' : '500px';
        });
    }
    
    // Inicializações
    animarAoRolar();
    ajustarAlturaCards();
    window.addEventListener('resize', ajustarAlturaCards);
});