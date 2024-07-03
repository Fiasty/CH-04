const pagefooter = document.getElementById('page-footer');

fetch('index.html')
  .then(response => response.text()) // Parse the response as text
  .then(htmlContent => {
    pagefooter.innerHTML = 
    // Footer html content starts
    
    `
    <!-- Footer.js Code Starts  -->

      <div class="container">


      <div class="footer-contact-comp">
        <p class="footer-contact-comp-text-wrap">
          <i class="fa-solid fa-circle"></i>
          Just send us your idea and we will turn it into beautiful designs!
        </p>
        <a href="contact.html" class="footer-contact-comp-anchor font-acl">
          LET'S START A PROJECT
          <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <div class="footer-main-comp">
        <div class="row">
          <div class="col-md-3 col-12 footer-main-comp-cols">
            <div class="footer-list-heading">
              <h4 class="font-pop">Location</h4>
              <p class="font-acl">
                Las Vegas, NV, USA
                <br> 201 Spear Street,
                <br> San Francisco, CA, USA
              </p>
            </div>
          </div>
          <div class="col-md-3 col-12 footer-main-comp-cols">
            <div class="footer-list-heading">
              <h4 class="font-pop">Start a conversation</h4>
              <a href="mailto:work@vexadesign.com" class="font-acl">work@wexadesign.com</a>
            </div>
          </div>
          <div class="col-md-3 col-12 footer-main-comp-cols">
            <div class="footer-list-heading">
              <h4 class="font-pop">© 2024 Vexa, All rights reserved.</h4>
              <a href="contact.html" class="font-acl footer-a-hover">Privacy Policy</a>
            </div>
          </div>
          <div class="col-md-3 col-12 footer-main-comp-cols">
            <ul class="footer-social-list">
              <li class="footer-social-list-item">
                <a href="facebook.com" class="font-acl facebook-hover"><i class="fab fa-facebook-f"></i> FACEBOOK <i class="fa-solid fa-arrow-right"></i></a>
              </li>
              <li class="footer-social-list-item">
                <a href="instagram.com" class="font-acl"><i class="fab fa-instagram"></i> INSTAGRAM <i class="fa-solid fa-arrow-right"></i></a>
              </li>
              <li class="footer-social-list-item">
                <a href="pinterest.com" class="font-acl"><i class="fab fa-pinterest"></i> PINTEREST <i class="fa-solid fa-arrow-right"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer-back-to-top-comp text-center py-5">
      <a href="#" onclick="window.scrollTo({ top: 0, behavior: 'smooth' }); return false;" class="btn font-acl text-white">Back to top <i class="fa fa-arrow-up"></i></a>  
      </div>


    </div>

     <!-- Footer.js Code Ends  -->

    `
    // Footer Html content ends 
  })
  .catch(error => {
    console.error('Error fetching footer:', error);
  });
  
