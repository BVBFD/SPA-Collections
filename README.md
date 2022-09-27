# Gym
<br>
This is the Gym website which is made by HTML, CSS, JavaScript.
<br> 
By making this website, I would like to add special CSS animation like rotating colorful border.
<br>
Or, I want to muted Video on the front main page.
<br>

### Gym Website - Practice giving special CSS animations
<hr>

![gym](https://user-images.githubusercontent.com/83178592/189129383-67407b31-7320-4677-99c6-5ffd4119465b.gif)

While making this SPA, I focused on giving Special CSS Animation Effects.
<br>
While coding rotating colorful border, I used ::before, ::after, position: absolute.
<br>
And, I used @keyframes, transform: rotate() and giving animation effects like below code.
<br>
<br>
<hr>
<br>

```CSS
...

.trainer .trainerIntroBox .trainer {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #222;
  height: 95%;
  overflow: hidden;
  z-index: 0;
}

.trainer .trainerIntroBox .trainer::before {
  position: absolute;
  top: -55%;
  left: 40%;
  content: "";
  width: 30%;
  height: 220%;
  background: linear-gradient(#21ffff, #ff11ff);
  animation: animate 4s linear infinite;
  z-index: -2;
}

.trainer .trainerIntroBox .trainer::after {
  content: "";
  position: absolute;
  background: #222;
  inset: 4px;
  z-index: -1;
}

.trainer .trainerIntroBox .trainer:nth-child(2)::before {
  background: linear-gradient(#ff2525, #1f1fd6);
}

.trainer .trainerIntroBox .trainer:nth-child(3)::before {
  background: linear-gradient(#6200ff, #ff0040);
}

.trainer .trainerIntroBox .trainer:nth-child(4)::before {
  background: linear-gradient(#fffb00, #ff5e00);
}

.trainer .trainerIntroBox .trainer:nth-child(5)::before {
  background: linear-gradient(#00ffea, #ff0404);
}

.trainer .trainerIntroBox .trainer:nth-child(6)::before {
  background: linear-gradient(#21ffff, #ff11ff);
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

...
```
<br>
I coded like that above, you can check the detailed code in pushed-file above. 
<br>
<hr>
<a href="https://bvbfd.github.io/Responsive-Gym-Web-Design/">Go To Visit Portfolio-Website</a>
