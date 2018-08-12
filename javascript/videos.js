// Youtube creds for background hero video
let tag = document.createElement('script');

tag.src = 'https://www.youtube.com/player_api';

let firstScriptTag = document.getElementsByTagName('script')[0];

firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function loadImage() {
  let imageWrapper = document.getElementById('video-image-wrapper');
  let video = document.getElementById('muteYouTubeVideoPlayer');
  let heroImage = document.createElement('div');
      heroImage.id = "image";
      heroImage.className = "hero";
      imageWrapper.replaceChild(heroImage, video);
};

function onYouTubeIframeAPIReady() {
 let player;
 player = new YT.Player('muteYouTubeVideoPlayer', {
   videoId: 'QQHkBFLH6rA',        // YouTube Video ID
   width: window.innerWidth,           // Player width (in px)
   height: window.innerHeight * .6,    // Player height (in px)
   playerVars: {
     autoplay: 1,                 // Auto-play the video on load
     controls: 0,                 // Show pause/play buttons in player
     showinfo: 0,                 // Hide the video title
     modestbranding: 1,           // Hide the Youtube Logo
     disablekb: 1,
     loop: 1,                     // Run the video in a loop
     fs: 1,                       // Hide the full screen button
     cc_load_policy: 1,           // Hide closed captions
     iv_load_policy: 1,           // Hide the Video Annotations
     autohide: 0,                 // Hide video controls when playing
     end: 32,                     // End the video at a specific second mark
     rel: 0,
   },
   events: {
     onReady: function(e) {
       e.target.mute();
     },
     onStateChange: function(e) {
       if (e.data === 0) {
         loadImage();
       }
     }
   }
 });
}


// YouTube related credentials for the work section
const youTubeChannelId = 'UCF6cKDf64M0WFQbL-xfHatQ';
const key = 'AIzaSyB8AYGycl9nJhp9-aq1azpDdF-b9oZ0FiI';
let url = `https://www.googleapis.com/youtube/v3/search?key=${key}&channelId=${youTubeChannelId}&part=snippet,id&order=date&maxResults=20`;

// Youtube related functionality //
function loadThumbnails() {
    let div, n,
        videos = document.getElementsByClassName("youtube-player");
    for (n = 0; n < videos.length; n++) {
        div = document.createElement("div");
        div.setAttribute("data-id", videos[n].dataset.id);
        div.innerHTML = labnolThumb(videos[n].dataset.id);
        div.onclick = labnolIframe;
        videos[n].appendChild(div);
    }
};

function labnolThumb(id) {
    let thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
    return thumb.replace("ID", id) + play;
};

function labnolIframe() {
    let iframe = document.createElement("iframe");
    let embed = "https://www.youtube.com/embed/ID?autoplay=1";
    iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    this.parentNode.replaceChild(iframe, this);
};

const createVideoElements = (items) => {
    const videoWrapper = document.getElementById('videos-wrapper');
    items.forEach(item => {
        if (item.id.videoId) {
            videoWrapper.innerHTML += `<div class="youtube-player" data-id="${item.id.videoId}"></div>`;
        }
    });

    loadThumbnails();
};

// The API request to get videos from the channel list
const setVideoList = () => {
    return fetch(url)
      .then(results => results.json())
      .then(data => {
          console.log(data);
          createVideoElements(data.items);
    });
};
// NOTE uncomment the function call to load the youtube video list
// setVideoList();
