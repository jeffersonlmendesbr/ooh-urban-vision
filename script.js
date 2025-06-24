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

    // Animação de entrada para cards na seção "Experiências" - LÓGICA ANTIGA COMENTADA
    /*
    const experienciaSectionAnimateCards = document.querySelector('#experiencias'); // Variável renomeada para não conflitar
    if (experienciaSectionAnimateCards) { ... } // Conteúdo antigo comentado
    */

    // Scroll Horizontal Controlado por Scroll Vertical para #experiencias - LÓGICA ANTIGA COMENTADA
    /*
    const experienciasSectionScroll = document.querySelector('#experiencias');
    if (experienciasSectionScroll && experienciasLinhaOld && selosGeraisOld) { ... } // Conteúdo antigo comentado
    */

    // NOVA LÓGICA PARA SCROLL HORIZONTAL DE SLIDES EM #experiencias
    const experienciasSectionNew = document.querySelector('#experiencias');
    const slidesContainerNew = experienciasSectionNew ? experienciasSectionNew.querySelector('.experiencias-slides-container') : null;
    const slidesNew = slidesContainerNew ? slidesContainerNew.querySelectorAll('.card-experiencia-fullscreen') : [];

    if (experienciasSectionNew && slidesContainerNew && slidesNew.length > 0) {
        let isExperienciasScrollActiveNew = false;
        let currentSlideIndexNew = 0;
        const totalSlidesNew = slidesNew.length;
        let isAnimatingNew = false;
        const animationDuration = 800; // ms, deve corresponder à transição CSS no .experiencias-slides-container

        function updateSlides() {
            if (!slidesContainerNew) return;
            const newTransformX = currentSlideIndexNew * -100; // em vw
            slidesContainerNew.style.transform = `translateX(${newTransformX}vw)`;

            slidesNew.forEach((slide, index) => {
                if (index === currentSlideIndexNew) {
                    slide.classList.add('is-active');
                } else {
                    slide.classList.remove('is-active');
                }
            });

            setTimeout(() => {
                isAnimatingNew = false;
            }, animationDuration);
        }

        function handleExperienciasWheel(event) {
            if (!isExperienciasScrollActiveNew || isAnimatingNew) {
                if (isAnimatingNew && isExperienciasScrollActiveNew) event.preventDefault(); // Prevenir scroll vertical enquanto anima horizontal
                return;
            }

            const deltaY = event.deltaY;

            if (deltaY > 0) { // Scroll para baixo -> próximo slide (direita)
                if (currentSlideIndexNew < totalSlidesNew - 1) {
                    event.preventDefault();
                    isAnimatingNew = true;
                    currentSlideIndexNew++;
                    updateSlides();
                } else {
                    // No último slide, permite scroll vertical para próxima seção
                    // console.log("Fim dos slides, liberando scroll vertical para baixo");
                    isExperienciasScrollActiveNew = false; // Desativa temporariamente para permitir snap
                    setTimeout(() => { if(experienciasSectionNew.getBoundingClientRect().top < 0) isExperienciasScrollActiveNew = true; }, 50); // Reativa se ainda na seção
                }
            } else if (deltaY < 0) { // Scroll para cima -> slide anterior (esquerda)
                if (currentSlideIndexNew > 0) {
                    event.preventDefault();
                    isAnimatingNew = true;
                    currentSlideIndexNew--;
                    updateSlides();
                } else {
                    // No primeiro slide, permite scroll vertical para seção anterior
                    // console.log("Início dos slides, liberando scroll vertical para cima");
                    isExperienciasScrollActiveNew = false; // Desativa temporariamente
                    setTimeout(() => { if(experienciasSectionNew.getBoundingClientRect().top === 0) isExperienciasScrollActiveNew = true; }, 50); // Reativa se ainda na seção
                }
            }
        }

        const expObserverOptions = {
            root: null,
            threshold: 0.6 // Pelo menos 60% da seção visível
        };

        const expObserverCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // console.log('Experiencias section IS intersecting');
                    isExperienciasScrollActiveNew = true;
                    // Ativa o primeiro slide se estiver entrando na seção
                    if (!slidesNew[currentSlideIndexNew].classList.contains('is-active')) {
                        slidesNew[currentSlideIndexNew].classList.add('is-active');
                    }
                    window.addEventListener('wheel', handleExperienciasWheel, { passive: false });
                } else {
                    // console.log('Experiencias section NOT intersecting');
                    isExperienciasScrollActiveNew = false;
                    window.removeEventListener('wheel', handleExperienciasWheel);
                }
            });
        };

        const experienciasMainObserver = new IntersectionObserver(expObserverCallback, expObserverOptions);
        experienciasMainObserver.observe(experienciasSectionNew);

        // Inicializa o primeiro slide como ativo se a seção já estiver visível no carregamento
        // (considerando que o snap scroll pode já colocar a seção na tela)
        if (experienciasSectionNew.getBoundingClientRect().top === 0 && experienciasSectionNew.getBoundingClientRect().bottom <= window.innerHeight + 5) { // +5 para margem de erro
             if (slidesNew.length > 0) slidesNew[0].classList.add('is-active');
             isExperienciasScrollActiveNew = true;
             window.addEventListener('wheel', handleExperienciasWheel, { passive: false });
        }
    }
    if (experienciaSectionAnimateCards) {
        const animatedCards = experienciaSectionAnimateCards.querySelectorAll('[data-animate-card]');

        const cardObserverOptions = {
            root: null,
            rootMargin: '0px 0px -15% 0px',
            threshold: 0.1
        };

        const cardObserverCallback = (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.style.transitionDelay = `${index * 0.12}s`;
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                    observer.unobserve(entry.target);
                }
            });
        };

        const cardObserver = new IntersectionObserver(cardObserverCallback, cardObserverOptions);
        animatedCards.forEach(card => cardObserver.observe(card));
    }

    // Scroll Horizontal Controlado por Scroll Vertical para #experiencias
    const experienciasSection = document.querySelector('#experiencias');
    const experienciasLinha = document.querySelector('.experiencias-linha-horizontal');
    const selosGerais = document.querySelector('#experiencias .selos-gerais'); // Selecionar os selos

    if (experienciasSection && experienciasLinha && selosGerais) { // Adicionar selosGerais à condição
        let isExperienciasActive = false;
        let currentX = 0;
        let minX = 0;

        function calculateScrollLimits() {
            const containerWidth = experienciasLinha.offsetWidth;
            const contentWidth = experienciasLinha.scrollWidth;
            minX = containerWidth - contentWidth;
            if (minX > 0) minX = 0; // Caso o conteúdo seja menor que o container
            // console.log(`Container: ${containerWidth}, Content: ${contentWidth}, MinX: ${minX}`);
        }

        function handleWheelScroll(event) {
            if (!isExperienciasActive) return;

            const delta = event.deltaY;
            let newX = currentX - delta * 0.7; // Fator de sensibilidade 0.7

            // Clamp newX
            newX = Math.max(minX, Math.min(0, newX));

            // Se o scroll horizontal não mudou E estamos nos limites, permite o scroll vertical da página
            if (newX === currentX && (newX === 0 && delta < 0 || newX === minX && delta > 0)) {
                // console.log("Allowing page scroll");
                return; // Não previne o default, permitindo snap para outra seção
            }

            event.preventDefault(); // Previne o scroll vertical da página
            currentX = newX;
            experienciasLinha.style.transform = `translateX(${currentX}px)`;

            // Aplicar parallax aos selos gerais
            // Mover os selos numa direção oposta ou numa fração da velocidade para dar profundidade
            // Se currentX vai de 0 (início) a um valor negativo (fim),
            // um parallaxFactor positivo fará os selos moverem menos na mesma direção.
            // um parallaxFactor negativo fará os selos moverem na direção oposta.
            const parallaxFactor = 0.2; // Selos movem 20% da distância dos cards, na mesma direção
            selosGerais.style.transform = `translateX(${currentX * parallaxFactor}px)`;
            // console.log(`Wheeling: deltaY=${delta}, currentX=${currentX}, selosX=${currentX * parallaxFactor}`);
        }

        const experienciasObserverOptions = {
            root: null,
            threshold: 0.5 // Pelo menos 50% da seção visível para ativar
        };

        const experienciasObserverCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // console.log("Experiencias section active");
                    isExperienciasActive = true;
                    calculateScrollLimits(); // Calcular/recalcular limites quando a seção fica ativa
                    window.addEventListener('wheel', handleWheelScroll, { passive: false });
                } else {
                    // console.log("Experiencias section inactive");
                    isExperienciasActive = false;
                    window.removeEventListener('wheel', handleWheelScroll);
                }
            });
        };

        const experienciasScrollObserver = new IntersectionObserver(experienciasObserverCallback, experienciasObserverOptions);
        experienciasScrollObserver.observe(experienciasSection);

        // Recalcular em resize
        window.addEventListener('resize', () => {
            if (isExperienciasActive) {
                calculateScrollLimits();
                // Opcional: ajustar currentX se o novo minX for menor que currentX
                currentX = Math.max(minX, Math.min(0, currentX));
                experienciasLinha.style.transform = `translateX(${currentX}px)`;
            }
        });
    }
});
