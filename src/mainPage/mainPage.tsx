import React from "react";
import "./mainPage.css";

export const MainPage: React.FunctionComponent = (props) => (
  <div className="main-page">
    <div className="first-main-page">
      {renderMenuBlock()}
      {renderTitleBlock()}
    </div>
  </div>
);

const renderMenuBlock = () => (
  <div className="menu-main-page">
    <div className="menu-main-page-text">
      Дарина Лачихина
      <br />
      дизайнер
    </div>
  </div>
);

const renderTitleBlock = () => (
  <div className="title-main-page">
    <div className="title-text-wrapper">
      <div className="text-1">DIGITAL DESIGNER</div>
      <div className="text-2">/INSIGHT</div>
    </div>
    <div className="text-3">PORTFOLIO</div>
  </div>
);
