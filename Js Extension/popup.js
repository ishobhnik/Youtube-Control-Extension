// Convert hours, minutes, and seconds to total seconds
function convertToSeconds(hours, minutes, seconds) {
    return (hours * 3600) + (minutes * 60) + seconds;
}

// Event listener for applying loop control
document.getElementById("applyLoop").addEventListener("click", () => {
    const startHours = parseInt(document.getElementById("startHours").value) || 0;
    const startMinutes = parseInt(document.getElementById("startMinutes").value) || 0;
    const startSeconds = parseInt(document.getElementById("startSeconds").value) || 0;
    const startTime = convertToSeconds(startHours, startMinutes, startSeconds);

    const endHours = parseInt(document.getElementById("endHours").value) || 0;
    const endMinutes = parseInt(document.getElementById("endMinutes").value) || 0;
    const endSeconds = parseInt(document.getElementById("endSeconds").value) || 0;
    const endTime = convertToSeconds(endHours, endMinutes, endSeconds);

    const loopCount = parseInt(document.getElementById("loopCount").value);
    const loopDelay = parseInt(document.getElementById("loopDelay").value);

    if (startTime >= endTime) {
        document.getElementById("statusMessage").innerText = "Start time must be before end time.";
        return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: controlVideoLoop,
            args: [startTime, endTime, loopCount, loopDelay]
        });
    });
});

// Event listener for applying playback speed
document.getElementById("applySpeed").addEventListener("click", () => {
    const speed = parseFloat(document.getElementById("speed").value);

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: (playbackSpeed) => {
                document.querySelector("video").playbackRate = playbackSpeed;
            },
            args: [speed]
        });
    });
});

// Event listener for previewing video segment
document.getElementById("previewSegment").addEventListener("click", () => {
    const startHours = parseInt(document.getElementById("startHours").value) || 0;
    const startMinutes = parseInt(document.getElementById("startMinutes").value) || 0;
    const startSeconds = parseInt(document.getElementById("startSeconds").value) || 0;
    const startTime = convertToSeconds(startHours, startMinutes, startSeconds);

    const endHours = parseInt(document.getElementById("endHours").value) || 0;
    const endMinutes = parseInt(document.getElementById("endMinutes").value) || 0;
    const endSeconds = parseInt(document.getElementById("endSeconds").value) || 0;
    const endTime = convertToSeconds(endHours, endMinutes, endSeconds);

    if (startTime >= endTime) {
        document.getElementById("statusMessage").innerText = "Start time must be before end time.";
        return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: previewVideoSegment,
            args: [startTime, endTime]
        });
    });
});

// Function to control video loop
function controlVideoLoop(startTime, endTime, loopCount, loopDelay) {
    const video = document.querySelector("video");
    let loopCounter = 0;

    function playSegment() {
        video.currentTime = startTime;
        video.play();

        const checkTime = () => {
            if (video.currentTime >= endTime) {
                video.pause();
                loopCounter += 1;
                if (loopCounter < loopCount) {
                    setTimeout(playSegment, loopDelay * 1000);
                } else {
                    video.currentTime = endTime; // Continue playing from end
                    video.play();
                }
                video.removeEventListener("timeupdate", checkTime);
            }
        };

        video.addEventListener("timeupdate", checkTime);
    }

    playSegment();
}

// Function to preview the video segment
function previewVideoSegment(startTime, endTime) {
    const video = document.querySelector("video");

    if (video) {
        video.currentTime = startTime;  // Start the video at the start time
        video.play();

        // Stop the video once it reaches the end time
        video.addEventListener("timeupdate", function onTimeUpdate() {
            if (video.currentTime >= endTime) {
                video.pause();
                video.removeEventListener("timeupdate", onTimeUpdate);
            }
        });
    }
}
