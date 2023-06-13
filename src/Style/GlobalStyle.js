import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}

body{
    background: ${({theme})=>(theme.background)};
    color: ${({theme})=>theme.textColor};
    margin:0;
    padding:0;
    transition:all 0.25s linear;
}

.App{
    width: 100%;
    height: 100vh;
    padding: 20px 30px;
    position: relative;
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
}
.title{
    font-size: 30px;
    font-family: 'Literata', serif;
}
/* Styling For text box */
.textBox{
    width: 900px;
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
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
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
    font-size: 1.35rem;
    padding: 0.5rem;
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



`