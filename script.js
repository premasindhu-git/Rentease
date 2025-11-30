document.addEventListener('DOMContentLoaded', function() {
    // Toggle sidebar on mobile
    const sidebarCollapse = document.getElementById('sidebarCollapse');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.querySelector('.main-content');
    
    if (sidebarCollapse) {
        sidebarCollapse.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            mainContent.classList.toggle('active');
        });
    }
    
    // Initialize rent chart
    const rentCtx = document.getElementById('rentChart').getContext('2d');
    const rentChart = new Chart(rentCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Rent Collected',
                data: [8500, 9200, 10100, 9800, 11200, 10500, 11500, 12000, 11000, 12500, 11800, 13000],
                backgroundColor: 'rgba(67, 97, 238, 0.7)',
                borderColor: 'rgba(67, 97, 238, 1)',
                borderWidth: 1,
                borderRadius: 5
            }, {
                label: 'Rent Due',
                data: [9000, 9500, 10500, 10000, 11500, 11000, 12000, 12500, 11500, 13000, 12500, 13500],
                backgroundColor: 'rgba(248, 249, 250, 0.7)',
                borderColor: 'rgba(248, 249, 250, 1)',
                borderWidth: 1,
                borderRadius: 5
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        drawBorder: false
                    },
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        boxWidth: 12,
                        padding: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': $' + context.raw.toLocaleString();
                        }
                    }
                }
            }
        }
    });
    
    // Auto-rotate carousel every 5 seconds
    const myCarousel = document.getElementById('featureCarousel');
    const carousel = new bootstrap.Carousel(myCarousel, {
        interval: 5000,
        wrap: true
    });
    
    // Add animation to carousel items when they slide in
    myCarousel.addEventListener('slide.bs.carousel', function (e) {
        const nextItem = e.relatedTarget;
        const caption = nextItem.querySelector('.carousel-caption');
        
        // Reset animations
        const elements = caption.querySelectorAll('*');
        elements.forEach(el => {
            el.classList.remove('animate__animated', 'animate__fadeInDown', 'animate__fadeInUp');
            void el.offsetWidth; // Trigger reflow
        });
        
        // Add animations
        const heading = caption.querySelector('h5');
        const paragraph = caption.querySelector('p');
        
        if (heading) {
            heading.classList.add('animate__animated', 'animate__fadeInDown');
        }
        if (paragraph) {
            paragraph.classList.add('animate__animated', 'animate__fadeInUp');
        }
    });
    
    // Sample notification click handler
    const notificationBadge = document.querySelector('.notification-badge');
    if (notificationBadge) {
        notificationBadge.addEventListener('click', function() {
            // In a real app, this would mark notifications as read
            this.style.display = 'none';
        });
    }
});