const form = document.getElementById("form");

fetch("index.html")
  .then((response) => response.text()) // Parse the response as text
  .then((htmlContent) => {
    form.innerHTML =
      // form html content starts
      `
        <p class="form-disc text-black font-pop">Your email address will not be published. Required fields are marked *</p>
        
        <div class="row">
    
            <div class="col-12 form-wrap">
                <div class="get-in-touch-form-wrap">
                    <form action="#">
                <div class="row">
                        <div class="mb-3 form-group relative col-md-6 col-12">
                            <label for="name" class="form-label">
                                <img src="/assets/images/img/icon/svg-img/user.svg" alt="userIcon">
                                </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                class="form-control font-pop"
                                placeholder="Name*"
                                aria-describedby="helpId"
                            />
                        </div>
                        <div class="mb-3 form-group relative col-md-6 col-12">
                            <label for="email" class="form-label">
                                <img src="/assets/images/img/icon/svg-img/envelope.svg" alt="mailIcon">
                                </label>
                            <input
                                type="email"
                                name="email"
                                id=""
                                class="form-control font-pop"
                                placeholder="Email*"
                                aria-describedby="helpId"
                            />
                        </div>
                        <div class="mb-3 form-group relative col-12">
                            <label for="massage" class="form-label">
                                <img src="/assets/images/img/icon/svg-img/brush.svg" alt="userIcon">
                                </label>
                            <textarea name="message" class="font-pop w-100" placeholder="Message*" id="message" rows="7"></textarea>
                        </div>
                        </div>
                        <button type="submit" class="btn relative btn-to-top-black-hover border-lemon bg-lemon btn-aim-top text-to-white border-to-black text-uppercase text-black font-acl">Send Message</button>
                        
                    </form>
                </div>
                </div>
    
        </div>
            

    `;
    // form Html content ends
  })
  .catch((error) => {
    console.error("Error fetching form:", error);
  });
