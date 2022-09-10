import logo from "./logo.svg";

function Header() {
  return (
    <nav>
      <img src={logo} className="logo" alt="logo" />
      <ul className="nav-menu">
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Header;
