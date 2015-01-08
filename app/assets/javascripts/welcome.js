$(document).on('ready', evenOutSpacing);
$(window).on('resize', evenOutSpacing);

function evenOutSpacing(){

  //get width of window, divide by 3
  var thirdWidth = $(".main").width() / 3;

  var tables = $(".main table");
  for (var i = 0; i < tables.length; i++){
    $(tables[i]).css("width", thirdWidth - 5);
  }

  var windowHeight = $( window ).height();
  var mainHeight = $(".main").height();
  var marginTop = (windowHeight - mainHeight) / 2;

  $(".main").css("margin-top", marginTop);
}


