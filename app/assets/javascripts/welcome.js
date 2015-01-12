$(document).on('ready', function(){
  evenOutSpacing();
  var tables = $(".main table");

  $("tbody tr", tables).draggable({
      cancel: "button", // these elements won't initiate dragging
      revert: "invalid", // when not dropped, the item will revert back to its initial position
      containment: "document",
      helper: "clone", //makes item being dragged have visual clone
      cursor: "move"
  });

  tables.droppable({
        accept: ".main tbody tr",
        drop: function(event, ui){
          event.preventDefault();
          $(this).append(ui.draggable);
          item_id = ((ui.draggable).attr('id'));
          console.log((ui.draggable).attr('id'));
          //  PUT    /users/:user_id/items/:id(.:format)      items#update
          $.ajax({
            url: '/users/1/items/' + item_id,
            type: 'PUT',
            data: $(this).serialize()
          }).done(function(response){
            console.log("done");
          });
          //logs id of table, corresponds to status of item
          var status = ($(this).attr('id'));
          // console.log(status);
        }
   });

});

$(window).on('resize', evenOutSpacing);

function evenOutSpacing(){

  var windowHeight = $( window ).height();
  $(".main").css("min-height", windowHeight/2);

  //get width of window, divide by 3
  var thirdWidth = $(".main").width() / 3;
  var tables = $(".main table");
  for (var i = 0; i < tables.length; i++){
    $(tables[i]).css("width", thirdWidth - 25); //subtract for margins to avoid overflow
    $(tables[i]).css("min-height", windowHeight/2);
    $("tbody tr td, thead th", tables[i]).css("width", thirdWidth - 25);
    $("p.icons", tables[i]).css("width", 60);
    $("p.text", tables[i]).css("width", thirdWidth - 115);
  }

  //need to calculate mainHeight AFTER even horizontal spacing of 3 tables
  var mainHeight = $(".main").height();
  for (var i = 0; i < tables.length; i++){
    $(tables[i]).css("min-height", mainHeight);
  }

  //must make sure div is smaller than windowin tha
  //otherwise adds negative top margin and won't scroll properly
  if (windowHeight > mainHeight){
    var marginTop = (windowHeight - mainHeight) / 2;
    $(".main").css("margin-top", marginTop);
  }
}


