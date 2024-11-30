// Initialize particles on window load
window.onload = function () {
  Particles.init({
    selector: ".background",
  });
};

// Configure particles for a unique look
const particles = Particles.init({
  selector: ".background",
  color: ["#FF0099", "#00FFFF", "#FFD700", "#8A2BE2"], // Vibrant colors
  connectParticles: true,
  maxParticles: 100, // Increased number of bubbles
  sizeVariations: 4, // Bigger range of size variations
  speed: 1.1, // Faster movement for a dynamic look
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#FFF", "#FF0099", "#00FFFF", "#FFD700"],
        maxParticles: 150, // Adjust for smaller screens
        connectParticles: false,
      },
    },
  ],
});

// START CLOCK SCRIPT

// Add padding functionality to the Number prototype
Number.prototype.pad = function (n) {
  let result = this.toString();
  while (result.length < n) {
    result = "0" + result;
  }
  return result;
};

// Test log to ensure everything is working
console.log("Hello, world!");