


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




// home, other , error class to body
document.addEventListener('DOMContentLoaded', () => {
  // Get the meta tag for the page identifier
  const pageMeta = document.querySelector('meta[name="page"]');
  const pageType = pageMeta ? pageMeta.getAttribute('content') : 'other';

  // Select the body element
  const body = document.body;

  // Remove existing page-specific classes
  body.classList.remove('home', 'error', 'other');

  // Apply new page-specific class based on the meta tag content
  body.classList.add(pageType);

  // Example logging to verify the pageType value
  console.log(`Page type detected: ${pageType}`);
});

