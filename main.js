var closeButtonVideoPlayer = document.getElementsByClassName('close-icon-container')[0];

var videoContainer = document.getElementsByClassName('video-container')[0];

var teghGroupImageClickListener = document.getElementsByClassName('teghgroup-video-image')[0];
var polycabGroupImageClickListener = document.getElementsByClassName('polycab-video-image')[0];

var teghGroupPlayer = document.getElementById('teghgroup-video');


teghGroupImageClickListener.addEventListener('click', function(){
    console.log("TeghGroup Image Clicked");

    videoContainer.style.display = "flex";
});

polycabGroupImageClickListener.addEventListener('click', function(){
    console.log("Polycab Image Clicked");

    videoContainer.style.display = "flex";
})

closeButtonVideoPlayer.addEventListener('click', function(){
    //teghGroupPlayer.stopVideo(); //Hopefully it will when on a server
    videoContainer.style.display = "none";
    
})