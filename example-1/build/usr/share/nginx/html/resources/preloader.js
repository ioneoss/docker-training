var mediaQuery2x = [
    '(-webkit-min-device-pixel-ratio: 2)',
    '(min-resolution: 192dpi)',
    '(min-resolution: 2dppx)'
].join(',');

var mediaQuerySmall3x = [
    '(-webkit-min-device-pixel-ratio: 3) and (max-width: 1199px)',
    '(min-resolution: 288dpi) and (max-width: 1199px)',
    '(min-resolution: 3dppx) and (max-width: 1199px)'
].join(',');

var mediaQuery3x = [
    '(-webkit-min-device-pixel-ratio: 3) and (min-width: 1200px)',
    '(min-resolution: 288dpi) and (min-width: 1200px)',
    '(min-resolution: 3dppx) and (min-width:12009px)'
].join(',');



// Load all images from <img> tag
document.addEventListener("DOMContentLoaded", function(event) {
	var allImages = document.getElementsByTagName('img');
	var images = [];
	for(var i=0;i<allImages.length;i++) {
		if(allImages[i].getAttribute('data-src') !== null) {
			images.push(allImages[i]);
		}
	}

	if (window.matchMedia(mediaQuery3x).matches) {
		images.forEach(function(el, index) {
		    loadImages(el, 3);
		});
	} else if (window.matchMedia(mediaQuery2x).matches || window.matchMedia(mediaQuerySmall3x).matches) {
		images.forEach(function(el, index) {
		    loadImages(el, 2);
		});
	} else {
		images.forEach(function(el, index) {
		    loadImages(el, 1);
		});
	}
});


// Load all inline background images
document.addEventListener("DOMContentLoaded", function(event) {
	var allImages = document.querySelectorAll('[data-bg]');
	var images = [];
	for(var i=0;i<allImages.length;i++) {
		if(allImages[i].getAttribute('data-bg') !== null) {
			images.push(allImages[i]);
		}
	}

	if (window.matchMedia(mediaQuery3x).matches) {
		images.forEach(function(el, index) {
		    loadBackgroundImage(el, 3);
		});
	} else if (window.matchMedia(mediaQuery2x).matches || window.matchMedia(mediaQuerySmall3x).matches) {
		images.forEach(function(el, index) {
		    loadBackgroundImage(el, 2);
		});
	} else {
		images.forEach(function(el, index) {
		    loadBackgroundImage(el, 1);
		});
	}
});



function loadImages(element, devicePixelRatio) {
	var regexSuffix = /\.\w+$/;

	var image = element;
	var imagePath = image.getAttribute('data-src');

	var imageName = imagePath.replace(regexSuffix, '');
	var imageExt = imagePath.split('.').pop().split(/[\?\#]/).shift();

	var buildImage;
	if(devicePixelRatio !== 1) {
		buildImage = imageName+'@'+devicePixelRatio+'x.'+imageExt;
	} else {
		buildImage = imagePath;
	}


	imageExists(buildImage, function(status){
		if (status == 200) { // 200 = OK
			if(imageExt !== 'svg' && devicePixelRatio !== 1) {
				image.src = imageName+'@'+devicePixelRatio+'x.'+imageExt;
			} else {
				image.src = imagePath;
			}
		} else {
			image.src = imagePath;
		}
	});

}


function loadBackgroundImage(element, devicePixelRatio) {
	var regexSuffix = /\.\w+$/;

	var image = element;
	var imagePath = image.getAttribute('data-bg');

	var imageName = imagePath.replace(regexSuffix, '');
	var imageExt = imagePath.split('.').pop().split(/[\?\#]/).shift();

	var buildImage;
	if(devicePixelRatio !== 1) {
		buildImage = imageName+'@'+devicePixelRatio+'x.'+imageExt;
	} else {
		buildImage = imagePath;
	}


	imageExists(buildImage, function(status){
		if (status == 200) { // 200 = OK
			if(imageExt !== 'svg' && devicePixelRatio !== 1) {
				image.style.backgroundImage = 'url('+imageName+'@'+devicePixelRatio+'x.'+imageExt+')';
			} else {
				image.style.backgroundImage = 'url('+imagePath+')';
			}
		} else {
			image.style.backgroundImage = 'url('+imagePath+')';
		}
	});

}

// function updateImage(image, imageName, devicePixelRatio, imageExt) {
// 	image.src = imageName+'@'+devicePixelRatio+'x.'+imageExt;
// }
// function updateDefaultImage(image, imagePath) {
// 	image.src = imagePath;
// }


function imageExists(image, callback) {

	var bActiveX;
	try {
	  new ActiveXObject('Microsoft.XMLHTTP');
	  bActiveX = true;
	}
	catch(e) {
	  bActiveX = false;
	}

	if (window.XMLHttpRequest || bActiveX) { // IE7+, FF and Chrome
		var req = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
		
		req.open('HEAD', image);
	    req.onreadystatechange = function(data) {
	    	if (req.readyState == 4) { // 4 = "loaded"
				callback(this.status);
				/*if (req.status == 200) { // 200 = OK
					if(imageExt !== 'svg' && devicePixelRatio !== 1) {
						updateImage(image, imageName, devicePixelRatio, imageExt)
					}
				} else {
					updateDefaultImage(image, imagePath);
				}*/
		        // console.log(req.status)
	    	}
	    };
	    req.send();
		
	}

}