
$(document).ready(function(){
  make_grid($("#text1").val(),$("#text2").val());
  $("#btn1").click(function(){
    make_grid($("#text1").val(),$("#text2").val()); });
  $("#btn2").click(function(){
    $("h1").empty(); });
  $("#btn3").click(function(){
    check($("#text1").val(),$("#text2").val()); });
  $("#checked").click(function(){
    if($(this).is(":checked")){
      constant(true);
    } else if($(this).is(":not(:checked)")) {
      constant(false);
    }
  });
  $('h1').on("click", "button", function(){
    $(this).toggleClass("black");
  });
});

function make_grid(rows, columns) {
  var count = 1;
  $('h1').empty();
  for(let i = 0; i < rows; i++){
    for(let j = 0; j < columns; j++){
      $(document).ready(function(){
        $("h1").append("<button id = \"" + count + "\" class = \"button-grid\"></button>");
        count++;
      });
    }
    $(document).ready(function(){
      $("h1").append("<br>");
    });
  }
}

function check(rows, columns){
  var toDie = [];
  var toLive = [];
  $(document).ready(function(){
    var num = 1;
    for(let i = 0; i < rows; i++){
      for(let j = 0; j < columns; j++){
        var tl = document.getElementById(num-rows-1);
        var tm = document.getElementById(num-rows);
        var tr = document.getElementById(num-rows+1);
        var ml = document.getElementById(num-1);
        var current = document.getElementById(num);
        rows = parseInt(rows);
        var mr = document.getElementById(num+1);
        var bl = document.getElementById(num+rows-1);
        var bm = document.getElementById(num+rows);
        var br = document.getElementById(num+rows+1);
        var life = 0;
        if($(tl).css("background-color") === "rgb(0, 0, 0)"){
          life++;
        }
        if($(tm).css("background-color") === "rgb(0, 0, 0)"){
          life++;
        }
        if($(tr).css("background-color") === "rgb(0, 0, 0)"){
          life++;
        }
        if($(ml).css("background-color") === "rgb(0, 0, 0)"){
          life++;
        }
        if($(mr).css("background-color") === "rgb(0, 0, 0)"){
          life++;
        }
        if($(bl).css("background-color") === "rgb(0, 0, 0)"){
          life++;
        }
        if($(bm).css("background-color") === "rgb(0, 0, 0)"){
          life++;
        }
        if($(br).css("background-color") === "rgb(0, 0, 0)"){
          life++;
        }
        if($(current).css("background-color") === "rgb(0, 0, 0)"){
          if(life < 2){
            toDie.push(current);
          } else if(life > 3){
            toDie.push(current);
          }
        }
        if($(current).css("background-color") === "rgb(255, 255, 255)"){
          if(life === 3){
            toLive.push(current);
          }
        }
        num++;
      }
    }
  });
  removeCells(toDie);
  generateCells(toLive);
}

function removeCells(array){
  $(document).ready(function(){
    for(let i = 0; i < array.length; i++){
      $(array[i]).toggleClass("black");
    }
  });
}

function generateCells(array){
  $(document).ready(function(){
    for(let i = 0; i < array.length; i++){
      $(array[i]).toggleClass("black");
    }
  });
}

function constant(run){
  if(run === true){
    //setInterval(function(check($("#text1").val(),$("#text2").val())), 5000);
  } else if (run === false){
    clearInterval(running);
  }
}
