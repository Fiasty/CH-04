document.addEventListener("DOMContentLoaded", () => {
  const pageHeader = document.getElementById("page-header");

  fetch("index.html")
    .then((response) => response.text())
    .then((htmlContent) => {
      pageHeader.innerHTML = 
      `
      <nav class="navbar navbar-expand-md bg-black">
              <div class="container custom-container">
                <a class="navbar-brand" href="index.html">
                  <img src="assets/images/img/logo/logo-white.svg" alt="logoImg" />
                </a>
                <button class="mobile-nav-btn sidebar-btn btn" data-target="mobile" data-action="open">
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
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
                  <button class="sidebar-btn btn" data-target="offcanvas" data-action="open">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                  </button>            
                </div>
              </div>
            </nav>

            <!-- Offcanvas Starts -->
            <div class="offcanvas-body bg-black p-5" id="offcanvas-body">
              <div class="offcanvas-close-icon">
                <button class="btn" data-target="offcanvas" data-action="close"><i class="fa fa-times text-white"></i></button>
              </div>
              <div class="offcanvas-log">
                <a href="index.html">
                  <img src="/assets/images/img/logo/logo-white.svg" alt="brandLogo">
                </a>
              </div>
              <div class="offcanvas-info">
                <div class="offcanvas-address">
                  <h5 class="font-acl text-white offcanvas-title">Office Address</h5>
                  <p><a target="_blank" href="https://maps.app.goo.gl/14sjUAMC2YNv8WNK6" class="font-pop text-white">123/A, Miranda City Likaoli
                    <br>
                    Prikano, Dope</a></p>
                </div>
                <div class="offcanvas-contact py-3">
                  <h5 class="font-acl text-white offcanvas-title">Phone Number</h5>
                  <a href="tel:0989787698659" target="_blank" class="font-pop text-white">+0989 7876 9865 9</a>
                  <br>
                   <a href="tel:09087658654385" target="_blank" class="font-pop text-white">+(090) 8765 86543 85</a>
                </div>
                <div class="offcanvas-mail py-3">
                  <h5 class="font-acl text-white offcanvas-title">Email Address</h5>
                  <a href="mailto:info@example.com" target="_blank" class="font-pop text-white">info@example.com</a>
                  <br>
                  <a href="mailto:example.mail@hum.com" target="_blank" class="font-pop text-white">example.mail@hum.com</a>
                </div>
              </div>
              <div class="offcanvas-social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f text-white"></i></a>
                  </li>
                  <li>
                    <a href="https://x.com/" target="_blank"><i class="fa-brands fa-x-twitter text-white"></i></a>
                  </li>
                  <li>
                    <a href="https://www.whatsapp.com/" target="_blank"><i class="fa-brands fa-whatsapp text-white"></i></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram text-white"></i></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/" target="_blank"><i class="fa-brands fa-youtube text-white"></i></a>
                  </li>            
                </ul>
              </div>
            </div>
            <div class="offcanvas-overlay" id="offcanvas-overlay"></div>
            <!-- Offcanvas Ends -->


            <!-- mobile-nav Starts -->
            <div class="mobile-body bg-black p-5" id="mobile-body">
              <div class="mobile-close-icon">
                <button class="btn" data-target="mobile" data-action="close"><i class="fa fa-times text-white"></i></button>
              </div>
              <h1>Hello World</h1>
            
            </div>
            <div class="mobile-overlay" id="mobile-overlay"></div>
            <!-- mobile-nav Ends -->



            `
            ;

      // Get the current page filename (e.g., index.html, about.html)
      const path = window.location.pathname;
      const page = path.split("/").pop();

      // Select all navigation links inside the navbar
      const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

      // Loop through each navigation link
      navLinks.forEach((navLink) => {
        // Get the href attribute of the link
        const href = navLink.getAttribute("href");

        // Check if the link's href matches the current page or if the page is the root
        if (
          (href === "index.html" && (page === "" || page === "index.html")) ||
          (href === page && page !== "")
        ) {
          // Add the 'active' class to the link
          navLink.classList.add("active");
        } else {
          // Make sure to remove 'active' class from all other navigation items
          navLink.classList.remove("active");
        }
      });

      // Add event listeners for offcanvas functionality
      const offcanvasBtns = document.querySelectorAll(
        '[data-target="offcanvas"]'
      );
      const offcanvasOverlay = document.getElementById("offcanvas-overlay");
      const offcanvasBody = document.getElementById("offcanvas-body");

      offcanvasBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const action = btn.getAttribute("data-action");

          if (action === "open") {
            offcanvasOverlay.classList.add("active");
            offcanvasBody.classList.add("active");
          } else if (action === "close") {
            offcanvasOverlay.classList.remove("active");
            offcanvasBody.classList.remove("active");
          }
        });
      });

      // Add even listeners for mobile nav functionality
      const mobileBtns = document.querySelectorAll(
        '[data-target="mobile"]'
      );
      const mobileOverlay = document.getElementById("mobile-overlay");
      const mobileBody = document.getElementById("mobile-body");

      mobileBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const action = btn.getAttribute("data-action");

          if (action === "open") {
            mobileOverlay.classList.add("active");
            mobileBody.classList.add("active");
          } else if (action === "close") {
            mobileOverlay.classList.remove("active");
            mobileBody.classList.remove("active");
          }
        });
      });

    })
    .catch((error) => {
      console.error("Error fetching header:", error);
    });
});
