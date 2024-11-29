document.querySelectorAll('.category-container').forEach((container) => {
    const leftBtn = container.querySelector('.left-btn');
    const rightBtn = container.querySelector('.right-btn');
    const videoRow = container.querySelector('.category-videos');

    // Botão de rolar à esquerda
    leftBtn.addEventListener('click', () => {
        videoRow.scrollBy({ left: -videoRow.offsetWidth, behavior: 'smooth' });
    });

    // Botão de rolar à direita
    rightBtn.addEventListener('click', () => {
        videoRow.scrollBy({ left: videoRow.offsetWidth, behavior: 'smooth' });
    });
});

document.querySelectorAll('.small-video').forEach((video) => {
    video.addEventListener('click', () => {
        video.requestFullscreen();
    });
});

document.addEventListener('fullscreenchange', () => {
    const fullscreenVideoControls = document.querySelector('.fullscreen-video-controls');
    if (fullscreenVideoControls) {
        fullscreenVideoControls.style.display = document.fullscreenElement ? 'block' : 'none';
    }
});

// Função para rolar os vídeos para a direita
function scrollRight() {
    const container = document.querySelector('.category-videos');
    const videoCards = document.querySelectorAll('.video-card');
    const videoCardWidth = videoCards[0].offsetWidth + 20; // Considerando a margem
    const totalWidth = container.scrollWidth;

    if (container.scrollLeft + container.offsetWidth < totalWidth) {
        container.scrollLeft += videoCardWidth; // Rola para a direita
    }
}

// Função para rolar os vídeos para a esquerda
function scrollLeft() {
    const container = document.querySelector('.category-videos');
    const videoCards = document.querySelectorAll('.video-card');
    const videoCardWidth = videoCards[0].offsetWidth + 20; // Considerando a margem

    if (container.scrollLeft > 0) {
        container.scrollLeft -= videoCardWidth; // Rola para a esquerda
    }
}

// Adicionando os eventos aos botões
document.querySelector('.left-btn').addEventListener('click', scrollLeft);
document.querySelector('.right-btn').addEventListener('click', scrollRight);

document.querySelectorAll('.category-container').forEach((container) => {
    const videoRow = container.querySelector('.category-videos');
    const leftBtn = container.querySelector('.left-btn');
    const rightBtn = container.querySelector('.right-btn');
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
});
