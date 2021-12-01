import React from "react";
import { Route, Routes } from "react-router-dom";
import { Brics } from "../../projects/brics";
import { SkinScan } from "../../projects/skinscan";
import cn from "./content.module.less";
import { Chicaga } from "../../projects/chicaga";
import { BeatsApp } from "../../projects/beatsApp";
import { Fibonacci } from "../../projects/fibonacci";

export const Сontent: React.FC = () => (
  <div className={cn.content}>
    <Routes>
      <Route path="/skinscan" element={<SkinScan />} />
      <Route path="/brics" element={<Brics />} />
      {/* <Route path="/chicaga" element={<Chicaga />} /> */}
      <Route path="/beatsapp" element={<BeatsApp />} />
      <Route path="/fibonacci" element={<Fibonacci />} />
    </Routes>
  </div>
);
