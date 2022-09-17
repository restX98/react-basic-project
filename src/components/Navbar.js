import logo from "../images/logo.svg";
import "./Navbar.css";

function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
        <span className="logo-text">ReactFacts</span>
      </div>
      <span className="title">React Course - Project 1</span>
      <div className="toggler" onClick={props.onClick}>
        <p className="light">Light</p>
        <div className="slider" onClick={props.toggleDarkMode}>
          <div className="circle"></div>
        </div>
        <p className="dark">Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;
