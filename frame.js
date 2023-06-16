let oldTitle = null;

function handleKeydown(key) {
    let videos = Array.from(document.getElementsByTagName('video'));
    let stop = false;
    if (!oldTitle) oldTitle = window.top.document.title;
    switch (key) {
        case ']':
            for (var video of videos) {
                if (!video.paused) {
                    video.playbackRate *= 1.1;
                    window.top.document.title = video.playbackRate.toString();
                    setTimeout(() => window.top.document.title = oldTitle, 300);
                    console.log(video.playbackRate);
                    stop = true;
                }
            }
            break;
        case '[':
            for (var video of videos) {
                if (!video.paused) {
                    video.playbackRate /= 1.1;
                    window.top.document.title = video.playbackRate.toString();
                    setTimeout(() => window.top.document.title = oldTitle, 300);
                    console.log(video.playbackRate);
                    stop = true;
                }
            }
            break;
        case '=':
            for (var video of videos) {
                if (!video.paused) {
                    video.playbackRate = 1;
                    window.top.document.title = video.playbackRate.toString();
                    setTimeout(() => window.top.document.title = oldTitle, 300);
                    console.log(video.playbackRate);
                    stop = true;
                }
            }
            break;
    }
    return stop;
}

document.addEventListener('keydown', function(event) {
    if (!event.ctrlKey && !event.altKey && (event.key === ']' || event.key === '[' || event.key === '=')) {
        if (handleKeydown(event.key)) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
});