import throttle from 'lodash.throttle';
const TIME_KEY = "videoplayer-current-time";
const iframe = document.querySelector('iframe');

const player = new Vimeo.Player(iframe);

player.setCurrentTime(localStorage.getItem(TIME_KEY)).then(function (seconds) {
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
player.on('timeupdate', throttle(data => { localStorage.setItem(TIME_KEY, (data.seconds)); }, 1000 ));

console.log(localStorage.getItem(TIME_KEY));


