const container = document.querySelector('[data-video="container"]');
const cover = document.querySelector('[data-video="overlay"]').querySelector('picture');
const buttonPlay = document.querySelector('[data-video="play-button"]');

const createVideo = () => {
  const video = document.createElement('iframe');

  video.setAttribute('src', 'https://www.youtube.com/embed/o313dGKJAHY?autoplay=1');
  video.setAttribute('title', 'YouTube');
  video.setAttribute('frameborder', '0');
  video.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share');
  video.setAttribute('allowfullscreen', '');
  video.classList.add('hero__video-player');
  container.append(video);
};

const embedVideo = () => {
  if (container && cover && buttonPlay) {
    buttonPlay.addEventListener('click', (event) => {
      event.preventDefault();
      cover.style.display = 'none';
      buttonPlay.style.display = 'none';
      createVideo();
    });
  }
};

export {embedVideo};
