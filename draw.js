$(document).ready(function(){
  var pixel = '<div class="pixel"></div>'
  var pixRow = '<div class="pixRow"></div>'
  var gridSize = 16;
  for(i=1;i<=gridSize;i++){
      $(".canvas").append(pixRow);
  }
  for(i=1;i<=gridSize;i++){
      $(".pixRow").append(pixel);
    }
});
