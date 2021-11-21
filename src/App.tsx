import "./App.css";
import { Header } from "./components/header/header";
import { Сontent } from "./components/content/content";
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
