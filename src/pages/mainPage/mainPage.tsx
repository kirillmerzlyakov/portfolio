import React from "react";
import cn from "./mainPage.module.less";
import { ContentItem } from "./contentItem";

export const MainPage: React.FunctionComponent = (props) => (
  <div className={cn["main-page"]}>
    <div className={cn["first-main-page"]}>
      {renderMenuBlock()}
      {renderTitleBlock()}
    </div>
    <div className={cn["items-wrapper"]}>
      <ContentItem
        name="Скиньскан.рф"
        imgName=""
        route="/skinscan"
        sourceLink="https://скиньскан.рф"
      />
      <ContentItem
        name="BRICS"
        imgName=""
        route="/brics"
        sourceLink="https://bricscompetition.org/"
      />
      <ContentItem
        name="CHICAGA"
        imgName=""
        route="/chicaga"
        sourceLink="https://chicaga.ru"
      />
      <ContentItem name="BeatsApp" imgName="" route="/beatsapp" />
      <ContentItem name="Fibonacci" imgName="" route="/fibonacci" />
    </div>
  </div>
);

const renderMenuBlock = () => (
  <div className={cn["menu-main-page"]}>
    <div className={cn["menu-main-page-text"]}>
      Дарина Лачихина
      <br />
      дизайнер
    </div>
  </div>
);

const renderTitleBlock = () => (
  <div className={cn["title-main-page"]}>
    <div className={cn["title-text-wrapper"]}>
      <span className={cn["text-1"]}>
        DIGITAL
        <br />
        DESIGNER
      </span>
      <span className={cn["text-2"]}>/INSIGHT</span>
    </div>
    <span className={cn["text-3"]}>PORTFOLIO</span>
  </div>
);
