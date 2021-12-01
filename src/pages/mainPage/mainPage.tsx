import React from "react";
import cn from "./mainPage.module.less";
import { ContentItem } from "./contentItem";
import titul from "../media/titul.jpg";
import skinscanImg from "../media/tiles/skinscan.jpg";
import skinscanGif from "../media/tiles/skinscan.gif";
import bricsImg from "../media/tiles/brics.jpg";
import bricsGif from "../media/tiles/brics.gif";
import beatsAppImg from "../media/tiles/beatsApp.jpg";
import beatsAppGif from "../media/tiles/beatsApp.gif";
import fibonacciImg from "../media/tiles/fibonacci.jpg";
import fibonacciGif from "../media/tiles/fibonacci.gif";

export const MainPage: React.FunctionComponent = (props) => (
  <div className={cn.mainPage}>
    <div className={cn.firstBlockWrapper}>
      {renderMenuBlock()}
      <div className={cn.title}>
        <img className={cn.image} src={titul} alt="картинка"></img>
      </div>
    </div>
    <div className={cn.itemsWrapper}>
      <ContentItem
        name="Скиньскан.рф"
        imgSrc={skinscanImg}
        gifSrc={skinscanGif}
        route="/skinscan"
      />
      <ContentItem
        name="BRICS"
        imgSrc={bricsImg}
        gifSrc={bricsGif}
        route="/brics"
      />
      {/* <ContentItem name="CHICAGA" imgName="chicaga" route="/chicaga" /> */}
      <ContentItem
        name="BeatsApp"
        imgSrc={beatsAppImg}
        gifSrc={beatsAppGif}
        route="/beatsapp"
      />
      <ContentItem
        name="Fibonacci"
        imgSrc={fibonacciImg}
        gifSrc={fibonacciGif}
        route="/fibonacci"
      />
    </div>
  </div>
);

const renderMenuBlock = () => (
  <div className={cn.menu}>
    <div className={cn.menuText}>
      Дарина Лачихина
      <br />
      дизайнер
    </div>
  </div>
);
