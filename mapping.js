gsap.registerPlugin(MotionPathPlugin);


// Get the targets we need

const target = document.querySelector("#rect");
const path = document.querySelector("#path");

var element = document.getElementById('area');
let normalize;
//
//
//
//
  function resize() {
    normalize = gsap.utils.normalize(0, innerWidth)
  }
  window.addEventListener("resize", resize);
  resize();
//
//   // Create the animation to use
  const tl = gsap.timeline({paused: true})
    .to(target, {motionPath: {
      path: path,
      align: path,
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }, immediateRender: true, ease: "none"});

    const followMouseHandler = e => tl.progress(normalize(((e.pageX) - 200) * 3));

    document.getElementById("man-half").onmouseover = function(){
      window.addEventListener("mousemove", followMouseHandler);
    };
    document.getElementById("man-half").onmouseout = function(){
      tl.paused;
      window.removeEventListener("mousemove", followMouseHandler);
    };




// Convert the page coordinates to 0-1




// Get the targets we need
const target2 = document.querySelector("#rect-2");
const path2 = document.querySelector("#path-2");

var element2 = document.getElementById('area-2');
let halfbox = window.innerWidth / 2;
console.log(halfbox);






  // Create the animation to use
  const tl2 = gsap.timeline({paused: true})
    .to(target2, {motionPath: {
      path: path2,
      align: path2,
      start: 0,
      end: -1,
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }, immediateRender: true, ease: "none"});

    const leadMouseHandlerRight = e => tl2.progress(normalize(((e.pageX) - halfbox) * 3));


    // window.addEventListener("mousemove", leadMouseHandlerRight);

    document.getElementById("boy-half").onmouseover = function(){
      window.addEventListener("mousemove", leadMouseHandlerRight);
    };
    document.getElementById("boy-half").onmouseout = function(){
      tl2.paused;
      window.removeEventListener("mousemove", leadMouseHandlerRight);
    };
