let index = 0;
let slideInterval;

document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    if (!slider || totalSlides === 0) return;

    // Clone the first slide and append it at the end for seamless looping
    const firstClone = slides[0].cloneNode(true);
    slider.appendChild(firstClone);

    function moveSlide() {
        index++;
        slider.style.transition = 'transform 1s ease';
        slider.style.transform = `translateX(${-index * 100}%)`;

        // When reaching the last (cloned) slide, reset instantly to the first
        if (index >= totalSlides) {
            setTimeout(() => {
                slider.style.transition = 'none'; // Remove transition for instant reset
                index = 0;
                slider.style.transform = `translateX(0%)`;
            }, 1000); // Match transition duration
        }
    }

    function startSlideshow() {
        clearInterval(slideInterval);
        slideInterval = setInterval(moveSlide, 4000);
    }

    startSlideshow();
});

// Sidebar functionality
const menuButton = document.getElementById('menu-button');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');
const overlay = document.getElementById('overlay');

if (menuButton && sidebar && closeBtn && overlay) {
    menuButton.addEventListener('click', function (e) {
        e.stopPropagation();
        sidebar.classList.add('open');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        closeSidebar();
    });

    overlay.addEventListener('click', closeSidebar);

    function closeSidebar() {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.addEventListener('click', function (e) {
        if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== menuButton) {
            closeSidebar();
        }
    });

    sidebar.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}
