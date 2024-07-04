window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/stacked";
var NUM_INTERP_FRAMES = 240;

var interp_images = [];
function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    interp_images[i] = new Image();
    interp_images[i].src = path;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}


$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    //// remove useless code of initializing the bulma carousel.
    // var options = {
		// 	slidesToScroll: 1,
		// 	slidesToShow: 3.3,
		// 	loop: true,
		// 	infinite: true,
		// 	autoplay: false,
		// 	autoplaySpeed: 3000,
    // }


    

})


// switch video in multiple morphology
function update_rm2d_comp_multiH() {
  var horizon = document.getElementById("rm2d-comp-multi-h-1").value;
  // var inst = document.getElementById("single-menu-instances-single-task-real").value;
  // console.log("gpt", task, inst)

  var video = document.getElementById("rm2d-comp-multi-h-1-video");
  video.src = "./materials/rm2d-multi-h/" + "env60_h" + horizon + ".mp4";
  // video.playbackRate = 2.0;
  video.play();
}