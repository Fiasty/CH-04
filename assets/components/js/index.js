


// Home Page Servide section js
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.service-tab-item');
    const images = document.querySelectorAll('.home-service-tab');

    tabs.forEach(tab => {
        tab.addEventListener('mouseover', function() {
            const targetId = this.getAttribute('data-target').substring(1);

            images.forEach(image => {
                if (image.id === targetId) {
                    image.classList.add('active');
                } else {
                    image.classList.remove('active');
                }
            });
        });
    });
});
