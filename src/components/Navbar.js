import logo from "../images/logo.svg";

function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
        <span className="logo-text">ReactFacts</span>
      </div>
      <span className="title">React Course - Project 1</span>
    </nav>
  );
}

export default Navbar;
