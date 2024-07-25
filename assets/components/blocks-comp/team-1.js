const teamRow1 = document.getElementById("team-row-1");

fetch("index.html")
  .then((response) => response.text()) // Parse the response as text
  .then((htmlContent) => {
    teamRow1.innerHTML =
      // team-row-1 html content starts
      `
    <div class="col-12 section-title text-center py-4 mt-5 animation_custom_top">
        <h2 class="h2 title text-black font-acl text-uppercase">Meet The makers</h2>
      </div>

      <div class="col-xl-3 col-lg-4 col-md-6 team-card-col animation_custom_top">
        <div class="team-card relative">
            <div class="team-card-wrap">
            <div class="team-card-thumb">
                <img src="/assets/images/img/team/team-1-1.jpg" alt="memberImg" class="img-fluid img-grayscale">
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
                    <button class="button btn member-social-icon" aria-label="Add Member">
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
                <img src="/assets/images/img/team/team-1-2.jpg" alt="memberImg" class="img-fluid img-grayscale">
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
                    <button class="button btn member-social-icon" aria-label="Add Member">
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
                <img src="/assets/images/img/team/team-1-3.jpg" alt="memberImg" class="img-fluid img-grayscale">
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
                    <button class="button btn member-social-icon" aria-label="Add Member">
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
                <img src="/assets/images/img/team/team-1-4.jpg" alt="memberImg" class="img-fluid img-grayscale">
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
                    <button class="button btn member-social-icon" aria-label="Add Member">
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

      

    `;
    // team-row-1 Html content ends
  })
  .catch((error) => {
    console.error("Error fetching teamRow1:", error);
  });
