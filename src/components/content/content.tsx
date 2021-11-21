import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Brics } from "../../projects/brics/brics";
import { SkinScan } from "../../projects/skinscan/skinscan";
import "./content.css";

export const Сontent: React.FunctionComponent = (props) => (
  <div className="content">
    <Routes>
      <Route path="/skinscan" element={<SkinScan />} />
      <Route path="/brics" element={<Brics />} />
    </Routes>
    <Footer />
  </div>
);
