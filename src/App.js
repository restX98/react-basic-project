import { useState } from "react";
import Navbar from "./components/Navbar";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  console.log(darkMode);

  function themeToggle(e) {
    setDarkMode((prevState) => !prevState);
  }

  return (
    <div className={"App" + (darkMode ? " dark" : "")}>
      <Navbar onClick={themeToggle} />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
