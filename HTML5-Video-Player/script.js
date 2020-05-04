const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// play & pause video
function toggleVideoStatus() {
  const videoPause = video.paused ? video.play() : video.pause();
  return videoPause;
}

// update play/pause icon
function updatePlayIcon() {
  video.paused = play.innerHTML
    ? '<i class="fa fa-play fa-2x/>'
    : '<i class="fa fa-play fa-2x/>';
}
// update progress and timestamp
function updateProgress() {
  return true;
}

// Set Video time
function setVideoProgress() {
  return true;
}

// Stop Video
function stopVideo() {
  return true;
}
// Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
