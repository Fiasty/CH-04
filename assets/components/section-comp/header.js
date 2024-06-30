const pageHeader = document.getElementById('page-header');

fetch('index.html')
  .then(response => response.text()) // Parse the response as text
  .then(htmlContent => {
    pageHeader.innerHTML = 
    // Header html content starts
    `
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
                  class="nav-link active"
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
    `
    // Header Html content ends 
  })
  .catch(error => {
    console.error('Error fetching header:', error);
  });
  
