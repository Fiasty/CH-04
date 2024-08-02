document.addEventListener("DOMContentLoaded", () => {
  const pageHeader = document.getElementById("page-header");

  fetch("index.html")
    .then((response) => response.text())
    .then((htmlContent) => {
      pageHeader.innerHTML = `
<nav class="navbar navbar-expand-lg bg-black">
  <div class="container custom-container">
    <a class="navbar-brand" href="index.html">
      <img src="assets/images/img/logo/logo-white.svg" alt="logoImg" class="logo-white" />
      <img src="assets/images/img/logo/logo.svg" alt="logoImg" class="logo-black" />
    </a>
    <button class="button mobile-nav-btn sidebar-btn btn" data-target="mobile" data-action="open">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a href="index.html" class="nav-link" aria-current="page">
            HOME
          </a>
        </li>

        <li class="nav-item">
          <a href="about.html" class="nav-link" aria-current="page">
            ABOUT US
          </a>
        </li>

        <li class="nav-item dropdown">
          <a href="services.html" class="nav-link dropdown-toggle" aria-current="page">
            SERVICES
          </a>
          <ul class="dropdown-box">
            <li><a class="nav-link" href="services.html">Services</a></li>
            <li><a class="nav-link" href="services-details.html">Service Details</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a href="team.html" class="nav-link dropdown-toggle" aria-current="page">
            TEAM
          </a>
          <ul class="dropdown-box">
            <li><a class="nav-link" href="team.html">Our Team</a></li>
            <li><a class="nav-link" href="team-details.html">Team Details</a></li>
          </ul>
        </li>

        <li class="nav-item dropdown">
          <a href="portfolio.html" class="nav-link dropdown-toggle" aria-current="page">
              PORTFOLIO
          </a>
          <ul class="dropdown-box">
              <li><a class="nav-link" href="portfolio.html">Portfolio</a></li>
              <li><a class="nav-link" href="portfolio-details.html">Portfolio Details</a></li>
          </ul>
      </li>
      

        <li class="nav-item dropdown">
          <a href="blog.html" class="nav-link dropdown-toggle" aria-current="page">
            BLOG
          </a>
          <ul class="dropdown-box">
            <li><a class="nav-link" href="blog.html">Blog</a></li>
            <li><a class="nav-link" href="blog-details.html">Blog Details</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a href="contact.html" class="nav-link" aria-current="page">
            CONTACT
          </a>
        </li>
      </ul>
      <button class="button sidebar-btn btn" data-target="offcanvas" data-action="open">
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
    <button class="button btn" data-target="offcanvas" data-action="close"><i
        class="fa fa-times text-white"></i></button>
  </div>
  <div class="offcanvas-log">
    <a href="index.html">
      <img src="/assets/images/img/logo/logo-white.svg" alt="brandLogo" class="img-fluid">
    </a>
  </div>
  <div class="offcanvas-info">
    <div class="offcanvas-address">
      <h5 class="font-acl text-white offcanvas-title">Office Address</h5>
      <p><a target="_blank" href="https://maps.app.goo.gl/14sjUAMC2YNv8WNK6" class="font-pop text-white">123/A, Miranda
          City Likaoli
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
<div class="mobile-body bg-black" id="mobile-body">

  <div class="mobile-header-head-wrap">
    <div class="mobile-nav-brand">
      <a href="index.html">
        <img src="/assets/images/img/logo/logo-white.svg" alt="brandLogo" class="img-fluid">
      </a>
      <div class="mobile-close-icon">
        <button class="button btn" data-target="mobile" data-action="close"><i class="fa-solid fa-xmark"></i></button>
      </div>
    </div>
    <div class="mobile-nav-search">
      <form action="#" class="relative">
        <input type="text" name="name" id="name" class="form-control font-pop" placeholder="Search here..."
          aria-describedby="helpId" />
        <button class="button btn" type="submit">
          <i class="fa fa-search text-lemon"></i>
        </button>
      </form>
    </div>
  </div>

  <div class="mobile-nav-wrap">
    <ul class="mobile-nav-ul p-0 navbar-nav">

      <li class="nav-item">
        <a href="index.html" class="nav-link" aria-current="page">
          HOME
        </a>
      </li>

      <li class="dropdown">
        <a class="btn dropdown-btn" role="button" data-action="dropdown" data-target="mobPages">
          <i class="fa fa-minus text-white"></i>
          <i class="fa fa-plus text-white"></i>
        </a>
        <a href="about.html" class="nav-link">PAGES</a>
        <ul class="dropdown-list" aria-labelledby="mobPages">
          <li class="nav-item">
            <a href="about.html" class="nav-link" aria-current="page">
              About Us
            </a>
          </li>
          <li class="nav-item">
            <a href="services.html" class="nav-link" aria-current="page">
              Services
            </a>
          </li>
          <li class="nav-item">
            <a href="services-details.html" aria-current="page" class="nav-link">Service Details</a>
          </li>
          <li class="nav-item">
            <a href="team.html" aria-current="page" class="nav-link">Our Team</a>
          </li>
          <li class="nav-item">
            <a href="team-details.html" aria-current="page" class="nav-link">Team Details</a>
          </li>
          <li class="nav-item">
            <a href="pricing.html" aria-current="page" class="nav-link">Pricing</a>
          </li>
          <li class="nav-item">
            <a href="faq.html" aria-current="page" class="nav-link">FAQ Page</a>
          </li>
          <li class="nav-item">
            <a href="404.html" aria-current="page" class="nav-link">404 Error Page</a>
          </li>
        </ul>
      </li>

      <li class="dropdown">
        <a class="btn dropdown-btn" role="button" data-action="dropdown" data-target="mobPortfolio">
          <i class="fa fa-minus text-white"></i>
          <i class="fa fa-plus text-white"></i>
        </a>
        <a href="portfolio.html" class="nav-link">PORTFOLIO</a>
        <ul class="dropdown-list" aria-labelledby="mobPortfolio">
          <li class="nav-item">
            <a href="portfolio.html" aria-current="page" class="nav-link">Portfolio</a>
          </li>
          <li class="nav-item">
            <a href="portfolio-details.html" aria-current="page" class="nav-link">Portfolio Details</a>
          </li>
        </ul>
      </li>

      <li class="dropdown">
        <a class="btn dropdown-btn" role="button" data-action="dropdown" data-target="mobBlog">
          <i class="fa fa-minus text-white"></i>
          <i class="fa fa-plus text-white"></i>
        </a>
        <a href="blog.html" class="nav-link">BLOG</a>
        <ul class="dropdown-list" aria-labelledby="mobBlog">
          <li class="nav-item">
            <a href="blog.html" aria-current="page" class="nav-link ">Our Blogs</a>
          </li>
          <li class="nav-item">
            <a href="blog-details.html" aria-current="page" class="nav-link">Blog Details</a>
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <a href="contact.html" aria-current="page" class="nav-link">CONTACT</a>
      </li>

    </ul>


  </div>

  <div class="mobile-header-foot-wrap">
    <div class="mobile-nav-contact">
      <a href="info@vexa.com" class="text-white text-to-lemon font-pop">info@vexa.com</a>
      <br>
      <a href="tel:1238889999" class="text-white text-to-lemon font-pop">+123 888 9999</a>
    </div>
    <div class="mobile-nav-social">
      <ul class="p-0">
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


</div>
<div class="mobile-overlay" id="mobile-overlay"></div>
<!-- mobile-nav Ends -->



`;

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
      const mobileBtns = document.querySelectorAll('[data-target="mobile"]');
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

      // <!-- Mobile Header Dropdown
      document.querySelectorAll(".dropdown-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          // Check if the clicked dropdown is already open
          const dropdownList = this.nextElementSibling.nextElementSibling;
          const isOpen = dropdownList.style.display === "block";

          // Close all dropdown lists and remove active class from all buttons
          document.querySelectorAll(".dropdown-list").forEach(function (list) {
            list.style.display = "none";
          });
          document
            .querySelectorAll(".dropdown-btn")
            .forEach(function (otherBtn) {
              otherBtn.classList.remove("active");
            });

          // Toggle the clicked dropdown list
          if (!isOpen) {
            dropdownList.style.display = "block";
            this.classList.add("active");
          }
        });
      });      
      
      



    })
    .catch((error) => {
      console.error("Error fetching header:", error);
    });
});
