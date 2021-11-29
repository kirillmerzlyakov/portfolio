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
      <ContentItem name="Скиньскан.рф" imgName="skinscan" route="/skinscan" />
      <ContentItem name="BRICS" imgName="brics" route="/brics" />
      <ContentItem name="CHICAGA" imgName="chicaga" route="/chicaga" />
      <ContentItem name="BeatsApp" imgName="beatsApp" route="/beatsapp" />
      <ContentItem name="Fibonacci" imgName="fibonacci" route="/fibonacci" />
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
      className={cn["image"]}
      src={`./common/titul.jpg`}
      alt="картинка"
    ></img>
  </div>
);
