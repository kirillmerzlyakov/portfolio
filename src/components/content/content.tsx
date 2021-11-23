import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Brics } from "../../projects/brics";
import { SkinScan } from "../../projects/skinscan";
import "./content.css";
import { Chicaga } from "../../projects/chicaga";
import { BeatsApp } from "../../projects/beatsApp";

export const Сontent: React.FunctionComponent = (props) => (
  <div className="content">
    <Routes>
      <Route path="/skinscan" element={<SkinScan />} />
      <Route path="/brics" element={<Brics />} />
      <Route path="/chicaga" element={<Chicaga />} />
      <Route path="/beatsapp" element={<BeatsApp />} />
    </Routes>
    {/* <Footer /> */}
  </div>
);
