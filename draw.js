$(document).ready(function(){
  //Define html for pixel and pixel row that will be appended
  var pixel = '<div class="pixel"></div>'
  var pixRow = '<div class="pixRow"></div>'
  //Define variable to hold grid size, and the height and width fractions
  var gridSize = 16;
  var initial = (1/16) *100;

  function drawGrid(size){
    //First Loop: add the requisite number of rows and assign row heights
    for(i=1;i<=gridSize;i++){
        $(".canvas").append(pixRow);
        $(".pixRow").css({"height": size + "%"})
    }

    //Second Loop: add the requisite number of pixels and assign widths
    for(i=1;i<=gridSize;i++){
        $(".pixRow").append(pixel);
        $(".pixel").css({"width":size + "%"})
      }

    //The 'draw' effect - Change background color on mouse enter
    $('.pixel').on('mouseenter',function(){
      $(this).css("background-color","black");
    })
  }

  drawGrid(initial);

  //Clear canvas button
  $('#clear').on('click',function(){
    $('.pixel').css("background-color","white");
  })

  //New canvas button
  $('#new').on('click',function(){
    var newSize = prompt("How many pixels per row? (canvas is square)?");
    newSize = (1/newSize)*100;
    drawGrid(newSize);
    //console.log(newSize);
  })

});
