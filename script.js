// script.js
// Arquivo reservado para futuras interações de JavaScript, como:
// - Rolagem suave mais controlada (se necessário além do CSS)
// - Animações de entrada de seções/elementos
// - Lógica para microinterações mais complexas
// - Validações (embora não haja formulário, pode ser útil para outros fins)

document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada e script.js pronto!");

    const mainNav = document.getElementById('main-nav');
    const navHeight = mainNav ? mainNav.offsetHeight : 70; // Altura do menu para offset
    const navLinks = document.querySelectorAll('#main-nav ul li a');
    const sections = document.querySelectorAll('.section');

    // Rolagem suave para links do menu
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                let targetPosition = targetSection.offsetTop;

                // Ajuste para o offset do menu SOMENTE se não for o link do logo para o #hero
                // ou se o targetSection for o próprio #hero (para evitar duplo desconto)
                if (targetId !== '#hero' || (targetId === '#hero' && targetSection.id === 'hero')) {
                     // Se for o link do logo para #hero, o padding-top do body já compensa
                     // Se for outro link, descontar altura do menu
                    if(targetId !== '#hero') {
                        targetPosition -= navHeight;
                    }
                }


                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Adicionar classe 'active' ao link do menu conforme a seção visível
    function setActiveLink() {
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Considera a altura do menu + um pequeno buffer
            if (pageYOffset >= sectionTop - navHeight - 50) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink(); // Define o link ativo no carregamento da página

    // Animação de entrada de seções com Intersection Observer
    const sectionObserverOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% da seção visível
    };

    function sectionCallback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: Desconectar o observer depois que a animação ocorreu uma vez
                // observer.unobserve(entry.target);
            } else {
                // Opcional: Remover a classe se quiser que a animação ocorra toda vez que rolar para fora e para dentro
                // entry.target.classList.remove('is-visible');
            }
        });
    }

    const sectionObserver = new IntersectionObserver(sectionCallback, sectionObserverOptions);

    sections.forEach(section => {
        // A seção Hero já é visível no carregamento, então aplicamos a classe diretamente
        // ou ajustamos o threshold/timing para ela. Para simplificar, vou aplicar direto.
        if (section.id === 'hero') {
            section.classList.add('is-visible');
        } else {
            sectionObserver.observe(section);
        }
    });

    // Atualizar o ano no rodapé
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
