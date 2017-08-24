$(document).ready(function(){
  $("#btn1").click(function(){
    make_grid($("#text1").val(),$("#text2").val());
  });
});
$(document).ready(function(){
  $("#btn2").click(function(){
    $("h1").empty();
  });
});
$(document).ready(function(){
  $('h1').delegate("click", "button.button-grid", function(){
    alert("blah");
  });
});
function make_grid(rows, columns){
  $("h1").empty();
  for(var i = 0; i < rows; i++){
    for(var j = 0; j < columns; j++){
      $(document).ready(function(){
        $("h1").append("<button class = \"button-grid\"></button>");
      });
    }
    $(document).ready(function(){
      $("h1").append("<br>");
    });
  }
}
