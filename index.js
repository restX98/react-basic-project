const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

function Navbar() {
  return (
    <nav>
      <div className="title-container">
        <span className="title">Navbar</span>
      </div>
      <div className="menu">
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="hamburger">
        <div className="lines"></div>
      </div>
    </nav>
  );
}

function MyComponent() {
  return <h1>Hello React</h1>;
}

root.render(
  <div>
    <Navbar />
    <MyComponent />,
    <ul>
      <li>Ciccio</li>
      <li>Paccio</li>
    </ul>
  </div>
);
