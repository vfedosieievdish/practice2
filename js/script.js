function dispOverlay(obj) {
    var overlay = obj.getElementsByClassName("overlay")[0];
    var video = obj.getElementsByTagName("video")[0];
    overlay.style.display = "block";
    overlay.style.maxWidth = video.videoWidth + "px";
}

function hideOverlay(obj) {
    var overlay = obj.getElementsByClassName("overlay")[0];
    overlay.style.display = "none";
}
