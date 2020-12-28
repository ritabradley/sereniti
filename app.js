const VideoController = function(isHovering, videoElement) {
  if (isHovering == true) {
    videoElement.play();
  } else if (isHovering == false) {
    videoElement.pause();
  }
};
