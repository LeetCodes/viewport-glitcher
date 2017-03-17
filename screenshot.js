"use strict";

function setScreenshotUrl(url) {
	var canvas = document.createElement('canvas');
	canvas.width = document.documentElement.clientWidth;
	canvas.height = document.documentElement.clientHeight;
	var ctx = canvas.getContext('2d');
	
	// Draw the screenshot on the canvas
	var img = new Image();
	img.src = url;
	ctx.drawImage(img, 0, 0);

	// glitch
	var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
	ctx.putImageData(gleech.pixelFunk(imageData), 0, 0);
	console.log(canvas.toDataURL('image/png'));
	document.getElementById('glitch-container').src = canvas.toDataURL('image/png');
}
