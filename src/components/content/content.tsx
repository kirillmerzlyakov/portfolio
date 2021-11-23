import React from "react";
import { Route, Routes } from "react-router-dom";
import { Footer } from "../footer/footer";
import { Brics } from "../../projects/brics";
import { SkinScan } from "../../projects/skinscan";
import "./content.css";
import { Chicaga } from "../../projects/chicaga";

export const Сontent: React.FunctionComponent = (props) => (
  <div className="content">
    <Routes>
      <Route path="/skinscan" element={<SkinScan />} />
      <Route path="/brics" element={<Brics />} />
      <Route path="/chicaga" element={<Chicaga />} />
    </Routes>
    {/* <Footer /> */}
  </div>
);
