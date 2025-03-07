// Event Participants Bar Chart
const ctx1 = document.getElementById('eventChart').getContext('2d');
new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: ['Tech Talk', 'Hackathon', 'Music Fest', 'Sports Meet', 'Cultural Night'],
        datasets: [{
            label: 'Participants',
            data: [120, 230, 180, 150, 200],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Event Category Distribution Pie Chart
const ctx2 = document.getElementById('categoryChart').getContext('2d');
new Chart(ctx2, {
    type: 'pie',
    data: {
        labels: ['Technical', 'Cultural', 'Sports', 'Workshops'],
        datasets: [{
            label: 'Event Distribution',
            data: [30, 25, 20, 25],
            backgroundColor: ['#FF5733', '#33FFBD', '#FFC300', '#8E44AD']
        }]
    },
    options: {
        responsive: true
    }
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