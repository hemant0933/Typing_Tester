
import Footer from "./Components/Footer";
import TypingBox from "./Components/TypingBox";
import { GlobalStyles } from "./Style/GlobalStyle";
import {ThemeProvider} from "styled-components";
import { useTheme } from "./Context/ThemeContext";
// import { themeOptions } from "./Utils/themeOptions";


function App() {
  const {theme} = useTheme();
  return (

   <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles/>
      <header className="title">Typing Master</header>
      <TypingBox />
      <Footer/>
    </div>
   </ThemeProvider>

  );
}

export default App;
