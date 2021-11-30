import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImageBlock, renderVideoBlock } from "./common";
import cn from "./projects.module.less";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const FOLDER_NAME = "fibonacci";

export const Fibonacci: React.FunctionComponent = () => (
  <div className={cn["projects-content"]}>
    <Menu
      name={"Fibonacci"}
      city={"Москва"}
      year={"2021"}
      description={
        "Компания FIBONACCI GROUP с 2011 года занимается строительством жилых и общественных зданий по индивидуальному проекту. Портфолио насчитывает более 100 000 кв. м объектов недвижимости бизнес- и премиум-класса."
      }
      sourceLink={"http://a.elpycode.ru"}
    />
    {renderImageBlock(FOLDER_NAME, 1)}
    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block"]}>
        Fibonacci. Московская компания-бутик, которая создает жилое пространство
        фокусируясь на&nbsp;качестве объектов недвижимости, быстрых сроках
        их&nbsp;реализации.
      </div>
      <div className={cn["text-block"]}>
        Заказчик имел определенные предпочтения по&nbsp;цветовой палире,
        стилистике и&nbsp;шрифтам. Поэтому работа началась с&nbsp;составления
        брендбука и&nbsp;key-visual.
      </div>
    </div>
    {renderImageBlock(FOLDER_NAME, 2)}
    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block"]}>
        В&nbsp;течение работы над проектом, я&nbsp;разработала несколько
        концепций главной страницы. Ниже представлен финальный вариант, который
        был передан в&nbsp;верстку.
      </div>
      <div className={cn["text-block"]}>
        Мы&nbsp;утвердили концепцию, в&nbsp;которой основная страница
        не&nbsp;имеет акцентных блоков и&nbsp;ярких цветов, а&nbsp;для каждого
        ЖК&nbsp;Fibonacci Group был подобрана своя контрастная насыщенная
        палитра.
      </div>
    </div>
    {[3, 4, 5, 6].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block-wide"]}>
        Прототип-демонстрация работы блока внутренних страниц
        ЖК&nbsp;Fibonacci&nbsp;Group. Для&nbsp;каждого проекта обязательно
        прорабатываю взаимодействия и&nbsp;анимацию. Во-первых это помогает
        утвердить сайт с&nbsp;клиентом. Во-вторых упрощает жизнь разработчикам.
      </div>
    </div>
    {renderVideoBlock("Fibonacci", "https://player.vimeo.com/video/649489917")}

    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block"]}>
        Для внутренних страниц сайта&nbsp;&mdash; страниц жилищных комплексов
        был отрисован общий шаблон.
      </div>
      <div className={cn["text-block"]}>
        Hero block содержит в&nbsp;себе фото и&nbsp;видео комплекса,
        перелинковку на&nbsp;официальную страницу&nbsp;ЖК и&nbsp;основную
        инфорацию о&nbsp;проекте. Далее идет описание со&nbsp;слацдерами фото
        и&nbsp;интерактивная карта с&nbsp;местоположением комплекса.
      </div>
    </div>
    {[7, 8, 9, 10].map((i) => renderImageBlock(FOLDER_NAME, i))}
    <div className={cn["text-wrapper"]}>
      <div className={cn["text-block"]}>
        Гайдлайн помогает сориентироваться и&nbsp;помогает понять как
        и&nbsp;когда использовать разные версии логотипа. Вы&nbsp;можете
        полистать его ниже.
      </div>
      <div className={cn["text-block"]}>
        Для Fibonacci были придуманы несколько версий логотипа
        и&nbsp;полноценная айдентика: фирменный паттерн, графические элементы
        и&nbsp;иконки, стиль оформления социальных сетей, постеры
        и&nbsp;плакаты, уличная реклама, визитные карточки и&nbsp;конверты.
      </div>
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
