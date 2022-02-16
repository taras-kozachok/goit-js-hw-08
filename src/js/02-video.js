//var throttle = require('lodash.throttle');

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

player.on('timeupdate', function (data) { 
    let i = 1;
   // console.log(data.seconds);
    _.throttle(console.log(i));
   // console.log(i);
    i += 1;
    (localStorage.setItem("videoplayer-current-time", (data.seconds)));
 //   const videoplayer-current-time = data
})

console.log(localStorage.getItem("videoplayer-current-time"));


