import React from "react";
import { Route, Routes } from "react-router-dom";
import { Menu } from "../menu/menu";
import { SkinScan } from "../skinscan/skinscan";
import "./content.css";

export const Сontent: React.FunctionComponent = (props) => (
  <div className="content">
    <Menu />
    <Routes>
      <Route path="/" element={<SkinScan />} />
    </Routes>
  </div>
);
