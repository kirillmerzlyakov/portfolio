import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImg } from "./common";
import cn from "./projects.module.less";
import img1 from "./media/chicaga/1.jpg";
import img2 from "./media/chicaga/2.jpg";
import img3 from "./media/chicaga/3.jpg";
import img4 from "./media/chicaga/4.jpg";
import img5 from "./media/chicaga/5.jpg";
import img6 from "./media/chicaga/6.jpg";
import img7 from "./media/chicaga/7.jpg";
import img8 from "./media/chicaga/8.jpg";
import img9 from "./media/chicaga/9.jpg";
import img10 from "./media/chicaga/10.jpg";
import img11 from "./media/chicaga/11.jpg";
import img12 from "./media/chicaga/12.jpg";

export const Chicaga: React.FunctionComponent = () => (
  <div className={cn.projectsContent}>
    <Menu
      name={"CHICAGA"}
      city={"Санкт-Петербург"}
      year={"2020"}
      description={
        "Современная онлайн-платформа с большим выбором обучающих программ для изучения английского языка по Skype, Zoom и Webinar, а также в офлайн-школах Санкт-Петербурга."
      }
      sourceLink="https://chicaga.ru"
    />
    {renderImg(img1)}
    <div className={cn.textWrapper}>
      <div className={cn.textBlock}>
        В&nbsp;2020 году мне предложили заняться доработкой и&nbsp;редизайном
        сайта для сети школ английского языка Chicaga.
      </div>
      <div className={cn.textBlock}>
        Конечно, всегда интереснее работать над проектами без дизайна, которые
        нужно создавать с&nbsp;нуля. Но&nbsp;стилистика, заданная командой
        Chicaga показалась мне необычной и&nbsp;привлекательной, поэтому
        я&nbsp;с&nbsp;удовольствием согласилась.
      </div>
    </div>
    {[img2, img3, img4, img5].map((src) => renderImg(src))}
    <div className={cn.textWrapper}>
      <div className={cn.textBlock}>
        Сайт состоит из&nbsp;40&nbsp;веб-страниц. Для каждой отрисованы адптив
        и&nbsp;по&nbsp;несколько задизайненных экранов для всех состояний
        интерактивных блоков.
      </div>
      <div className={cn.textBlock}>
        На&nbsp;картинке изображены только мобильные версии сайта и&nbsp;часть
        библиотеки компонентов. Это один из&nbsp;самых больших проектов, которые
        я&nbsp;делала.
      </div>
    </div>
    {renderImg(img6)}
    <div className={cn.textWrapper}>
      <div className={cn.textBlockWide}>
        Еще кое-какие экраны, которые кажутся мне симпатичными:
      </div>
    </div>
    {[img7, img8, img9].map((src) => renderImg(src))}
    <div className={cn.textWrapper}>
      <div className={cn.textBlockWide}>
        Далее представлена часть UI-кита, с&nbsp;которой, я&nbsp;и&nbsp;начала
        работу. Выбрали и&nbsp;утвердили цветовую гамму, шрифы, проработали
        кнопки, инпуты и&nbsp;дропдауны.
      </div>
    </div>
    {[img10, img11, img12].map((src) => renderImg(src))}
  </div>
);
