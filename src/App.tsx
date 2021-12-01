import { Header } from "./components/header/header";
import { Сontent } from "./components/content/content";
import { Route, Routes } from "react-router";
import { MainPage } from "./pages/mainPage/mainPage";
import { Contacts } from "./pages/contacts/contacts";
import cn from "./App.module.less";
import { Footer } from "./components/footer/footer";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className={cn.app}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Сontent />
      {pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;
