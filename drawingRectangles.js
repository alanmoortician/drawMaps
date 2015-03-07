

var tilesetImage = new Image();
tilesetImage.src = 'tanks_sheet.png';
tilesetImage.onload = drawImage;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


ctx.font = "30px Arial";
ctx.fillText("Hello World",10,50);

/*
function drawImage () {

	      ctx.drawImage(tilesetImage, 10, 10);
}
*/

