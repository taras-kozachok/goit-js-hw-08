var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

player.setCurrentTime(localStorage.getItem("videoplayer-current-time")).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
player.on('timeupdate', throttle(data => { localStorage.setItem("videoplayer-current-time", (data.seconds)); }, 1000 ));

console.log(localStorage.getItem("videoplayer-current-time"));


