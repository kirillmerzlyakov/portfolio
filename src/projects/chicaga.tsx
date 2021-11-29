import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImageBlock, renderTextBlock } from "./common";
import cn from "./projects.module.less";

const TEXT_BLOCK = [
  "В 2020 году мне предложили заняться доработкой и редизайном сайта для сети школ английского языка Chicaga.",
  "Конечно, всегда интереснее работать над проектами без дизайна, которые нужно создавать с нуля. Но стилистика, заданная командой Chicaga показалась мне необычной и привлекательной, поэтому я с удовольствием согласилась.",
  "Сайт состоит из 40 веб-страниц. Для каждой отрисованы адптив и по несколько задизайненных экранов для всех состояний интерактивных блоков.",
  "На картинке изображены только мобильные версии сайта и часть библиотеки компонентов. Это один из самых больших проектов, которые я делала.",
  "Еще кое-какие экраны, которые кажутся мне симпатичными:",
  "Далее представлена часть UI-кита, с которой, я и начала работу. Выбрали и утвердили цветовую гамму, шрифы, проработали кнопки, инпуты и дропдауны.",
];
const FOLDER_NAME = "chicaga";

export const Chicaga: React.FunctionComponent = (props) => (
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
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[1])}
    </div>
    {[2, 3, 4, 5].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[2])}
      {renderTextBlock(TEXT_BLOCK[3])}
    </div>
    {renderImageBlock(FOLDER_NAME, 6)}
    <div className={cn["text-wrapper"]}>{renderTextBlock(TEXT_BLOCK[4])}</div>
    {[7, 8, 9].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>{renderTextBlock(TEXT_BLOCK[5])}</div>
    {[10, 11, 12].map((i) => renderImageBlock(FOLDER_NAME, i))}
  </div>
);
