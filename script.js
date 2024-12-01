document.querySelectorAll('.category-container').forEach((container) => {
    const leftBtn = container.querySelector('.left-btn');
    const rightBtn = container.querySelector('.right-btn');
    const videoRow = container.querySelector('.category-videos');

    if (leftBtn && rightBtn && videoRow) {
        const videoWidth = videoRow.querySelector('.video-card').offsetWidth + 20; // Largura + espaçamento

        // Função para rolar para a direita
        rightBtn.addEventListener('click', () => {
            if (videoRow.scrollLeft + videoRow.offsetWidth < videoRow.scrollWidth) {
                videoRow.scrollBy({ left: videoWidth, behavior: 'smooth' });
            }
        });

        // Função para rolar para a esquerda
        leftBtn.addEventListener('click', () => {
            if (videoRow.scrollLeft > 0) {
                videoRow.scrollBy({ left: -videoWidth, behavior: 'smooth' });
            }
        });
    }
});

// Função de tela cheia nos vídeos
document.querySelectorAll('.small-video').forEach((video) => {
    video.addEventListener('click', () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
    });
});

// Mostrar/ocultar controles de vídeo em tela cheia
document.addEventListener('fullscreenchange', () => {
    const fullscreenVideoControls = document.querySelector('.fullscreen-video-controls');
    if (fullscreenVideoControls) {
        fullscreenVideoControls.style.display = document.fullscreenElement ? 'block' : 'none';
    }
});

// Selecionando elementos
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const overlay = document.getElementById('overlay');

// Função para abrir o menu
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('open');
    overlay.classList.toggle('active'); // Exibe a sobreposição
});

// Fechar o menu ao clicar fora dele ou na sobreposição
document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('open');
        overlay.classList.remove('active'); // Remove a sobreposição
    }
});

// Obtendo os elementos do menu
const categoriesLink = document.getElementById('categories-link');
const mainMenu = document.getElementById('main-menu');
const categoriesMenu = document.getElementById('categories-menu');

// Adicionando o evento de clique para mostrar/esconder menus
categoriesLink.addEventListener('click', function(event) {
    event.preventDefault(); // Evita o comportamento padrão do link

    // Alternar entre o menu principal e o menu de categorias
    if (categoriesMenu.classList.contains('show')) {
        categoriesMenu.classList.remove('show'); // Esconde o menu de categorias
    } else {
        mainMenu.classList.add('hidden'); // Oculta o menu principal
        categoriesMenu.classList.add('show'); // Mostra o menu de categorias
    }
});

// Adicionando evento para cada link de categoria
const categoryLinks = categoriesMenu.querySelectorAll('a');

categoryLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Ao clicar em uma categoria, voltar ao menu principal
        categoriesMenu.classList.remove('show'); // Ocultar menu de categorias
        mainMenu.classList.remove('hidden'); // Mostrar menu principal
    });
});

