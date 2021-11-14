import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "../mainPage/mainPage";
import { Menu } from "../menu/menu";
import { SkinScan } from "../skinscan/skinscan";
import "./content.css";

export const Сontent: React.FunctionComponent = (props) => (
  <div className="content">
    <Routes>
      <Route path="/skinscan" element={<SkinScan />} />
      <Route path="/" element={<MainPage />} />
    </Routes>
  </div>
);
