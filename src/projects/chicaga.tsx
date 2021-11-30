import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImageBlock } from "./common";
import cn from "./projects.module.less";

const FOLDER_NAME = "chicaga";

export const Chicaga: React.FunctionComponent = () => (
  <div className={cn["projects-content"]}>
    <Menu
      name={"CHICAGA"}
      city={"Санкт-Петербург"}
      year={"2020"}
      description={
        "Современная онлайн-платформа с большим выбором обучающих программ для изучения английского языка по Skype, Zoom и Webinar, а также в офлайн-школах Санкт-Петербурга."
      }
      sourceLink="https://chicaga.ru"
    />
    {renderImageBlock(FOLDER_NAME, 1)}
    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block"]}>
        В&nbsp;2020 году мне предложили заняться доработкой и&nbsp;редизайном
        сайта для сети школ английского языка Chicaga.
      </div>
      <div className={cn["text-block"]}>
        Конечно, всегда интереснее работать над проектами без дизайна, которые
        нужно создавать с&nbsp;нуля. Но&nbsp;стилистика, заданная командой
        Chicaga показалась мне необычной и&nbsp;привлекательной, поэтому
        я&nbsp;с&nbsp;удовольствием согласилась.
      </div>
    </div>
    {[2, 3, 4, 5].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block"]}>
        Сайт состоит из&nbsp;40&nbsp;веб-страниц. Для каждой отрисованы адптив
        и&nbsp;по&nbsp;несколько задизайненных экранов для всех состояний
        интерактивных блоков.
      </div>
      <div className={cn["text-block"]}>
        На&nbsp;картинке изображены только мобильные версии сайта и&nbsp;часть
        библиотеки компонентов. Это один из&nbsp;самых больших проектов, которые
        я&nbsp;делала.
      </div>
    </div>
    {renderImageBlock(FOLDER_NAME, 6)}
    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block-wide"]}>
        Еще кое-какие экраны, которые кажутся мне симпатичными:
      </div>
    </div>
    {[7, 8, 9].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block-wide"]}>
        Далее представлена часть UI-кита, с&nbsp;которой, я&nbsp;и&nbsp;начала
        работу. Выбрали и&nbsp;утвердили цветовую гамму, шрифы, проработали
        кнопки, инпуты и&nbsp;дропдауны.
      </div>
    </div>
    {[10, 11, 12].map((i) => renderImageBlock(FOLDER_NAME, i))}
  </div>
);
