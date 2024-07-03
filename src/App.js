import "./App.css";
import "./index.css";

function Header() {
  return <h1>React pizza co.</h1>;
}

function Pizza() {
  return (
    <div>
      <h2>Pizza Margherita</h2>
      <h3>Tomato and mozarell</h3>
      <img
        src="pizza-menu2/public/pizzas/margherita.jpg"
        alt="margherita"
      ></img>
    </div>
  );
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <ul>
        <li>
          <Pizza></Pizza>
        </li>
        <li>
          <Pizza></Pizza>
        </li>
        <li>
          <Pizza></Pizza>
        </li>
        <li>
          <Pizza></Pizza>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return <h2>We are open</h2>;
}

function App() {
  return (
    <div className="App">
      <header>
        <Header></Header>
      </header>

      <Menu></Menu>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
