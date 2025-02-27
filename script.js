let index = 0;

function moveSlide() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Move the index forward
    index++;

    // If at the last slide, move to the first one (loop seamlessly)
    if (index >= totalSlides) {
        index = 0;
        // Reset the transform to ensure the sliding effect from right
        const slider = document.querySelector('.slider');
        slider.style.transition = 'none'; // No transition for the reset
        slider.style.transform = 'translateX(0%)';
        
        // Trigger the transition after a brief moment to allow reset
        setTimeout(() => {
            slider.style.transition = 'transform 1s ease'; // Add back the smooth transition
            moveSlide(); // Continue sliding seamlessly
        }, 20);
        
        return;
    }

    // Query the slider container and apply the transform style
    const slider = document.querySelector('.slider');

    if (slider) {
        slider.style.transform = 'translateX(' + (-index * 100) + '%)';
    } else {
        console.error('Slider container not found');
    }
}

// Set interval to move slide every 3 seconds
setInterval(moveSlide, 4000);

// Toggle the sidebar visibility when the menu button is clicked
document.getElementById('menu-button').addEventListener('click', function() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('show');
});

