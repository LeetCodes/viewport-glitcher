"use strict";

function setScreenshotUrl(url) {
	var glitchParams = {
		amount:     35,
		iterations: 20,
		quality:    30,
		seed:       25
	};

	var screenshotImage = new Image();
	screenshotImage.src = url;

	screenshotImage.onload = function() {
		glitch(glitchParams)
			.fromImage(screenshotImage)
			.toDataURL()
			.then(function (dataURL) {
				console.log(dataURL);
				var out = new Image();
				out.src = dataURL;
				document.getElementById('glitch-container').appendChild(out);
			});
	}
}
