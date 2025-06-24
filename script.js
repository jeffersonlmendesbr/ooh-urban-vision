// script.js
// Arquivo reservado para futuras interações de JavaScript, como:
// - Rolagem suave mais controlada (se necessário além do CSS)
// - Animações de entrada de seções/elementos
// - Lógica para microinterações mais complexas
// - Validações (embora não haja formulário, pode ser útil para outros fins)

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada e script.js pronto para novos ajustes!");

    // Lógica do menu antigo e IntersectionObserver para .is-visible foi removida.
    // O script será reconstruído com a nova lógica de menu fullscreen e animações.

    const menuToggle = document.querySelector('.menu-toggle');
    const fullscreenMenu = document.getElementById('fullscreen-menu');
    const body = document.body;
    const fullscreenMenuLinks = document.querySelectorAll('.fullscreen-menu-link');
    const closeMenuButton = document.querySelector('.close-fullscreen-menu');

    function openMenu() {
        body.classList.add('menu-open');
        menuToggle.setAttribute('aria-expanded', 'true');
        body.style.overflow = 'hidden'; // Bloquear scroll da página

        if (closeMenuButton && menuToggle) {
            const hamburgerRect = menuToggle.getBoundingClientRect();
            closeMenuButton.style.top = `${hamburgerRect.top}px`;
            closeMenuButton.style.left = `${hamburgerRect.left}px`;
            closeMenuButton.style.width = `${hamburgerRect.width}px`;
            closeMenuButton.style.height = `${hamburgerRect.height}px`;
            closeMenuButton.style.opacity = '1';
            closeMenuButton.style.pointerEvents = 'auto';
        }
    }

    function closeMenu() {
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        body.style.overflow = ''; // Restaurar scroll da página

        if (closeMenuButton) {
            closeMenuButton.style.opacity = '0';
            closeMenuButton.style.pointerEvents = 'none';
        }
    }

    if (menuToggle && fullscreenMenu) {
        menuToggle.addEventListener('click', () => {
            if (body.classList.contains('menu-open')) {
                // Se o menu já está aberto, e o usuário clica no hamburger de novo,
                // podemos optar por fechar ou não fazer nada (já que temos o X dedicado).
                // Por enquanto, vamos manter o toggle, pode ser útil.
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (closeMenuButton) {
        closeMenuButton.addEventListener('click', closeMenu);
    }

    // Fechar o menu ao clicar em um link
    fullscreenMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // A navegação para a âncora ocorrerá por padrão.
            // Apenas precisamos garantir que o menu feche.
            if (body.classList.contains('menu-open')) {
                closeMenu();
            }
        });
    });


    // Manter a atualização do ano no rodapé
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Efeito Parallax para a seção Hero
    const heroSection = document.querySelector('#hero.hero-fullscreen');
    const heroBackground = document.querySelector('.hero-background-image');

    if (heroSection && heroBackground) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            // Move o fundo mais devagar que o scroll (ajuste o divisor para mudar a intensidade)
            // Apenas aplicar se a seção Hero estiver visível para otimizar
            if (scrollPosition < window.innerHeight) { // window.innerHeight é a altura da seção Hero
                heroBackground.style.transform = `translateY(${scrollPosition * 0.3}px)`;
            }
        });
    }
});
