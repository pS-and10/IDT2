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
