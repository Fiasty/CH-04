const feedbackSlider = document.getElementById("feedback-slider");

fetch("index.html")
  .then((response) => response.text()) // Parse the response as text
  .then((htmlContent) => {
    feedbackSlider.innerHTML =
      // feedback slider html content starts
      `
      <div class="container relative py-5">
        <div class="row py-5">
        <div class="section-title col-lg-6 col-12 mb-5 animation_custom_left">
          <h2 class="title text-black font-acl text-uppercase">
            FEEDBACK FROM OUR CLIENTS
          </h2>
        </div>
        </div>
      <div id="carousel" class="carousel slide my-5">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-xl-5 col-md-12 feedback-form-client">
                <img src="/assets/images/img/others/testimonial5-1.jpg" alt="clientImg" class="img-fluid">
                <h6 class="feedback-slider-client-name font-acl text-black text-uppercase">Mark Fridman</h6>
                <p class="feedback-slider-client-designation font-pop text-uppercase opa-half text-black">CEO,Google</p>
              </div>
              <div class="col-xl-7 col-md-12 feedback-form-review relative">
                <div class="feedback-form-quote-icon">
                  <img src="/assets/images/img/icon/svg-img/quote-left2.svg" alt="quoteImg" class="img-fluid ">
                </div>
                <p class="feedback-review-disc font-pop text-black">
                  Vexa has been an invaluable partner to us. Any talent we've worked with has shown a deep understanding of digital experiences. They're able to seamlessly integrate with our team and meet the level of craft that we hold ourselves accountable to. We're set up to meet our budgets and timelines while exceeding expectations.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-xl-5 col-md-12 feedback-form-client">
                <img src="/assets/images/img/others/testimonial5-1.jpg" alt="clientImg" class="img-fluid">
                <h6 class="feedback-slider-client-name font-acl text-black text-uppercase">Mark Fridman</h6>
                <p class="feedback-slider-client-designation font-pop text-uppercase opa-half text-black">CEO,Google</p>
              </div>
              <div class="col-xl-7 col-md-12 feedback-form-review relative">
                <div class="feedback-form-quote-icon">
                  <img src="/assets/images/img/icon/svg-img/quote-left2.svg" alt="quoteImg" class="img-fluid ">
                </div>
                <p class="feedback-review-disc font-pop text-black">
                  Vexa has been an invaluable partner to us. Any talent we've worked with has shown a deep understanding of digital experiences. They're able to seamlessly integrate with our team and meet the level of craft that we hold ourselves accountable to. We're set up to meet our budgets and timelines while exceeding expectations.
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-xl-5 col-md-12 feedback-form-client">
                <img src="/assets/images/img/others/testimonial5-1.jpg" alt="clientImg" class="img-fluid">
                <h6 class="feedback-slider-client-name font-acl text-black text-uppercase">Mark Fridman</h6>
                <p class="feedback-slider-client-designation font-pop text-uppercase opa-half text-black">CEO,Google</p>
              </div>
              <div class="col-xl-7 col-md-12 feedback-form-review relative">
                <div class="feedback-form-quote-icon">
                  <img src="/assets/images/img/icon/svg-img/quote-left2.svg" alt="quoteImg" class="img-fluid ">
                </div>
                <p class="feedback-review-disc font-pop text-black">
                  Vexa has been an invaluable partner to us. Any talent we've worked with has shown a deep understanding of digital experiences. They're able to seamlessly integrate with our team and meet the level of craft that we hold ourselves accountable to. We're set up to meet our budgets and timelines while exceeding expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="feedback-slider-control-wrap">
        <button class="carousel-control-prev btn relative btn-to-top-black-hover border-black radius-round bg-transperent btn-aim-top text-to-white border-to-black text-black" type="button" data-bs-target="#carousel" data-bs-slide="prev">
          <i class="fa-solid fa-chevron-left"></i>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next btn relative btn-to-top-black-hover border-black radius-round bg-transperent btn-aim-top text-to-white border-to-black text-black" type="button" data-bs-target="#carousel" data-bs-slide="next">
          <i class="fa-solid fa-chevron-right"></i>
          <span class="visually-hidden">Next</span>
        </button>
        </div>
      </div>
      </div>

    `;
    // feedback slider Html content ends
  })
  .catch((error) => {
    console.error("Error fetching feedback-slider:", error);
  });
