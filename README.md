# CityPop-Introduce-Website
<br>
I code this static websites when I got interested in Japanese 80s city pop genre.
<br>
Making this static website, I can practice to make MP3 Player with JavaScript.
<br>

### Glowing Text Animation
<hr>

![citypop1](https://user-images.githubusercontent.com/83178592/189110881-a20bd6e0-cba7-4a16-a164-bc7aa26c0776.gif)

<br>
I code this glowing text by css animation like @keyframes, filter: blur and text-shadow, animation, mix-blend-mode
<br>
Maybe, you can check with the detailed code below or git-pushed-code above.
<br>
<hr>

#### CSS Code
```
...

.home .heading h1 {
  font-size: 30rem;
  font-weight: bolder;
  mix-blend-mode: screen;
  animation: h1Anim 10s linear infinite;
}

.home .heading span {
  text-transform: uppercase;
  font-size: 30rem;
  font-weight: bolder;
  mix-blend-mode: screen;
  animation: h1Anim 10s linear infinite;
  display: table-cell;
  color: transparent;
}

.home .heading span:nth-child(8n + 1) {
  animation-delay: 0.5s;
}

.home .heading span:nth-child(8n + 2) {
  animation-delay: 1.25s;
}

.home .heading span:nth-child(8n + 3) {
  animation-delay: 2.35s;
}

.home .heading span:nth-child(8n + 4) {
  animation-delay: 2.75s;
}

.home .heading span:nth-child(8n + 5) {
  animation-delay: 1s;
}

.home .heading span:nth-child(8n + 6) {
  animation-delay: 1.35s;
}

.home .heading span:nth-child(8n + 7) {
  animation-delay: 0.65s;
}

.home .heading span:nth-child(8n + 8) {
  animation-delay: 3.65s;
}

@keyframes h1Anim {
  0%,
  5%,
  10%,
  23%,
  34%,
  45%,
  57%,
  68%,
  85%,
  96% {
    color: #fff;
    filter: blur(2px);
  }

  3%,
  8%,
  19%,
  40%,
  60%,
  79%,
  90%,
  100% {
    color: #fff;
    filter: blur(2px);
    text-shadow: 0 0 10px var(--lightGreen), 0 0 20px var(--lightGreen),
      0 0 40px var(--lightGreen), 0 0 80px var(--lightGreen);
  }
}

...
```
<hr>

<br>
Like this code in CSS, I implemented this animation like above code.
<br>
But, If you can check the detailed code, Please refering to the git-pushed code in branch above.
<br>
<br>
<br>

### Implement MP3 Player
<hr>

![citypop2](https://user-images.githubusercontent.com/83178592/189110905-10009e47-ddef-4501-bc25-9ec701a9c6ea.gif)

<br>
In order to introduce City Pop Musics, I code JS Code of Mp3 Functions in script.js 
<br>
I implemented Mp3 player functions by creating audio tags which is not actually shown to us on static website.
<br>
<br>
Depending on my CSS customed UI of Mp3 Player in this website, 
<br>
I just want to use this audio tags functions like play(), pause(), track.volume, track.duration, track.src
<br>
<br>
<br>
For examples like below.
<br>
<hr>

```
const playSong = () => {
  playingSong = true;
  play.innerHTML = '<i class="fa fa-pause"></i>';
  timer = setInterval(range_slider, 1000);
  track.play();
};

const stopSong = () => {
  playingSong = false;
  clearInterval(timer);
  play.innerHTML = '<i class="fa fa-play"></i>';
  track.pause();
};

const justPlay = () => {
  if (playingSong === false) {
    playSong();
  } else {
    stopSong();
  }
};

```
<hr>
<a href="https://bvbfd.github.io/CityPop-Homepage/">Go To Visit Portfolio-Website</a>
