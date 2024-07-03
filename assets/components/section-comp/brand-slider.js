const brandSlider = document.getElementById('brand-slider');

fetch('index.html')
  .then(response => response.text()) // Parse the response as text
  .then(htmlContent => {
    brandSlider.innerHTML = 
    // Brand Slider html content starts
    
    `
    <div class="row bg-lemon py-5">
      <div class="col-12">
        <div class="brands-slider">
          <div class="brands-wrapper">
            <!-- Repeat this block for each brand logo -->
            <div class="brand-item">
                <a href="#"><img src="/assets/images/img/partner/partner1-1.svg" alt="brandImg"></a>
            </div>
            <div class="brand-item">
                <a href="#"><img src="/assets/images/img/partner/partner1-2.svg" alt="brandImg"></a>
            </div>
            <div class="brand-item">
                <a href="#"><img src="/assets/images/img/partner/partner1-3.svg" alt="brandImg"></a>
            </div>
            <div class="brand-item">
                <a href="#"><img src="/assets/images/img/partner/partner1-4.svg" alt="brandImg"></a>
            </div>
            <div class="brand-item">
                <a href="#"><img src="/assets/images/img/partner/partner1-5.svg" alt="brandImg"></a>
            </div>
            <div class="brand-item">
                <a href="#"><img src="/assets/images/img/partner/partner1-6.svg" alt="brandImg"></a>
            </div>
            <div class="brand-item">
                <a href="#"><img src="/assets/images/img/partner/partner2-1.svg" alt="brandImg"></a>
            </div>
            <div class="brand-item">
                <a href="#"><img src="/assets/images/img/partner/partner2-2.svg" alt="brandImg"></a>
            </div>
            <div class="brand-item">
                <a href="#"><img src="/assets/images/img/partner/partner2-3.svg" alt="brandImg"></a>
            </div>
            <div class="brand-item">
                <a href="#"><img src="/assets/images/img/partner/partner2-4.svg" alt="brandImg"></a>
            </div>
            <div class="brand-item">
                <a href="#"><img src="/assets/images/img/partner/partner2-5.svg" alt="brandImg"></a>
            </div>
            <div class="brand-item">
                <a href="#"><img src="/assets/images/img/partner/partner2-6.svg" alt="brandImg"></a>
            </div>
            
              
            <!-- End of brand item -->
          </div>
        </div>
      </div>
    </div>
  

    `
    // Brand Slider Html content ends 
  })
  .catch(error => {
    console.error('Error fetching brandSlider:', error);
  });
  
