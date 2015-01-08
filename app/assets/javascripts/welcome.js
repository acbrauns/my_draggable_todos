$(document).on('ready', evenOutSpacing);
$(window).on('resize', evenOutSpacing);

function evenOutSpacing(){
  var windowHeight = $( window ).height();
  var mainHeight = $(".main").height();
  var marginTop = (windowHeight - mainHeight) / 2;

  $(".main").css("margin-top", marginTop);
}
