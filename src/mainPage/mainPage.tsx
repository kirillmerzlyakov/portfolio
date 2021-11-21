import React from "react";
import "./mainPage.css";
import { ContentItem } from "./contentItem";

export const MainPage: React.FunctionComponent = (props) => (
  <div className="main-page">
    <div className="first-main-page">
      {renderMenuBlock()}
      {renderTitleBlock()}
    </div>
    <div className="items-wrapper">
      <ContentItem
        name="Скиньскан.рф"
        imgName=""
        route="/skinscan"
        sourceLink="https://скиньскан.рф"
      />
      <ContentItem name="BRICS" imgName="" route="/brics" sourceLink="" />
      <ContentItem name="asd" imgName="" route="/" sourceLink="" />
      <ContentItem name="asd" imgName="" route="/" sourceLink="" />
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
      <span className="text-1">
        DIGITAL
        <br />
        DESIGNER
      </span>
      <span className="text-2">/INSIGHT</span>
    </div>
    <span className="text-3">PORTFOLIO</span>
  </div>
);
