$(document).ready(function(){
  //Define html for pixel and pixel row that will be appended
  var pixel = '<div class="pixel"></div>'
  var pixRow = '<div class="pixRow"></div>'
  var initial = 16;

  //function to draw grid, given an input of the number of pixels per row
  //or column
  function drawGrid(gridSize){
    //define variable to hold height and width of pixels
    var size = (1/gridSize)*100;
    //Clear any existing pixels
    $('.pixel').remove();
    $('.pixRow').remove();

    //First Loop: add the requisite number of rows and assign row heights
    for(i=1;i<=gridSize;i++){
        $(".canvas").append(pixRow);
        $(".pixRow").css({"height": size + "%"})
        console.log("i="+i);
    }

    //Second Loop: add the requisite number of pixels and assign widths
    for(j=1;j<=gridSize;j++){
        $(".pixRow").append(pixel);
        $(".pixel").css({"width":size + "%"})
        console.log("j="+j);
      }

    //The 'draw' effect - Change background color on mouse enter
    $('.pixel').on('mouseenter',function(){
      $(this).css("background-color","black");
    })
  }

  //On ready, draw the first grid with initial value of 16
  drawGrid(initial);

  //Clear canvas button
  $('#clear').on('click',function(){
    $('.pixel').css("background-color","white");
  })

  //New canvas button
  $('#new').on('click',function(){

    var newSize = prompt("How many pixels per row? (canvas is square)?");
    //newSize = (1/newSize)*100;
    $('.pixel').remove();
    drawGrid(newSize);
    //console.log(newSize);
  })

});
