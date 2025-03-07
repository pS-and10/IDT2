document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const images = Array.from(track.children);

    // Clone images to ensure seamless looping
    images.forEach(img => {
        let clone = img.cloneNode(true);
        track.appendChild(clone);
    });

    // Reset position when images scroll out of view
    function resetScroll() {
        if (track.getBoundingClientRect().left <= -track.clientWidth / 2) {
            track.style.transition = "none"; // Instantly reset without animation
            track.style.transform = "translateX(0)";
            requestAnimationFrame(() => {
                track.style.transition = "transform 15s linear";
            });
        }
        requestAnimationFrame(resetScroll);
    }
    resetScroll();
});

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