document.addEventListener("DOMContentLoaded", function() {
    const fadingLight = document.querySelector(".fading-light");
    let opacity = 0;
    let fadeSpeed = 0.005; // Customize the fading speed
    
    function fadeInOut() {
      fadingLight.style.opacity = opacity;
      opacity += fadeSpeed;
      if (opacity > 1 || opacity < 0) {
        fadeSpeed *= -1;
      }
      requestAnimationFrame(fadeInOut);
    }
    
    fadeInOut();

    
});

document.addEventListener("DOMContentLoaded", function() {
    const fadingLight = document.querySelector(".fading-light2");
    let opacity = 0;
    let fadeSpeed = 0.005; // Customize the fading speed
    
    function fadeInOut() {
      fadingLight.style.opacity = opacity;
      opacity += fadeSpeed;
      if (opacity > 1 || opacity < 0) {
        fadeSpeed *= -1;
      }
      requestAnimationFrame(fadeInOut);
    }
    
    fadeInOut();

    
});