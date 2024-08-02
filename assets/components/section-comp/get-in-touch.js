const getInTouch = document.getElementById("get-in-touch");

fetch("index.html")
  .then((response) => response.text()) // Parse the response as text
  .then((htmlContent) => {
    getInTouch.innerHTML =
      // get in touch html content starts

      `
    
   <div class="container-fluid">
    <div class="row">
        
        <div class="col-lg-6 col-12 get-in-touch-poster d-flex justify-content-center p-0">
            <img src="/assets/images/img/others/contact1-1.jpg" alt="contactPoster" class="img-fluid">
        </div>

        <div class="col-lg-6 col-12 get-in-touch-content-col">
            <div class="row">
                <div class="col-lg-10 offset-lg-1 col-sm-10 offset-sm-1 col-12 get-in-touch-heading-wrap">
            <div class="section-title mb-3">
                <h2 class="title text-uppercase font-acl text-black">Get In touch</h2>
            </div>
            <p class="font-pop text-black">
                Got a project you want to collaborate on? <br>
                Or just fancy a chat?
            </p>
            <div class="get-in-touch-form-wrap">
                <form action="#">
                    <div class="mb-3 form-group relative">
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
                    <div class="mb-3 form-group relative">
                        <label for="organisation" class="form-label">
                            <img src="/assets/images/img/icon/svg-img/brifcase.svg" alt="bagIcon">
                            </label>
                        <input
                            type="text"
                            name="organisation"
                            id=""
                            class="form-control font-pop"
                            placeholder="Organisation*"
                            aria-describedby="helpId"
                        />
                    </div>
                    <div class="mb-3 form-group relative">
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
                    <div class="mb-3 form-group relative">
                        <label for="massage" class="form-label">
                            <img src="/assets/images/img/icon/svg-img/brush.svg" alt="userIcon">
                            </label>
                        <textarea name="message" class="font-pop w-100" placeholder="Message*" id="message" rows="7"></textarea>
                    </div>
                    <button type="submit" class="btn relative btn-to-top-black-hover border-lemon bg-lemon btn-aim-top text-to-white border-to-black text-uppercase text-black font-acl">Send Message</button>
                    
                </form>
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
    console.error("Error fetching get-in-touch:", error);
  });
