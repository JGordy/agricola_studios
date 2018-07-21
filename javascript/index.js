// Declaring global variables
let header       = document.getElementById('header'),
    skills       = document.getElementById('skills'),
    work         = document.getElementById('work'),
    footer       = document.getElementById('footer');

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
}


// The API request to get videos from the channel list
const setVideoList = () => {
    return fetch(YTurl)
      .then(results => results.json())
      .then(data => {
          createVideoElements(data.items);
    });
};
setVideoList();
