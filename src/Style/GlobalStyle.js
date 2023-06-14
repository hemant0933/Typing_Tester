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
`