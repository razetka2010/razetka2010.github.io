// ========== БАЗА ДАННЫХ ПРОГРАММ ==========
const programs = [
    { name: "Telegram", desc: "Быстрый и безопасный мессенджер", category: "internet", icon: "📱", version: "latest", file: "telegram.exe" },
    { name: "Visual Studio Code", desc: "Редактор исходного кода", category: "dev", icon: "📝", version: "latest", file: "VisualStudioCode.exe" },
    { name: "Python 3.13.13", desc: "Интерпретатор Python и менеджер пакетов pip", category: "dev", icon: "🐍", version: "3.13.13", file: "Python 3.13.13.exe"},
    { name: "Python 3.14.0", desc: "Интерпретатор Python и менеджер пакетов pip", category: "dev", icon: "🐍", version: "3.14.0", file: "Python 3.14.0.exe"},
    { name: "Git", desc: "Система контроля версий для разработчиков", category: "dev", icon: "🔀", version: "2.54.0", file: "Git 2.54.0.exe"},
    { name: "Yandex Browser", desc: "Браузер с умными технологиями от Яндекса, голосовой помощник Алиса", category: "internet", icon: "🌐", version: "latest", file: "Yandex.exe" },
    { name: "Claude", desc: "Мощный ИИ инструмент", category: "utils", icon: "🌐", version: "latest", file: "Claude Setup.exe"},
    { name: "Chrome", desc: "браузер, разрабатываемый компанией Google", category: "internet", icon: "🌐", version: "latest", file: "ChromeSetup.exe" },
    { name: "HAPP", desc: "Кроссплатформенное приложение-клиент для использования VPN-подключений", category: "utils", icon: "✨", version: "2.0", file: "HAPP.exe" },
    { name: "Запрет", desc: "Разблокировать discord и youtube", category: "utils", icon: "✨", version: "1.9.8", file: "zapret-discord-youtube-1.9.8b.zip" },
    { name: "WPS Office", desc: "Популярный бесплатный офисный пакет для работы с документами, таблицами и презентациями.", category: "utils", icon: "📝", version: "latest", file: "WPS Office.exe"},
    { name: "Запрет telegram", desc: "Локальный MTProto-прокси для Telegram Desktop", category: "utils", icon: "✨", version: "1.6.5", file: "TgWsProxy_windows.exe"}
];

// Категории для фильтрации
const categories = {
    all: "Все",
    internet: "🌐 Интернет",
    media: "🎬 Медиа",
    system: "🛠️ Системные",
    dev: "💻 Разработка",
    security: "🔒 Безопасность",
    graphics: "🎨 Графика",
    utils: "📦 Утилиты"
};

// ========== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ==========
let currentCategory = "all";
let currentSearch = "";

// ========== РЕНДЕР ПРОГРАММ ==========
function renderPrograms() {
    const grid = document.getElementById("programsGrid");
    if (!grid) return;
    
    const filtered = programs.filter(program => {
        const matchesCategory = currentCategory === "all" || program.category === currentCategory;
        const matchesSearch = program.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                              program.desc.toLowerCase().includes(currentSearch.toLowerCase());
        return matchesCategory && matchesSearch;
    });
    
    const countEl = document.getElementById("resultsCount");
    if (countEl) {
        countEl.textContent = `Найдено программ: ${filtered.length}`;
    }
    
    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="card" style="grid-column: 1/-1; text-align: center;">
                <p>😔 Ничего не найдено...</p>
                <p style="color: var(--text-muted); margin-top: 0.5rem;">Попробуйте изменить поиск или категорию</p>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = filtered.map(program => `
        <div class="program-card" data-category="${program.category}">
            <div class="program-icon">${program.icon}</div>
            <div class="program-info">
                <div class="program-name">${escapeHtml(program.name)}</div>
                <div class="program-desc">${escapeHtml(program.desc)}</div>
                <div class="program-meta">
                    <span class="program-category">${categories[program.category] || program.category}</span>
                    <span class="program-version">${program.version}</span>
                </div>
                <a href="downloads/${program.file}" class="download-btn" download>
                    ⬇️ Скачать
                </a>
            </div>
        </div>
    `).join("");
}

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// ========== СНЕЖИНКИ ==========
function createSnowflakes() {
    const container = document.getElementById("snowContainer");
    if (!container) return;
    
    const symbols = ["❄️", "❅", "❆", "✧", "✦", "●", "◦", "•"];
    const snowflakeCount = 80;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement("div");
        snowflake.classList.add("snowflake");
        
        const size = Math.random();
        if (size < 0.33) snowflake.classList.add("small");
        else if (size < 0.66) snowflake.classList.add("medium");
        else snowflake.classList.add("large");
        
        const speed = Math.random();
        if (speed < 0.33) snowflake.classList.add("slow");
        else if (speed < 0.66) snowflake.classList.add("normal");
        else snowflake.classList.add("fast");
        
        if (Math.random() > 0.7) snowflake.classList.add("delayed");
        
        snowflake.style.left = Math.random() * 100 + "%";
        snowflake.style.animationDuration = (Math.random() * 10 + 5) + "s";
        snowflake.style.animationDelay = (Math.random() * 10) + "s";
        snowflake.style.opacity = Math.random() * 0.5 + 0.3;
        snowflake.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
        
        container.appendChild(snowflake);
    }
}

// ========== МОБИЛЬНОЕ МЕНЮ ==========
function initMobileMenu() {
    const menuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileMenu");
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            mobileMenu.classList.toggle("active");
            document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : "";
        });
        
        const mobileLinks = mobileMenu.querySelectorAll(".mobile-link");
        mobileLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuBtn.classList.remove("active");
                mobileMenu.classList.remove("active");
                document.body.style.overflow = "";
            });
        });
    }
}

// ========== ФИЛЬТРЫ ==========
function initFilters() {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const searchInput = document.getElementById("searchInput");
    
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.cat;
            renderPrograms();
        });
    });
    
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearch = e.target.value;
            renderPrograms();
        });
    }
}

// ========== ЗАЩИТА ССЫЛОК ==========
function protectDownloads() {
    const links = document.querySelectorAll(".download-btn");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            console.log("Скачивание:", link.getAttribute("href"));
        });
    });
}

// ========== АНИМАЦИЯ ПОЯВЛЕНИЯ ==========
function observeCards() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll(".program-card").forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = "all 0.4s ease";
        observer.observe(card);
    });
}

// ========== INIT ==========
document.addEventListener("DOMContentLoaded", () => {
    createSnowflakes();
    renderPrograms();
    initMobileMenu();
    initFilters();
    protectDownloads();
    setTimeout(observeCards, 100);
});