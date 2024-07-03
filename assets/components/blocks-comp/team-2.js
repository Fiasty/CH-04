const teamRow2 = document.getElementById('team-row-2');

fetch('index.html')
  .then(response => response.text()) // Parse the response as text
  .then(htmlContent => {
    teamRow2.innerHTML = 
    // team-row-2 html content starts
    `
      <div class="col-xl-3 col-lg-4 col-md-6 team-card-col animation_custom_top">
        <div class="team-card relative">
            <div class="team-card-wrap">
            <div class="team-card-thumb">
                <img src="/assets/images/img/team/team-1-5.jpg" alt="memberImg" class="img-fluid img-grayscale">
            </div>

            <div class="team-card-details">
                <div class="member-info">
                    <h4 class="member-name">
                        <a href="team-detail.html" class="text-white font-acl text-capitalize">
                            terry Souro
                        </a>
                    </h4>
                    <p class="member-designation text-white font-pop text-capitalize">Creative Director</p>
                </div>
                <div class="member-social">
                    <button class="btn member-social-icon">
                        <i class="fas fa-plus text-lemon"></i>
                    </button>
                    <div class="member-social-links-wrap">
                        <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f text-lemon"></i></i></a>
                        <a href="https://x.com/" target="_blank"><i class="fa-brands fa-twitter text-lemon"></i></a>
                        <a href="https://in.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in text-lemon"></i></a>
                    </div>
                </div>
            </div>
            </div>

        </div>
      </div>


      <div class="col-xl-3 col-lg-4 col-md-6 team-card-col animation_custom_top">
        <div class="team-card relative">
            <div class="team-card-wrap">
            <div class="team-card-thumb">
                <img src="/assets/images/img/team/team-1-6.jpg" alt="memberImg" class="img-fluid img-grayscale">
            </div>

            <div class="team-card-details">
                <div class="member-info">
                    <h4 class="member-name">
                        <a href="team-detail.html" class="text-white font-acl text-capitalize">
                            terry Souro
                        </a>
                    </h4>
                    <p class="member-designation text-white font-pop text-capitalize">Creative Director</p>
                </div>
                <div class="member-social">
                    <button class="btn member-social-icon">
                        <i class="fas fa-plus text-lemon"></i>
                    </button>
                    <div class="member-social-links-wrap">
                        <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f text-lemon"></i></i></a>
                        <a href="https://x.com/" target="_blank"><i class="fa-brands fa-twitter text-lemon"></i></a>
                        <a href="https://in.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in text-lemon"></i></a>
                    </div>
                </div>
            </div>
            </div>

        </div>
      </div>


      <div class="col-xl-3 col-lg-4 col-md-6 team-card-col animation_custom_top">
        <div class="team-card relative">
            <div class="team-card-wrap">
            <div class="team-card-thumb">
                <img src="/assets/images/img/team/team-1-7.jpg" alt="memberImg" class="img-fluid img-grayscale">
            </div>

            <div class="team-card-details">
                <div class="member-info">
                    <h4 class="member-name">
                        <a href="team-detail.html" class="text-white font-acl text-capitalize">
                            terry Souro
                        </a>
                    </h4>
                    <p class="member-designation text-white font-pop text-capitalize">Creative Director</p>
                </div>
                <div class="member-social">
                    <button class="btn member-social-icon">
                        <i class="fas fa-plus text-lemon"></i>
                    </button>
                    <div class="member-social-links-wrap">
                        <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f text-lemon"></i></i></a>
                        <a href="https://x.com/" target="_blank"><i class="fa-brands fa-twitter text-lemon"></i></a>
                        <a href="https://in.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in text-lemon"></i></a>
                    </div>
                </div>
            </div>
            </div>

        </div>
      </div>


      <div class="col-xl-3 col-lg-4 col-md-6 team-card-col animation_custom_top">
        <div class="team-card relative">
            <div class="team-card-wrap">
            <div class="team-card-thumb">
                <img src="/assets/images/img/team/team-1-8.jpg" alt="memberImg" class="img-fluid img-grayscale">
            </div>

            <div class="team-card-details">
                <div class="member-info">
                    <h4 class="member-name">
                        <a href="team-detail.html" class="text-white font-acl text-capitalize">
                            terry Souro
                        </a>
                    </h4>
                    <p class="member-designation text-white font-pop text-capitalize">Creative Director</p>
                </div>
                <div class="member-social">
                    <button class="btn member-social-icon">
                        <i class="fas fa-plus text-lemon"></i>
                    </button>
                    <div class="member-social-links-wrap">
                        <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f text-lemon"></i></i></a>
                        <a href="https://x.com/" target="_blank"><i class="fa-brands fa-twitter text-lemon"></i></a>
                        <a href="https://in.linkedin.com/" target="_blank"><i class="fa-brands fa-linkedin-in text-lemon"></i></a>
                    </div>
                </div>
            </div>
            </div>

        </div>
      </div>
    `
    // team-row-2 Html content ends 
  })
  .catch(error => {
    console.error('Error fetching team-row-2:', error);
  });
  
