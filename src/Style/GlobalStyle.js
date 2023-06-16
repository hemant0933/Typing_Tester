import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

body{
    background: ${({theme})=>(theme.background)};
    color: ${({theme})=>theme.textColor};
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

.App{
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.header{
    width:1000px;
    display:flex;
    justify-content:space-between;
    margin-left:auto;
    margin-right:auto;
    margin-top:40px;
}
.logo{
    display:flex;
    align-item:center;
}
.modalDiv{
    background: rgba(255,255,255,0.45);
-webkit-backdrop-filter: blur(7px);
backdrop-filter: blur(7px);
border: 1px solid rgba(255,255,255,0.225);
}
/* Styling For text box */
.textWrapper{
    width:800px;
    display:flex;
    justify-content:center;
    align-item:center;
    flex-direction:column;
    margin-top:51px;
}
.textBox{
    width: 800px;
}
.words{
    font-size: 1.8rem;
    word-spacing: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    font-weight: 500;
    color:${({theme})=>theme.typeBoxText};
    background: ${({theme})=>theme.typeBoxBackground};
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
.word{
    margin: 5px;
    padding-right: 2px;
}
.hidden-input{
    opacity: 0;
}
.current{
    border-left: 2px solid rgb(40, 39, 39);
    animation: blinking 2s infinite;
    animation-timing-function: ease;
}

@keyframes blinking {
    0%{
        border-left-color:  white;
    }
    25%{
        border-left-color:  rgb(16, 15, 15);
    }
    50%{
        border-left-color:  rgb(253, 249, 249);
    }
    70%{
        border-left-color:  rgb(25, 25, 25);
    }
    100%{
        border-left-color:rgb(243, 240, 240);
    }
}
.current_right{
    border-right: 1px solid black;
    animation: blinkingRight 2s infinite;
    animation-timing-function: ease;
}

@keyframes blinkingRight {
    0%{
        border-right-color:  white;
    }
    25%{
        border-right-color:  black;
    }
    50%{
        border-right-color:  white;
    }
    70%{
        border-right-color:  black;
    }
    100%{
        border-right-color:white;
    }
}
/* Styling For text box */
.correct{
    color: lawngreen;
}
.incorrect{
    color: red;
}
.upper_menu{
    display: flex;
    justify-content: space-between;
    width: 800px;
    font-size: 1.35rem;
    padding: 0.5rem;
    color:${({theme})=>theme.typeBoxText};
}
.modes{
    display: flex;
    gap: 0.6rem;
    cursor: pointer;
}
.time-mode:hover{
    background-color: grey;
    color: white;
    cursor: pointer;
}
.footer{
    width: 1000px;
    display: flex;
    justify-content: space-between;
    margin-right: auto;
    margin-left: auto;
}
.themeButton{
    width: '250px';
    height:'3rem';
}

.stats_box{
    display:flex;
    width:1000px;
    height:auto;
    margin-left:auto;
    margin-right:auto;
}
.left_stats{
    display:flex;
    align-item:center;
    flex-direction:column;
    gap:10px;
    width:30%;
    padding:30px;
}
.right_stats{
    width:70%;
}
.title{
    font-size:30px;
    color:${({theme})=>theme.typeBoxText};
    border-bottom:1px solid white;
    padding-bottom:2px;
}
.subtitle{
    font-size:18px;
    color:${({theme})=>theme.typeBoxText};
}
.user_profile{
    width:1000px;
    margin-top:15px;
    margin-right:auto;
    margin-left:auto;
    padding:10px 0px ;
    text-align:center;
    display:flex;
    flex-direction column;
    gap:10px;
    height:15rem;
    background:${({theme})=>theme.typeBoxBackground};
    border-radius:20px;
}
.table, .graph-user-page{
    margin: auto;
    width:1000px;   
}
.center_of_screen{
    display:flex;
    min-height:100vh;
    justify-content: center;
    align-items: center;
}

/* styling for loader */

.wheel-and-hamster {
    --dur: 1s;
    position: relative;
    width: 12em;
    height: 12em;
    font-size: 14px;
  }
  
  .wheel,
  .hamster,
  .hamster div,
  .spoke {
    position: absolute;
  }
  
  .wheel,
  .spoke {
    border-radius: 50%;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .wheel {
    background: radial-gradient(100% 100% at center,hsla(0,0%,60%,0) 47.8%,hsl(0,0%,60%) 48%);
    z-index: 2;
  }
  
  .hamster {
    animation: hamster var(--dur) ease-in-out infinite;
    top: 50%;
    left: calc(50% - 3.5em);
    width: 7em;
    height: 3.75em;
    transform: rotate(4deg) translate(-0.8em,1.85em);
    transform-origin: 50% 0;
    z-index: 1;
  }
  
  .hamster__head {
    animation: hamsterHead var(--dur) ease-in-out infinite;
    background: hsl(30,90%,55%);
    border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
    box-shadow: 0 -0.25em 0 hsl(30,90%,80%) inset,
          0.75em -1.55em 0 hsl(30,90%,90%) inset;
    top: 0;
    left: -2em;
    width: 2.75em;
    height: 2.5em;
    transform-origin: 100% 50%;
  }
  
  .hamster__ear {
    animation: hamsterEar var(--dur) ease-in-out infinite;
    background: hsl(0,90%,85%);
    border-radius: 50%;
    box-shadow: -0.25em 0 hsl(30,90%,55%) inset;
    top: -0.25em;
    right: -0.25em;
    width: 0.75em;
    height: 0.75em;
    transform-origin: 50% 75%;
  }
  
  .hamster__eye {
    animation: hamsterEye var(--dur) linear infinite;
    background-color: hsl(0,0%,0%);
    border-radius: 50%;
    top: 0.375em;
    left: 1.25em;
    width: 0.5em;
    height: 0.5em;
  }
  
  .hamster__nose {
    background: hsl(0,90%,75%);
    border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
    top: 0.75em;
    left: 0;
    width: 0.2em;
    height: 0.25em;
  }
  
  .hamster__body {
    animation: hamsterBody var(--dur) ease-in-out infinite;
    background: hsl(30,90%,90%);
    border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
    box-shadow: 0.1em 0.75em 0 hsl(30,90%,55%) inset,
          0.15em -0.5em 0 hsl(30,90%,80%) inset;
    top: 0.25em;
    left: 2em;
    width: 4.5em;
    height: 3em;
    transform-origin: 17% 50%;
    transform-style: preserve-3d;
  }
  
  .hamster__limb--fr,
  .hamster__limb--fl {
    clip-path: polygon(0 0,100% 0,70% 80%,60% 100%,0% 100%,40% 80%);
    top: 2em;
    left: 0.5em;
    width: 1em;
    height: 1.5em;
    transform-origin: 50% 0;
  }
  
  .hamster__limb--fr {
    animation: hamsterFRLimb var(--dur) linear infinite;
    background: linear-gradient(hsl(30,90%,80%) 80%,hsl(0,90%,75%) 80%);
    transform: rotate(15deg) translateZ(-1px);
  }
  
  .hamster__limb--fl {
    animation: hamsterFLLimb var(--dur) linear infinite;
    background: linear-gradient(hsl(30,90%,90%) 80%,hsl(0,90%,85%) 80%);
    transform: rotate(15deg);
  }
  
  .hamster__limb--br,
  .hamster__limb--bl {
    border-radius: 0.75em 0.75em 0 0;
    clip-path: polygon(0 0,100% 0,100% 30%,70% 90%,70% 100%,30% 100%,40% 90%,0% 30%);
    top: 1em;
    left: 2.8em;
    width: 1.5em;
    height: 2.5em;
    transform-origin: 50% 30%;
  }
  
  .hamster__limb--br {
    animation: hamsterBRLimb var(--dur) linear infinite;
    background: linear-gradient(hsl(30,90%,80%) 90%,hsl(0,90%,75%) 90%);
    transform: rotate(-25deg) translateZ(-1px);
  }
  
  .hamster__limb--bl {
    animation: hamsterBLLimb var(--dur) linear infinite;
    background: linear-gradient(hsl(30,90%,90%) 90%,hsl(0,90%,85%) 90%);
    transform: rotate(-25deg);
  }
  
  .hamster__tail {
    animation: hamsterTail var(--dur) linear infinite;
    background: hsl(0,90%,85%);
    border-radius: 0.25em 50% 50% 0.25em;
    box-shadow: 0 -0.2em 0 hsl(0,90%,75%) inset;
    top: 1.5em;
    right: -0.5em;
    width: 1em;
    height: 0.5em;
    transform: rotate(30deg) translateZ(-1px);
    transform-origin: 0.25em 0.25em;
  }
  
  .spoke {
    animation: spoke var(--dur) linear infinite;
    background: radial-gradient(100% 100% at center,hsl(0,0%,60%) 4.8%,hsla(0,0%,60%,0) 5%),
          linear-gradient(hsla(0,0%,55%,0) 46.9%,hsl(0,0%,65%) 47% 52.9%,hsla(0,0%,65%,0) 53%) 50% 50% / 99% 99% no-repeat;
  }
  
  /* Animations */
  @keyframes hamster {
    from, to {
      transform: rotate(4deg) translate(-0.8em,1.85em);
    }
  
    50% {
      transform: rotate(0) translate(-0.8em,1.85em);
    }
  }
  
  @keyframes hamsterHead {
    from, 25%, 50%, 75%, to {
      transform: rotate(0);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(8deg);
    }
  }
  
  @keyframes hamsterEye {
    from, 90%, to {
      transform: scaleY(1);
    }
  
    95% {
      transform: scaleY(0);
    }
  }
  
  @keyframes hamsterEar {
    from, 25%, 50%, 75%, to {
      transform: rotate(0);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(12deg);
    }
  }
  
  @keyframes hamsterBody {
    from, 25%, 50%, 75%, to {
      transform: rotate(0);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(-2deg);
    }
  }
  
  @keyframes hamsterFRLimb {
    from, 25%, 50%, 75%, to {
      transform: rotate(50deg) translateZ(-1px);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(-30deg) translateZ(-1px);
    }
  }
  
  @keyframes hamsterFLLimb {
    from, 25%, 50%, 75%, to {
      transform: rotate(-30deg);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(50deg);
    }
  }
  
  @keyframes hamsterBRLimb {
    from, 25%, 50%, 75%, to {
      transform: rotate(-60deg) translateZ(-1px);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(20deg) translateZ(-1px);
    }
  }
  
  @keyframes hamsterBLLimb {
    from, 25%, 50%, 75%, to {
      transform: rotate(20deg);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(-60deg);
    }
  }
  
  @keyframes hamsterTail {
    from, 25%, 50%, 75%, to {
      transform: rotate(30deg) translateZ(-1px);
    }
  
    12.5%, 37.5%, 62.5%, 87.5% {
      transform: rotate(10deg) translateZ(-1px);
    }
  }
  
  @keyframes spoke {
    from {
      transform: rotate(0);
    }
  
    to {
      transform: rotate(-1turn);
    }
  }
`