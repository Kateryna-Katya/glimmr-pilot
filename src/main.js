document.addEventListener('DOMContentLoaded', () => {
    // 1. Инициализация иконок
    if (window.lucide) lucide.createIcons();

    // 2. Мобильное меню
    const burger = document.querySelector('.burger');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    const toggleMenu = () => {
        burger.classList.toggle('active');
        mobileOverlay.classList.toggle('active');
        document.body.style.overflow = mobileOverlay.classList.contains('active') ? 'hidden' : '';
    };

    burger.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

    // 3. Эффект хедера и прогресс-бар скролла
    const header = document.querySelector('.header');
    const progressBar = document.querySelector('.progress-bar');
    const innovationsSection = document.querySelector('.innovations');

    window.addEventListener('scroll', () => {
        // Хедер
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Прогресс в секции Инноваций
        if (innovationsSection && progressBar) {
            const rect = innovationsSection.getBoundingClientRect();
            const height = innovationsSection.offsetHeight;
            let progress = (Math.abs(rect.top) / (height - window.innerHeight)) * 100;
            if (rect.top > 0) progress = 0;
            progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
        }
    });

    // 4. Нативные анимации появления (Intersection Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-up, .reveal-right').forEach(el => observer.observe(el));

    // 5. Печатная машинка для блока кода
    const typewriterEl = document.getElementById('typewriter');
    if (typewriterEl) {
        const codeText = `const assistant = new GlimmrAI({\n  mode: 'autonomous',\n  learning: true,\n  target: 'business_growth'\n});\n\nassistant.start();`;
        const visualObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                let i = 0;
                const type = () => {
                    if (i < codeText.length) {
                        typewriterEl.innerHTML += codeText.charAt(i);
                        i++;
                        setTimeout(type, 40);
                    }
                };
                type();
                visualObserver.disconnect();
            }
        }, { threshold: 0.5 });
        visualObserver.observe(document.querySelector('.visual-card'));
    }

    // 6. Валидация формы и Капча
    const form = document.getElementById('ai-form');
    if (form) {
        const captchaLabel = document.getElementById('captcha-label');
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const correctResult = num1 + num2;
        if (captchaLabel) captchaLabel.innerText = `Сколько будет: ${num1} + ${num2} = ?`;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const status = document.getElementById('form-status');
            const userAns = parseInt(document.getElementById('captcha').value);
            
            status.className = 'form-status';
            if (userAns !== correctResult) {
                status.innerText = 'Ошибка: Неверный ответ капчи.';
                status.classList.add('error');
                return;
            }

            const btn = form.querySelector('.btn-submit');
            btn.disabled = true;
            btn.innerText = 'Отправка...';

            setTimeout(() => {
                status.innerText = 'Успех! Мы свяжемся с вами.';
                status.classList.add('success');
                btn.disabled = false;
                btn.innerText = 'Отправить запрос';
                form.reset();
            }, 1500);
        });
    }

    // 7. Cookie Popup Logic
    const cookiePopup = document.getElementById('cookie-popup');
    const acceptBtn = document.getElementById('accept-cookies');

    if (!localStorage.getItem('cookies-accepted')) {
        setTimeout(() => { cookiePopup.style.display = 'block'; }, 2000);
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookies-accepted', 'true');
        cookiePopup.style.display = 'none';
    });
});