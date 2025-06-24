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
            if (scrollPosition < window.innerHeight) {
                heroBackground.style.transform = `translateY(${scrollPosition * 0.3}px)`;
            }
        });
    }

    // Animação de entrada para parágrafos na seção "Sobre Mim"
    const sobreMimSection = document.querySelector('#sobre-mim');
    if (sobreMimSection) {
        const animatedLines = sobreMimSection.querySelectorAll('[data-animate-line]');

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2 // Pelo menos 20% da linha/parágrafo visível
        };

        const observerCallback = (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Aplicar delay escalonado baseado no índice do elemento
                    entry.target.style.transitionDelay = `${index * 0.15}s`; // 0.15s de delay entre cada linha
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target); // Animar apenas uma vez
                }
            });
        };

        const lineObserver = new IntersectionObserver(observerCallback, observerOptions);
        animatedLines.forEach(line => lineObserver.observe(line));
    }

    // Animação para a seção Manifesto (aspas e texto)
    const manifestoSection = document.querySelector('#manifesto');
    if (manifestoSection) {
        const animatedAspas = manifestoSection.querySelectorAll('[data-animate-aspas]');
        const animatedManifestoText = manifestoSection.querySelectorAll('[data-animate-manifesto]');

        const manifestoObserverOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.3 // Pelo menos 30% da seção visível para iniciar animação do manifesto
        };

        const manifestoCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animar aspas
                    manifestoSection.classList.add('aspas-visiveis');

                    // Animar texto do manifesto com delay escalonado
                    animatedManifestoText.forEach((textElement, index) => {
                        textElement.style.transitionDelay = `${0.3 + index * 0.2}s`; // Delay inicial + incremento
                        textElement.style.opacity = '1';
                        textElement.style.transform = 'translateY(0)';
                    });
                    observer.unobserve(entry.target); // Animar apenas uma vez
                }
            });
        };

        const manifestoObserver = new IntersectionObserver(manifestoCallback, manifestoObserverOptions);
        manifestoObserver.observe(manifestoSection);
    }

    // Lógica para mudar cor do header baseado na seção visível
    const header = document.getElementById('main-nav');
    const allSections = document.querySelectorAll('.section'); // Inclui o footer se ele tiver a classe .section

    if (header && allSections.length > 0) {
        const headerColorObserverOptions = {
            root: null, // viewport
            rootMargin: "-10% 0px -85% 0px", // Observa uma faixa na parte superior da tela (abaixo do header)
            threshold: 0.01 // Dispara assim que um pixel da seção entra na faixa
        };

        const headerColorCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // console.log(`Intersecting: ${entry.target.id}`);
                    const currentSectionTheme = entry.target.getAttribute('data-theme');
                    if (currentSectionTheme === 'dark') {
                        header.classList.add('header-light-text');
                    } else {
                        // Se a seção não for 'dark', ou não tiver o atributo, remove a classe.
                        // A seção Hero tem seu próprio CSS para o header claro, então remover
                        // .header-light-text não afetará o estilo do header no Hero.
                        header.classList.remove('header-light-text');
                    }
                }
            });
        };

        const headerColorObserver = new IntersectionObserver(headerColorCallback, headerColorObserverOptions);
        allSections.forEach(section => {
            headerColorObserver.observe(section);
        });
    }
});
