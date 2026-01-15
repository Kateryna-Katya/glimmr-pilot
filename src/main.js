document.addEventListener('DOMContentLoaded', () => {
    // Инициализация иконок Lucide
    lucide.createIcons();

    // Эффект хедера при скролле
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Плавный скролл для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    // В дополнение к предыдущему коду
document.addEventListener('DOMContentLoaded', () => {
    // Можно добавить эффект параллакса для сетки на чистом JS
    const decor = document.querySelector('.hero-bg-decor');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        if (decor) {
            decor.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        }
    });
});
    // Добавляем к существующему коду

// Нативный Intersection Observer для анимации при скролле
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal-up, .reveal-right').forEach(el => observer.observe(el));

// Эффект печатной машинки для блока кода
const codeText = `const assistant = new GlimmrAI({
  mode: 'autonomous',
  learning: true,
  target: 'business_growth'
});

assistant.start();`;

function typeWriter(text, element, speed = 50) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Запускаем печать, когда секция видна
const visualBody = document.querySelector('.visual-card');
const typewriterEl = document.getElementById('typewriter');

const visualObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        typeWriter(codeText, typewriterEl);
        visualObserver.disconnect(); // Запускаем один раз
    }
}, { threshold: 0.5 });

    if (visualBody) visualObserver.observe(visualBody);
    // Добавляем логику взаимодействия с карточками
const cards = document.querySelectorAll('.feature-card');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cards.forEach(c => {
            if (c !== card) c.style.opacity = '0.4';
        });
    });
    
    card.addEventListener('mouseleave', () => {
        cards.forEach(c => {
            c.style.opacity = '1';
        });
    });
});

// Переинициализация иконок для новых элементов
if (window.lucide) {
    lucide.createIcons();
}
});