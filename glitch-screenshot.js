function glitchAndSetScreenshotUrl(screenshotDataUrl) {
	var glitchParams = {
		amount:     35,
		iterations: 20,
		quality:    30,
		seed:       25
	};

	var imgContainerEl = document.getElementById('glitch-container');

	var screenshotImage = new Image();
	screenshotImage.src = screenshotDataUrl;

	glitch(glitchParams)
	.fromImage(screenshotImage)
	.toDataURL()
	.then(function (dataURL) {
	  var imageEl = new Image();
	  imageEl.src = screenshotDataUrl;
	  imgContainerEl.appendChild(imageEl);
	});

  // document.getElementById('glitch-target').src = url;
}
