/**
 * Основной JavaScript файл для портфолио Артёма
 * @version 1.0.0
 */

(function() {
    'use strict';

    // Конфигурация
    const CONFIG = {
        name: 'Артём',
        location: 'Новый Уренгой',
        github: 'razetka2010',
        email: 'raz_etka_2010@mail.ru',
        phone: '+79088647354',
        version: '1.0.0',
        snowflakes: {
            count: 50, // Количество снежинок
            symbols: ['❄️', '❅', '❆', '✻', '✼', '❄️', '❄️'], // Символы снежинок
            minSize: 0.5,
            maxSize: 1.5
        }
    };

    // Инициализация при загрузке DOM
    document.addEventListener('DOMContentLoaded', function() {
        initApp();
    });

    /**
     * Главная функция инициализации
     */
    function initApp() {
        console.log(`🚀 Портфолио ${CONFIG.name} v${CONFIG.version} загружено`);
        console.log(`📍 ${CONFIG.location}`);

        createSnowflakes();
        setupMobileMenu();
        setupSmoothScroll();
        setupEventListeners();
        setupExternalLinks();
        initializeAnimations();
        updateFooterYear();
        handleActiveNavLinks();
    }

    /**
     * Создание падающих снежинок
     */
    function createSnowflakes() {
        const container = document.querySelector('.snow-container');
        if (!container) return;

        const snowflakeCount = CONFIG.snowflakes.count;
        const symbols = CONFIG.snowflakes.symbols;

        for (let i = 0; i < snowflakeCount; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');

            // Случайный символ
            const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
            snowflake.textContent = randomSymbol;

            // Случайный размер
            const sizeClasses = ['small', 'medium', 'large'];
            const randomSize = sizeClasses[Math.floor(Math.random() * sizeClasses.length)];
            snowflake.classList.add(randomSize);

            // Случайная скорость
            const speedClasses = ['slow', 'normal', 'fast'];
            const randomSpeed = speedClasses[Math.floor(Math.random() * speedClasses.length)];
            snowflake.classList.add(randomSpeed);

            // Случайная задержка
            if (Math.random() > 0.5) {
                snowflake.classList.add('delayed');
            }

            // Случайная позиция по горизонтали
            const left = Math.random() * 100;
            snowflake.style.left = left + '%';

            // Случайная прозрачность
            const opacity = 0.3 + Math.random() * 0.6;
            snowflake.style.opacity = opacity;

            container.appendChild(snowflake);
        }
    }

    /**
     * Настройка мобильного меню
     */
    function setupMobileMenu() {
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const mobileMenu = document.querySelector('.mobile-menu');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        if (!menuBtn || !mobileMenu) return;

        menuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });

        // Закрытие меню при клике на ссылку
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        // Закрытие при клике вне меню
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                menuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    /**
     * Настройка плавного скролла
     */
    function setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');

                if (href === '#') return;

                const targetElement = document.querySelector(href);

                if (targetElement) {
                    e.preventDefault();

                    const navHeight = document.querySelector('.fullscreen-nav').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    /**
     * Подсветка активных ссылок навигации
     */
    function handleActiveNavLinks() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        window.addEventListener('scroll', () => {
            let current = '';
            const navHeight = document.querySelector('.fullscreen-nav').offsetHeight;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - navHeight - 50;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });

            mobileLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }

    /**
     * Настройка обработчиков событий
     */
    function setupEventListeners() {
        // Отслеживание кликов по контактам
        document.querySelectorAll('.contact-link, .github-link, .social-link').forEach(link => {
            link.addEventListener('click', handleContactClick);
        });

        // Обработка кнопок стримов
        const twitchButton = document.querySelector('.button-twitch');
        if (twitchButton) {
            twitchButton.addEventListener('click', () => handleExternalLink('twitch'));
        }

        const donateButton = document.querySelector('.button-donate');
        if (donateButton) {
            donateButton.addEventListener('click', () => handleExternalLink('donate'));
        }
    }

    /**
     * Обработка клика по контакту
     */
    function handleContactClick(e) {
        const contactElement = e.currentTarget;
        const contactText = contactElement.textContent.trim();
        const contactHref = contactElement.getAttribute('href');

        let contactType = 'unknown';

        if (contactHref?.startsWith('mailto:')) contactType = 'email';
        else if (contactHref?.startsWith('tel:')) contactType = 'phone';
        else if (contactHref?.includes('github.com')) contactType = 'github';

        logUserAction('contact_click', {
            type: contactType,
            value: contactText
        });
    }

    /**
     * Обработка внешних ссылок
     */
    function handleExternalLink(platform) {
        logUserAction('external_link_click', {
            platform: platform,
            timestamp: new Date().toISOString()
        });
    }

    /**
     * Настройка внешних ссылок
     */
    function setupExternalLinks() {
        document.querySelectorAll('a[target="_blank"]').forEach(link => {
            if (!link.getAttribute('rel')?.includes('noopener')) {
                link.setAttribute('rel', 'noopener noreferrer');
            }

            link.addEventListener('click', function() {
                logUserAction('external_link_click', {
                    url: this.href
                });
            });
        });
    }

    /**
     * Инициализация анимаций
     */
    function initializeAnimations() {
        document.body.classList.add('js-loaded');

        const cards = document.querySelectorAll('.card');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });

        const tags = document.querySelectorAll('.tag');
        tags.forEach((tag, index) => {
            tag.style.animation = `fadeIn 0.3s ease-out ${index * 0.05}s both`;
        });
    }

    /**
     * Обновление года в футере
     */
    function updateFooterYear() {
        const footer = document.querySelector('.footer');
        if (footer) {
            const year = new Date().getFullYear();
            footer.innerHTML = footer.innerHTML.replace('2025', year);
        }
    }

    /**
     * Логирование действий пользователя
     */
    function logUserAction(action, data = {}) {
        const logEntry = {
            action: action,
            timestamp: new Date().toISOString(),
            data: data
        };

        console.log('📊 User Action:', logEntry);
    }

    // Экспорт методов для глобального доступа
    window.portfolio = {
        version: CONFIG.version,
        getConfig: () => ({ ...CONFIG })
    };

})();

/**
 * Обработка ошибок
 */
window.addEventListener('error', function(e) {
    console.error('❌ Ошибка:', e.error?.message || e.message);
});

window.addEventListener('load', function() {
    console.log('%c👋 Портфолио загружено. Добро пожаловать!', 'color: #6bb2e6; font-size: 14px;');
});
