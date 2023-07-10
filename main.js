var closeButtonVideoPlayer = document.getElementById('close-icon-container');

var videoContainer = document.getElementById('video-container');

var teghGroupImageClickListener = document.getElementById('teghgroup-video-image');
var polycabGroupImageClickListener = document.getElementById('polycab-video-image');

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