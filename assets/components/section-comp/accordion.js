const accordion = document.getElementById("accordion");

fetch("index.html")
  .then((response) => response.text()) // Parse the response as text
  .then((htmlContent) => {
    accordion.innerHTML =
      // team-row-1 html content starts
      `
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-8 col-md-10 col-12">
                
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button font-acl" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What will my Project cost?
        <i class="fa fa-arrow-up"></i>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="font-pop text-black">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed font-acl" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What happens to my data if I cancel?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="font-pop text-black">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed font-acl" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        How I can optimize voice search?
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="font-pop text-black">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFour">
      <button class="accordion-button collapsed font-acl" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        What happens to my data if I cancel?
      </button>
    </h2>
    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="font-pop text-black">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingFive">
      <button class="accordion-button collapsed font-acl" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        Can I change my plan later?
      </button>
    </h2>
    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p class="font-pop text-black">We design high quality websites that make users come back for more. A good website tells a story that will make users fully immerse themselves operating</p>
      </div>
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
    console.error("Error fetching accordion:", error);
  });
