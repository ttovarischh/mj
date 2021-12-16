function getBgUrl(el) {
    var bg = "";
    if (el.currentStyle) {
        bg = el.currentStyle.backgroundImage;
    } else if (document.defaultView && document.defaultView.getComputedStyle) {
        bg = document.defaultView.getComputedStyle(el, "").backgroundImage;
    } else {
        bg = el.style.backgroundImage;
    }
    return bg.replace(/url\(['"]?(.*?)['"]?\)/i, "$1");
}

var image = document.createElement('img');
image.src = getBgUrl(document.getElementById('spritetarget'));
image.onload = function () {
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
        var docHeight = $(document).height();
        var y = $(window).scrollTop();
        $(".portalsection").slideToggle("none");
        if ($(".portal_seq").hasClass("action")) {
          $(window).scrollTop(y+(docHeight / 8));
        }
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

$(".map, .card, a, .qa, .portal").hover(function(){
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
  let eq7 = left_dir < parseInt (kill * 11) ;
  let eq8 = left_dir < parseInt (kill * 12) ;
  let eq9 = left_dir < parseInt (kill * 13) ;
  let eq10 = left_dir < parseInt (kill * 14) ;
  let eq11 = left_dir < parseInt (kill * 15) ;
  let eq12 = left_dir < parseInt (kill * 16) ;
  let eq13 = left_dir < parseInt (kill * 17) ;
  let eq14 = left_dir < parseInt (kill * 18) ;










  let dead2 = left_dir < half_body_size_x;
  if (dead2) {
    $(".pain").css('display', 'none');
 } else {
   $(".pain").css('display', 'block');
 }

 let deadone = left_dir > half_body_size_x;
 if (deadone) {
   $(".square").css('display', 'none');
  } else {
    $(".square").css('display', 'block');
  }


 if ($('.final_container').is(":hover")) {
   $(".cursor").addClass("none");

   $(".square").css({
   left:e.clientX - 100
   });
   $(".pain").css({
   left:e.clientX - 100
   });

   if (eq1) {
    console.log("eq1");
  } else if (eq2) {
    console.log("eq2");
   $(".square").css("background-image", "url('./images/1.jpg')");
   $(".square").css({
   'top': '62%',
   left:e.clientX - 100
   });
  } else if (eq3) {
    $(".texture").css('opacity','0');
    console.log("eq3");
    $(".square").css("background-image", "url('./images/3.jpg')");
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
  }
  else if (eq5) {
    console.log("eq5");
    $(".square").css("background-image", "url('./images/5.jpg')");
    $(".pain").css("background-image", "url('./images/b1.jpg')");
    $(".square").css({
    'top': '46%',
    left:e.clientX - 100
    });
    // $(".texture").fadeIn();
    $(".texture").css('opacity','1');

    $(".pain").css({
    'top': '34%',
    left:e.clientX + 100
    });
  } else if (eq6) {
    console.log("eq6");
    $(".pain").css({
    'top': '34%',
    left:e.clientX + 100
    });
  }
  else if (eq7) {
    // $(".texture").fadeOut();
    $(".texture").css('opacity','0');

    $(".pain").css("background-image", "url('./images/b1.jpg')");
    console.log("eq7");
    $(".pain").css({
    'top': '34%',
    left:e.clientX + 100
    });
  }
  else if (eq8) {
    // $(".pain").css("background-image", "url('./images/b2.jpg')");
    $(".pain").css("display", "none");

    console.log("eq8");
    $(".pain").css({
    'top': '17%'
    });
  }
  else if (eq9) {
    $(".pain").css("background-image", "url('./images/b2.jpg')");
    console.log("eq9");
    $(".pain").css({
    'top': '34%'
    });
  }
  else if (eq10) {
    $(".pain").css("background-image", "url('./images/b4.jpg')");
    console.log("eq10");
    $(".pain").css({
    'top': '7%'
    });
  }
  else if (eq11) {
    console.log("eq11");
    $(".pain").css('display', 'none');
  }
  else if (eq12) {
    console.log("eq12");
    $(".pain").css("background-image", "url('./images/b5.jpg')");
    $(".pain").css({
    'top': '34%',
    left:e.clientX - 300
    });
  }
  else if (eq13) {
    $(".pain").css({
    'top': '34%',
    left:e.clientX - 300
    });
  }
  else if (eq14) {
    $(".pain").css('display', 'none');
  }
 } else {
  $(".cursor").removeClass("none");
  $(".square").css('display', 'none');
  $(".pain").css('display', 'none');
}

// else if (eq9) {
//      console.log("eq9");
//      $(".pain").toggleClass("ba");
//      $(".pain").toggleClass("bb");
//      $(".pain").css({
//      'top': '6%',
//      });
//   }




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
