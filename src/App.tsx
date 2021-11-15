import "./App.css";
import { Header } from "./header/header";
import { Сontent } from "./content/content";
import { Route, Routes } from "react-router";
import { MainPage } from "./mainPage/mainPage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Сontent />
    </div>
  );
}

export default App;
