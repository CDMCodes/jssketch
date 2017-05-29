$(document).ready(function(){
  //Define html for pixel and pixel row that will be appended
  var pixel = '<div class="pixel"></div>'
  var pixRow = '<div class="pixRow"></div>'
  //Definte variable to hold grid size, and the height and width fractions
  var gridSize = 16;
  var size = (1/16) *100;

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
    //console.log(size);

    $('.pixel').on('mouseenter',function(){
      $(this).css("background-color","black");
    })
});
