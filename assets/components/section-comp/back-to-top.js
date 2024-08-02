window.onscroll = () => {
  toggleTopButton();
};

function scrollToTop() {
  smoothScrollTo(0, 100); // Adjust the duration (in ms) here
}

function toggleTopButton() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("back-to-top").classList.remove("d-none");
  } else {
      document.getElementById("back-to-top").classList.add("d-none");
  }
}

// Smooth scroll function with adjustable duration
function smoothScrollTo(target, duration) {
  const start = window.scrollY;
  const change = target - start;
  const increment = 20;
  let currentTime = 0;

  const animateScroll = function() {
      currentTime += increment;
      const val = customEaseInOut(currentTime, start, change, duration);
      window.scrollTo(0, val);
      if (currentTime < duration) {
          setTimeout(animateScroll, increment);
      }
  };
  animateScroll();
}

// Custom easing function for a smoother middle transition
function customEaseInOut(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * (Math.pow(t, 2.5)) + b;
  t -= 2;
  return c / 2 * (Math.pow(t, 2.5) + 2) + b;
}