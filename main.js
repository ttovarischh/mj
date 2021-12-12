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




$("#calm").addClass("none");
$("#child").addClass("none");
$("#balance").addClass("none");
$("#dark").addClass("none");


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

$(".map").hover(function(){
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
  $('#calm').slideToggle('medium', function() {
    if ($(this).is(':visible'))
        $(this).css('display','flex');
    });
});
$( ".crosscalm" ).click(function() {
  $('#calm').slideToggle('medium', function() {
    if ($(this).is(':visible'))
        $(this).css('display','flex');
    });
});


$( ".toy" ).click(function() {
  $('#child').slideToggle('medium', function() {
    if ($(this).is(':visible'))
        $(this).css('display','flex');
    });
});
$( ".crosschild" ).click(function() {
  $('#child').slideToggle('medium', function() {
    if ($(this).is(':visible'))
        $(this).css('display','flex');
    });
});


$( ".organic" ).click(function() {
  $('#balance').slideToggle('medium', function() {
    if ($(this).is(':visible'))
        $(this).css('display','flex');
    });
});
$( ".crossbalance" ).click(function() {
  $('#balance').slideToggle('medium', function() {
    if ($(this).is(':visible'))
        $(this).css('display','flex');
    });
});


$( ".type" ).click(function() {
  $('#dark').slideToggle('medium', function() {
    if ($(this).is(':visible'))
        $(this).css('display','flex');
    });
});
$( ".crossdark" ).click(function() {
  $('#dark').slideToggle('medium', function() {
    if ($(this).is(':visible'))
        $(this).css('display','flex');
    });
});


$(document).mousemove(function(e) {
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
