const skillBar = document.getElementById("skill-bar");

fetch("index.html")
  .then((response) => response.text()) // Parse the response as text
  .then((htmlContent) => {
    skillBar.innerHTML =
      // get in touch html content starts

      `
    
  <div class="container">
    <div class="row section-padding">

        <div class="skill-area-bg-square-style">
            <div class="square-shape-1"></div>
            <div class="square-shape-2"></div>
            <div class="square-shape-3"></div>
        </div>

        <div class="skill-bar-thumb col-xl-5 col-12 custom_animation_left relative">
            <img src="/assets/images/img/others/skill1-1.jpg" alt="skillImg" class="img-fluid">
            <div class="skill-area-thumb-square-style sm-d-none">
                <div class="square-shape-1"></div>
                <div class="square-shape-2"></div>
                <div class="square-shape-3"></div>
                <div class="square-shape-4"></div>
            </div>
        </div>

        <div class="col-xl-7 col-12 skill-bar-details d-flex">
            <div class="section-title mb-5">
                <h2 class="title text-white text-uppercase font-acl">Devoted To creating Quality Design Experiences</h2>
            </div>
            <p class="skill-bar-disc text-white font-pop">We aim to empower brands of all sizes and industries with data-driven strategies that yield tangible results. We believe in crafting campaigns that not only drive traffic but also foster engagement and conversions.</p>

            <div class="skill-bars-wrap">
                <div class="skill-feature">
                    <h3 class="skill-title text-white font-pop text-uppercase">
                        Branding
                    </h3>
                    <div class="skill-progress-wrap">
                        <div class="progress-bar" style="width: 90%;">
                            <span class="counter-percentage text-white font-pop">90%</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="skill-bars-wrap">
                <div class="skill-feature">
                    <h3 class="skill-title text-white font-pop text-uppercase">
                        Development
                    </h3>
                    <div class="skill-progress-wrap">
                        <div class="progress-bar" style="width: 70%;">
                            <span class="counter-percentage text-white font-pop">70%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="skill-bars-wrap">
                <div class="skill-feature">
                    <h3 class="skill-title text-white font-pop text-uppercase">
                        Marketing
                    </h3>
                    <div class="skill-progress-wrap">
                        <div class="progress-bar" style="width: 50%;">
                            <span class="counter-percentage text-white font-pop">50%</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  </div>
  

    `;
    // get in touch Html content ends
  })
  .catch((error) => {
    console.error("Error fetching skill-bar:", error);
  });
