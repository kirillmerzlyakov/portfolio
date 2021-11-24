import { Header } from "./components/header/header";
import { Сontent } from "./components/content/content";
import { Route, Routes } from "react-router";
import { MainPage } from "./pages/mainPage/mainPage";
import { Contacts } from "./pages/contacts/contacts";
import styles from "./App.module.less";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Сontent />
    </div>
  );
}

export default App;
