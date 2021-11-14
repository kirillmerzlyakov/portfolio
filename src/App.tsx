import "./App.css";
import { Menu } from "./menu/menu";
import { Header } from "./header/header";
import { Content } from "./content/content";

function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <Content />
    </div>
  );
}

export default App;
