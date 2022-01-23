const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//functions go here

//play and pause video when you click play/pause button or click the screen.
function toggleVideoStatus(){
    if (video.paused){
        video.play();
    } else {
        video.pause();
    }
}

//update play/pause icon
function updatePlayIcon(){
    if (video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

//update progress and timestamp
function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;

    //get minutes
    let mins = Math.floor(video.currentTime / 60);
    if (mins < 10){
        mins = '0' + String(mins);
    }

    //get seconds
    let secs = Math.floor(video.currentTime % 60);
    if (secs < 10){
        secs = '0' + String(secs);
    }

    //get minutes
    let minsDur = Math.floor(video.duration / 60);
    if (minsDur < 10){
        minsDur = '0' + String(minsDur);
    }

    //get seconds
    let secsDur = Math.floor(video.duration % 60);
    if (secsDur < 10){
        secsDur = '0' + String(secsDur);
    }

    timestamp.innerHTML = `${mins}:${secs}/${minsDur}:${secsDur}`;
}

//set video time to progress
function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100;
} 

//stop video
function stopVideo(){
    video.currentTime = 0;
    video.pause();
}


//event listeners go here
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);