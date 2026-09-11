(function() {
    'use strict';

    // ===== 弹窗控制 =====
    const modal = document.getElementById('modalOverlay');
    const closeBtn = document.getElementById('modalCloseBtn');
    if (modal && closeBtn) {
        window.addEventListener('DOMContentLoaded', function() {
            modal.classList.remove('hidden');
        });
        closeBtn.addEventListener('click', function() {
            modal.classList.add('hidden');
        });
        modal.addEventListener('click', function(e) {
            if (e.target === modal) modal.classList.add('hidden');
        });
    }

    // ===== 移动端菜单 =====
    const toggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (toggle && navLinks) {
        toggle.addEventListener('click', function() {
            const isOpen = navLinks.classList.toggle('open');
            toggle.classList.toggle('active');
            toggle.setAttribute('aria-expanded', isOpen);
        });
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
                toggle.classList.remove('active');
            });
        });
    }

    // ===== 主题切换 =====
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        let currentTheme = localStorage.getItem('theme') || 'light';
        if (currentTheme === 'dark') {
            document.body.classList.add('dark');
            icon.classList.replace('fa-moon', 'fa-sun');
        }
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            icon.classList.replace(isDark ? 'fa-moon' : 'fa-sun', isDark ? 'fa-sun' : 'fa-moon');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    }

    // ===== 导航栏滚动阴影 =====
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            navbar.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(0,0,0,0.06)' : 'none';
        });
    }

    // ===== 平滑滚动 =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ===== PPT 滑动展示 =====
    const slidesContainer = document.getElementById('pptSlides');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const counter = document.getElementById('pptCounter');
    const dotsContainer = document.getElementById('pptDots');

    if (slidesContainer && prevBtn && nextBtn && counter && dotsContainer) {
        const slides = slidesContainer.querySelectorAll('.ppt-slide');
        const totalSlides = slides.length; // 幻灯片总数 — 添加新页后无需手动改
        let currentIndex = 0;

        // 生成圆点导航
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            dot.className = 'ppt-dot' + (i === 0 ? ' active' : '');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });
        const dots = dotsContainer.querySelectorAll('.ppt-dot');

        function updateUI() {
            slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
            counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex === totalSlides - 1;
            dots.forEach((dot, i) => dot.classList.toggle('active', i === currentIndex));
        }

        function goToSlide(index) {
            currentIndex = Math.max(0, Math.min(index, totalSlides - 1));
            updateUI();
        }

        prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));

        // 键盘左右键支持
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') goToSlide(currentIndex - 1);
            if (e.key === 'ArrowRight') goToSlide(currentIndex + 1);
        });

        // 触摸滑动支持
        let touchStartX = 0;
        slidesContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        slidesContainer.addEventListener('touchend', (e) => {
            const diff = touchStartX - e.changedTouches[0].screenX;
            if (Math.abs(diff) > 50) {
                diff > 0 ? goToSlide(currentIndex + 1) : goToSlide(currentIndex - 1);
            }
        }, { passive: true });

        updateUI();
    }

})();