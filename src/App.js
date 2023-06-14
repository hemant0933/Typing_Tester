
import Footer from "./Components/Footer";
import TypingBox from "./Components/TypingBox";
import { GlobalStyles } from "./Style/GlobalStyle";
import {ThemeProvider} from "styled-components";
import { useTheme } from "./Context/ThemeContext";
import Header from "./Components/Header";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
// import { themeOptions } from "./Utils/themeOptions";


function App() {
  const {theme} = useTheme();
  return (

   <ThemeProvider theme={theme}>
      <ToastContainer/>
      <div className="App">
        <GlobalStyles/>
      <Header/>
      <TypingBox />
      <Footer/>
    </div>
   </ThemeProvider>

  );
}

export default App;
