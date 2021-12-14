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
  $(".portalsection").slideToggle("none");
});

$(".headercont").click(function() {
  $(this).toggleClass( "unclicked" );
  $(".qatext").slideToggle('500','linear');
  $(".star").toggleClass("unclickedstar");
  $(".star").toggleClass("clickedstar");
  $(".justline").toggleClass("none");
  $(".cross").toggleClass("none");
});

$(".map, .card").hover(function(){
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


// $( ".card" ).click(function() {
//   $('.openup').slideToggle(function() {
//     if ($(this).is(':visible'))
//         $(this).css('display','flex');
//     });
// });
//
// $( ".cross" ).click(function() {
//   $('.openup').slideToggle(function() {
//     if ($(this).is(':visible'))
//         $(this).css('display','flex');
//     });
// });
//
//
// $( ".toy" ).click(function() {
//   $('#child').slideToggle('medium', function() {
//     if ($(this).is(':visible'))
//         $(this).css('display','flex');
//     });
// });
// $( ".crosschild" ).click(function() {
//   $('#child').slideToggle('medium', function() {
//     if ($(this).is(':visible'))
//         $(this).css('display','flex');
//     });
// });
//
//
// $( ".organic" ).click(function() {
//   $('#balance').slideToggle('medium', function() {
//     if ($(this).is(':visible'))
//         $(this).css('display','flex');
//     });
// });
// $( ".crossbalance" ).click(function() {
//   $('#balance').slideToggle('medium', function() {
//     if ($(this).is(':visible'))
//         $(this).css('display','flex');
//     });
// });
//
//
// $( ".type" ).click(function() {
//   $('#dark').slideToggle('medium', function() {
//     if ($(this).is(':visible'))
//         $(this).css('display','flex');
//     });
// });
// $( ".crossdark" ).click(function() {
//   $('#dark').slideToggle('medium', function() {
//     if ($(this).is(':visible'))
//         $(this).css('display','flex');
//     });
// });


$(document).mousemove(function(e) {
  let body_size_x = $( window ).width();
  let half_body_size_x = parseInt(body_size_x / 2);
  let q_body_size_x = parseInt(half_body_size_x / 2);
  let left_dir = e.pageX;
  let top_dir = e.pageY;


  let eq1 = left_dir < q_body_size_x;
  let eq2 = left_dir < parseInt (q_body_size_x * 2) ;
  let eq3 = left_dir < parseInt (q_body_size_x * 3) ;
  let eq4 = left_dir < parseInt (q_body_size_x * 4) ;

 if ($('.final_container').is(":hover")) {
   if (eq1) {
    $("body").css("background-color","blue");
  } else if (eq2) {
   $("body").css("background-color","white");
  } else if (eq3) {
    $("body").css("background-color","red");
  } else if (eq4) {
    $("body").css("background-color","green");
  }

 } else {
   $("body").css("background-color","black");
}

$(".normal").css({
left:e.pageX - 4,
top:e.pageY - 5
});
$(".hoverc").css({
left:e.pageX - 10,
top:e.pageY - 15
});
$(".moveme").css({
left:e.pageX - 10,
top:e.pageY - 15
});
});