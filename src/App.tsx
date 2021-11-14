import "./App.css";
import { Menu } from "./menu/menu";
import { Header } from "./header/header";
import { Route, Routes } from "react-router-dom";
import { SkinScan } from "./skinscan/skinscan";
import { Сontent } from "./content/content";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Menu /> */}
      {/* <SkinScan /> */}
      <Сontent />
      {/* <Routes>
        <Route path="/" element={<Сontent />} />
      </Routes> */}
    </div>
  );
}

export default App;
