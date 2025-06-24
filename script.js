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

    if (menuToggle && fullscreenMenu) {
        menuToggle.addEventListener('click', () => {
            body.classList.toggle('menu-open');
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);

            if (body.classList.contains('menu-open')) {
                body.style.overflow = 'hidden'; // Bloquear scroll da página
            } else {
                body.style.overflow = ''; // Restaurar scroll da página
            }
        });
    }

    // Fechar o menu ao clicar em um link
    fullscreenMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (body.classList.contains('menu-open')) {
                body.classList.remove('menu-open');
                menuToggle.setAttribute('aria-expanded', 'false');
                body.style.overflow = ''; // Restaurar scroll da página
            }
            // A rolagem suave para a seção será tratada no próximo passo do plano
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
