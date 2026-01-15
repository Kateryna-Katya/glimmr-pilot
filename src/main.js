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
    window.addEventListener('scroll', () => {
    const innovationsSection = document.querySelector('.innovations');
    const progressBar = document.querySelector('.progress-bar');
    
    if (innovationsSection && progressBar) {
        const sectionRect = innovationsSection.getBoundingClientRect();
        const sectionHeight = innovationsSection.offsetHeight;
        
        // Вычисляем процент прокрутки внутри секции
        let progress = (Math.abs(sectionRect.top) / (sectionHeight - window.innerHeight)) * 100;
        
        if (sectionRect.top > 0) progress = 0;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = `${progress}%`;
    }
});

// Наблюдатель для подсветки активных элементов в правой части
const itemObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
        } else {
            entry.target.style.opacity = "0.3";
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.innovation-item').forEach(item => {
    item.style.transition = "opacity 0.5s ease";
    itemObserver.observe(item);
});
    // Логика фильтров блога
const filterItems = document.querySelectorAll('.filter-item');

filterItems.forEach(item => {
    item.addEventListener('click', () => {
        filterItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        // Здесь можно добавить логику фильтрации карточек
        console.log(`Фильтр: ${item.textContent}`);
    });
});
    document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ai-form');
    const phoneInput = document.getElementById('phone');
    const statusDiv = document.getElementById('form-status');
    const captchaLabel = document.getElementById('captcha-label');
    
    // Генерация капчи
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const captchaResult = num1 + num2;
    captchaLabel.innerText = `Сколько будет: ${num1} + ${num2} = ?`;

    // Валидация телефона (только цифры)
    phoneInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    });

    // Обработка отправки
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const userCaptcha = document.getElementById('captcha').value;
        
        // Сброс статуса
        statusDiv.style.display = 'none';
        statusDiv.className = 'form-status';

        // Проверка капчи
        if (parseInt(userCaptcha) !== captchaResult) {
            statusDiv.innerText = 'Ошибка: Неверный ответ капчи.';
            statusDiv.classList.add('error');
            return;
        }

        // Имитация AJAX
        const submitBtn = form.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.innerText = 'Отправка...';

        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = 'Отправить запрос';
            
            statusDiv.innerText = 'Спасибо! Ваша заявка принята. Мы свяжемся с вами в ближайшее время.';
            statusDiv.classList.add('success');
            
            form.reset();
            // Обновляем капчу для следующего раза
            location.reload; // Или просто обновить переменные
        }, 1500);
    });
});
});