import React from "react";
import cn from "./mainPage.module.less";
import { ContentItem } from "./contentItem";

export const MainPage: React.FunctionComponent = (props) => (
  <div className={cn["main-page"]}>
    <div className={cn["first-block-wrapper"]}>
      {renderMenuBlock()}
      {renderTitulBlock()}
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
  <div className={cn["menu"]}>
    <div className={cn["menu-text"]}>
      Дарина Лачихина
      <br />
      дизайнер
    </div>
  </div>
);

const renderTitulBlock = () => (
  <div className={cn["title"]}>
    <img
      className={cn["titul"]}
      src={`./common/titul.jpg`}
      alt="картинка"
    ></img>
  </div>
);
