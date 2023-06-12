import "./App.css";
import Footer from "./Components/Footer";
import TypingBox from "./Components/TypingBox";
import UpperMenu from "./Components/UpperMenu";

function App() {
  return (
   <ThemeProvider>
     <div className="App">
      <header className="title">Typing Master</header>
      <UpperMenu />
      <TypingBox />
      <Footer/>
    </div>
   </ThemeProvider>
  );
}

export default App;
