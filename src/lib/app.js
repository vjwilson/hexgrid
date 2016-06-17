function drawHexagon(context, startX, startY) {
  var x = startX + 50;
  var y = startY;
  
  context.beginPath();
  context.moveTo(x, y);

  x += 100;
  context.lineTo(x, y);

  x += 50;
  y += 86;
  context.lineTo(x, y);
  
  x -= 50;
  y += 86;
  context.lineTo(x, y);
  
  x -= 100;
  context.lineTo(x, y);

  x -= 50;
  y -= 86;
  context.lineTo(x, y);

  x += 50;
  y -= 86;
  context.lineTo(x, y);

  context.closePath();
  context.fill();
  
}

var hexMap = document.getElementById('hexMap').getContext('2d');

var colors = [
  '#cec',
  '#ace',
  '#cef'
 ];
 
var currentColor;
var currentRowPosition;
var currentColumnPosition;
for (var rows = 0; rows < 12; rows++) {
  currentColor = colors[rows % 3];
  hexMap.fillStyle = currentColor;
  
  currentRowStart = 150 - ( (rows % 2) * 150);
  currentColumnPosition = (-86 + (rows * 86) );
  for (currentRowPosition = currentRowStart; currentRowPosition < 1600; currentRowPosition += 300) {
    drawHexagon(hexMap, currentRowPosition, currentColumnPosition);
  }

}

//hexMap.fillStyle = '#cec';
//for (var row0 = 150; row0 < 800; row0 += 300) {
//  drawHexagon(hexMap, row0, -86);
//}
//
//hexMap.fillStyle = '#ace';
//for (var row1 = 0; row1 < 800; row1 += 300) {
//  drawHexagon(hexMap, row1, 0);
//}
//
//hexMap.fillStyle = '#cef';
//for (var row2 = 150; row2 < 800; row2 += 300) {
//  drawHexagon(hexMap, row2, 86);
//}
//
//hexMap.fillStyle = '#cec';
//for (var row3 = 0; row3 < 800; row3 += 300) {
//  drawHexagon(hexMap, row3, 172);
//}
//
//hexMap.fillStyle = '#ace';
//for (var row4 = 150; row4 < 800; row4 += 300) {
//  drawHexagon(hexMap, row4, 258);
//}
//
//hexMap.fillStyle = '#cef';
//for (var row5 = 0; row5 < 800; row5 += 300) {
//  drawHexagon(hexMap, row5, 344);
//}
//
//hexMap.fillStyle = '#cec';
//for (var row6 = 150; row6 < 800; row6 += 300) {
//  drawHexagon(hexMap, row6, 430);
//}
//
//hexMap.fillStyle = '#ace';
//for (var row7 = 0; row7 < 800; row7 += 300) {
//  drawHexagon(hexMap, row7, 516);
//}

//hexMap.beginPath();
//hexMap.moveTo(86, 0);
//hexMap.lineTo(172, 50);
//hexMap.lineTo(172, 150);
//hexMap.lineTo(86, 200);
//hexMap.lineTo(0, 150);
//hexMap.lineTo(0, 50);
//hexMap.lineTo(86, 0);
//hexMap.closePath();
//hexMap.fill();
//
//hexMap.beginPath();
//hexMap.moveTo(250, 0);
//hexMap.lineTo(350, 0);
//hexMap.lineTo(400, 86);
//hexMap.lineTo(350, 172);
//hexMap.lineTo(250, 172);
//hexMap.lineTo(200, 86);
//hexMap.lineTo(250, 0);
//hexMap.closePath();
//hexMap.fill();
