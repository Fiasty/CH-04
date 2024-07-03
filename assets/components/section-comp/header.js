// Get a reference to the element where the header will be inserted
const pageHeader = document.getElementById('page-header');

// Fetch the header content from header.html (adjust the path as needed)
fetch('index.html')
  .then(response => response.text()) // Parse the response as text
  .then(htmlContent => {
    // Append the fetched content to pageHeader
    pageHeader.innerHTML = `
      <nav class="navbar navbar-expand-lg bg-black">
        <div class="container custom-container">
          <a class="navbar-brand" href="index.html">
            <img src="assets/images/img/logo/logo-white.svg" alt="logoImg" />
          </a>
          <button
            class="navbar-toggler d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a
                  href="index.html"
                  class="nav-link"
                  aria-current="page"
                >
                  HOME
                </a>
              </li>

              <li class="nav-item">
                <a href="about.html" class="nav-link" aria-current="page">
                  ABOUT US
                </a>
              </li>

              <li class="nav-item">
                <a href="services.html" class="nav-link" aria-current="page">
                  SERVICES
                </a>
              </li>

              <li class="nav-item">
                <a href="team.html" class="nav-link" aria-current="page">
                  OUR TEAM
                </a>
              </li>

              <li class="nav-item">
                <a href="portfolio.html" class="nav-link" aria-current="page">
                  PORTFOLIO
                </a>
              </li>

              <li class="nav-item">
                <a href="blog.html" class="nav-link" aria-current="page">
                  BLOGS
                </a>
              </li>

              <li class="nav-item">
                <a href="contact.html" class="nav-link" aria-current="page">
                  CONTACT
                </a>
              </li>
            </ul>
            <div class="sidebar-btn">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
          </div>
        </div>
      </nav>
    `;

    // Get the current page filename (e.g., index.html, about.html)
    const path = window.location.pathname;
    const page = path.split('/').pop();

    // Select all navigation links inside the navbar
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    // Loop through each navigation link
    navLinks.forEach(navLink => {
      // Get the href attribute of the link
      const href = navLink.getAttribute('href');

      // Check if the link's href matches the current page or if the page is the root
      if ((href === 'index.html' && (page === '' || page === 'index.html')) || (href === page && page !== '')) {
        // Add the 'active' class to the link
        navLink.classList.add('active');
      } else {
        // Make sure to remove 'active' class from all other navigation items
        navLink.classList.remove('active');
      }
    });
  })
  .catch(error => {
    console.error('Error fetching header:', error);
  });
