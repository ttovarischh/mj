gsap.registerPlugin(MotionPathPlugin);

// Get the targets we need
const target = document.querySelector("#rect");
const path = document.querySelector("#path");

// Convert the page coordinates to 0-1
let normalize;
function resize() {
  normalize = gsap.utils.normalize(0, innerWidth)
}
window.addEventListener("resize", resize);
resize();

// Create the animation to use
const tl = gsap.timeline({paused: true})
  .to(target, {motionPath: {
    path: path,
    align: path,
    autoRotate: true,
    alignOrigin: [0.5, 0.5]
  }, immediateRender: true, ease: "none"});

  $(".killme").mouseover(function() {
    // alert("Hello");
  window.addEventListener("mousemove", e => tl.progress(normalize(e.pageX)));
})

// When the mouse is moved, change the progress of our animation
// window.addEventListener("mousemove", e => tl.progress(normalize(e.pageX)));
