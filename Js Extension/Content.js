function getCurrentVideoId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("v");
}

function trackVideo() {
    let currentVideoId = getCurrentVideoId();

    if (currentVideoId) {
        console.log("Currently playing video ID:", currentVideoId);
        
        const videoElement = document.querySelector("video");
        if (videoElement) {
            videoElement.playbackRate = 1.5; 
            videoElement.loop = true;
            console.log("Video is being controlled: Playback Rate: 1.5x, Looping: true");
        }
    }
}

trackVideo();
setInterval(trackVideo, 3000);
