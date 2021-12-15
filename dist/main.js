function getBgUrl(el) {
    var bg = "";
    if (el.currentStyle) { // IE
        bg = el.currentStyle.backgroundImage;
    } else if (document.defaultView && document.defaultView.getComputedStyle) { // Firefox
        bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
    } else { // try and get inline style
        bg = el.style.backgroundImage;
    }
    return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
}

var image = document.createElement('img');
image.src = getBgUrl(document.getElementById('spritetarget'));
image.onload = function () {
  // $(".preloader").addClass("none");
      // $(document.body).removeClass("prebody");
    setTimeout(function()
    {   $(".preloader").addClass("none");
        $(document.body).removeClass("prebody");}
    , 3000);
};

$(".portal").click(function() {
  $(".portal_seq").toggleClass("action");
  $(".portal_seq").toggleClass("still");
  setTimeout(function()
      {
        $(".portalsection").slideToggle("none");
    }
  , 1000);

});

$(".headercont").click(function() {
  $(this).toggleClass( "unclicked" );
  $(".qatext").slideToggle('500','linear');
  $(".star").toggleClass("unclickedstar");
  $(".star").toggleClass("clickedstar");
  $(".justline").toggleClass("none");
  $(".cross").toggleClass("none");
});

$(".map, .card, a, .qa").hover(function(){
  $(".cursor").toggleClass("hoverc");
  $(".cursor").toggleClass("normal");
});
$(".spriteslider, .spriteslider2").hover(function(){
  $(".cursor").toggleClass("moveme");
  $(".cursor").toggleClass("normal");
});

$(".cross").hover(function(){
  $(".qa").toggleClass("brr");
});


$( ".mech" ).click(function() {
  if($('#ein').is(':visible')){

  } else {
    $("#ein").toggleClass("none");
    $("#zwei").addClass("none");
    $("#drei").addClass("none");
    $("#vier").addClass("none");
  }
});

$( ".toy" ).click(function() {
  if($('#zwei').is(':visible')){

  } else {
    $("#zwei").toggleClass("none");
    $("#ein").addClass("none");
    $("#drei").addClass("none");
    $("#vier").addClass("none");
  }
});

$( ".organic" ).click(function() {
  if($('#drei').is(':visible')){

  } else {
    $("#drei").toggleClass("none");
    $("#ein").addClass("none");
    $("#zwei").addClass("none");
    $("#vier").addClass("none");
  }
});

$( ".type" ).click(function() {
  if($('#vier').is(':visible')){

  } else {
    $("#vier").toggleClass("none");
    $("#ein").addClass("none");
    $("#zwei").addClass("none");
    $("#drei").addClass("none");
  }
});

  $( ".texture" ).click(function() {
    $('audio')[0].play();
  });


$(document).mousemove(function(e) {
  let body_size_x = $(".final_container").width();
  let half_body_size_x = parseInt(body_size_x / 2);
  let q_body_size_x = parseInt(half_body_size_x / 2);
  let mine = parseInt(q_body_size_x / 2);
  let kill = parseInt(mine / 2);

  let left_dir = e.pageX;
  let top_dir = e.pageY;

  let eq1 = left_dir < kill;
  let eq2 = left_dir < parseInt (kill * 4) ;
  let eq3 = left_dir < parseInt (kill * 7) ;
  let eq4 = left_dir < parseInt (kill * 8) ;
  let eq5 = left_dir < parseInt (kill * 9) ;
  let eq6 = left_dir < parseInt (kill * 10) ;
  let eq7 = left_dir > parseInt (kill * 10) ;
  let eq8 = left_dir < parseInt (kill * 11) ;
  let eq9 = left_dir > parseInt (q_body_size_x * 3) ;
  let e10 = left_dir > parseInt (q_body_size_x * 3.5) ;




  let dead2 = left_dir < half_body_size_x;
  if (dead2) {
    $(".square2").css('display', 'none');
 } else {
   $(".square2").css('display', 'block');

   if (eq9) {
     console.log("eq9");
     $(".square2").css("background-image", "url('./images/b3.jpg')");
     $("body").css("background", "red");


     $(".square2").css({
     'top': '6%',
     });
  }
 }

  if (eq1) {
    $(".square").css('display', 'none');
 } else {
   $(".square").css('display', 'block');
 }

 if ($('.final_container').is(":hover")) {
   $(".square").css({
   left:e.clientX - 100
   });
   $(".square2").css({
   left:e.clientX - 100
   });
   $(".square2").css('display', 'none');


   $(".square").fadeIn();
   if (eq1) {
    console.log("eq1");
  } else if (eq2) {
    $(".square2").css('display', 'none');

    console.log("eq2");
   $(".square").css("background-image", "url('./images/1.jpg')");
   $(".square").css({
   'top': '62%',
   left:e.clientX - 100
   });
  } else if (eq3) {
    console.log("eq3");
    $(".square").css("background-image", "url('./images/3.jpg')");
    $(".square2").css('display', 'none');

    $(".square").css({
    'top': '9%',
    left:e.clientX - 280
    });
  } else if (eq4) {
    console.log("eq4");
    $(".square").css({
    'top': '30%',
    left:e.clientX - 250
    });
    $(".square").css("background-image", "url('./images/4.jpg')");
    $(".square2").css('display', 'none');

  }
  else if (eq5) {
    console.log("eq5");
    $(".square").css("background-image", "url('./images/5.jpg')");
    $(".square").css('display', 'none');
    $(".texture").fadeIn();
    $(".square2").css('display', 'none');


  } else if (eq6) {
    console.log("eq6");
    $(".square").hide();
    $(".square2").css('display', 'none');


  }
  else if (eq7) {
    $(".square").css('display', 'none');
    $(".square2").css('display', 'block');
    $(".square2").css("background-image", "url('./images/b1.jpg')");
    $(".square2").css({
    'top': '47%',
    });
  }
  else if (eq8) {
    $(".square2").css('display', 'block');
    $(".square").css('display', 'none');
    $(".square2").css("background-image", "url('./images/b1.jpg')");
    $(".square2").css({
    'top': '47%',
    });
  }
 } else {
  $(".square").css('display', 'none');
  $(".square2").css('display', 'none');

  // $(".texture").fadeOut();
}




$(".normal").css({
left:e.clientX - 4,
top:e.clientY - 5
});
$(".hoverc").css({
left:e.clientX - 10,
top:e.clientY - 15
});
$(".moveme").css({
left:e.clientX - 10,
top:e.clientY - 15
});
});
