document.addEventListener('DOMContentLoaded', () => {

    const navMenu = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const menuBtn = document.getElementById('menu-btn');
    const menuIcon = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        if (navMenu.classList.contains('active')) {
            menuIcon.classList.replace('ph-list', 'ph-x');
        } else {
            menuIcon.classList.replace('ph-x', 'ph-list');
        }
    });

    /* FUNÇÕES PARA O SLIDER */
    const slides = document.querySelectorAll('.carousel-slide');
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');

    let currentSlide = 0;
    let autoPlayTimer;

    //Função para mostrar o slide atual (currentSlide)
    function showTargetSlide(index) {
        //Inicialmente remove todos os slides ativos
        slides.forEach(slide => slide.classList.remove('active'));

        if (index >= slides.length) {
            currentSlide = 0;
        }
        else if (index < 0) {
            currentSlide = slides.length - 1;
        }
        else {
            currentSlide = index;
        }

        slides[currentSlide].classList.add('active');
    }

    function runAutoPlay() {
        autoPlayTimer = setInterval(() => {
            showTargetSlide(currentSlide + 1);
        }, 6000);
    }

    //Ações dos botões
    btnNext.addEventListener('click', () => {
        showTargetSlide(currentSlide + 1);
        resetAutoPlay();
    });

    btnPrev.addEventListener('click', () => {
        showTargetSlide(currentSlide - 1);
        resetAutoPlay();
    });

    function resetAutoPlay() {
        clearInterval(autoPlayTimer);
        runAutoPlay();
    }

    //Dá a partida na transição dos slides
    runAutoPlay();

    //Dark-Mode

    const themeBtn = document.getElementById('theme-toggle');
    const themeIcon = themeBtn.querySelector('i');


    const currentTheme = localStorage.getItem('theme')
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.replace('ph-moon', 'ph-sun')
    }


    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        const isDark = document.body.classList.contains('dark-mode')

        if (isDark) {
            themeIcon.classList.replace('ph-moon', 'ph-sun');
            localStorage.setItem('theme', 'dark')
        } else {
            themeIcon.classList.replace('ph-sun', 'ph-moon');
            localStorage.setItem('theme', 'light')
        }
    });

});