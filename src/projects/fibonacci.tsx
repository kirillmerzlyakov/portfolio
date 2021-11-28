import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImageBlock, renderTextBlock, renderVideoBlock } from "./common";
import cn from "./projects.module.less";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const TEXT_BLOCK = [
  "Fibonacci. Московская компания-бутик, которая создает жилое пространство фокусируясь на качестве объектов недвижимости, быстрых сроках их реализации",
  "Заказчик имел определенные предпочтения по цветовой палире, стилистике и шрифтам. Поэтому работа началась с составления брендбука и key-visual.",
  "В течение работы над проектом, я разработала  несколько концепций главной страницы. Ниже представлен финальный вариант, который был передан в верстку.",
  "Мы утвердили концепцию, в которой основная страница не имеет акцентных блоков и ярких цветов, а для каждого ЖК Fibonacci Group был подобрана своя контрастная насыщенная палитра.",
  "Прототип-демонстрация работы блока внутренних страниц ЖК Fibonacci Group.",
  "Для каждого проекта обязательно прорабатываю взаимодействия и анимацию. Во-первых это помогает утвердить сайт с клиентом. Во-вторых упрощает жизнь разработчикам.",
  "Для внутренних страниц сайта – страниц жилищных комплексов был отрисован общий шаблон.",
  "Hero block содержит в себе фото и видео комплекса, перелинковку на официальную страницу ЖК и основную инфорацию о проекте. Далее идет описание со слацдерами фото и интерактивная карта с местоположением комплекса.",
  "Гайдлайн помогает сориентироваться и помогает понять как и когда использовать разные версии логотипа. Вы можете полистать его ниже.",
  "Для Fibonacci были придуманы несколько версий логотипа и полноценная айдентика: фирменный паттерн, графические элементы и иконки, стиль оформления социальных сетей, постеры и плакаты, уличная реклама, визитные карточки и конверты.",
];
const FOLDER_NAME = "fibonacci";

export const Fibonacci: React.FunctionComponent = (props) => (
  <div className={cn["projects-content"]}>
    <Menu
      name={"Fibonacci"}
      city={"Москва"}
      year={"2021"}
      description={
        "Компания FIBONACCI GROUP с 2011 года занимается строительством жилых и общественных зданий по индивидуальному проекту. Портфолио насчитывает более 100 000 кв. м объектов недвижимости бизнес- и премиум-класса."
      }
    />
    {renderImageBlock(FOLDER_NAME, 1)}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[0])}
      {renderTextBlock(TEXT_BLOCK[1])}
    </div>
    {renderImageBlock(FOLDER_NAME, 2)}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[2])}
      {renderTextBlock(TEXT_BLOCK[3])}
    </div>
    {[3, 4, 5, 6].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[4])}
      {renderTextBlock(TEXT_BLOCK[5])}
    </div>
    {renderVideoBlock("Fibonacci", "https://player.vimeo.com/video/649489917")}

    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[6])}
      {renderTextBlock(TEXT_BLOCK[7])}
    </div>
    {[7, 8, 9, 10].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      {renderTextBlock(TEXT_BLOCK[8])}
      {renderTextBlock(TEXT_BLOCK[9])}
    </div>
    <Slideshow />
  </div>
);

const Slideshow = () => {
  return (
    <div className={cn["slide-container"]}>
      <Slide>
        {[11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((v, index) => (
          <div className={cn["each-slide"]} key={index}>
            {renderImageBlock(FOLDER_NAME, v)}
          </div>
        ))}
      </Slide>
    </div>
  );
};
