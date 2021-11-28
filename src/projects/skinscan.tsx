import React from "react";
import { Menu } from "../components/menu/menu";
import { renderImageBlock, renderTextBlock, renderVideoBlock } from "./common";
import cn from "./projects.module.less";

const VIDEO_SOURCES: { [key: string]: string } = {
  "Act-Contract-0": "https://player.vimeo.com/video/643858135",
  "Act-Contract-1":
    "https://player.vimeo.com/video/645741904?h=4571ce8281&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
  "Act-Contract-2":
    "https://player.vimeo.com/video/645741574?h=f4882dc24c&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
};

const TEXT_BLOCK = [
  "В январе 2021 я получила запрос на редизайн готового продукта Act-Contract (старое название). Интерфейс сервиса устарел, не выполнял все задачи клиента, фирменный стиль хотелось освежить. ",
  "Вместе с заказчиком мы провели полный ребрендинг и сменили название. Я выбрала новые фирменные цвета и шрифты, отрисовала логотип и иллюстрации. ",
  "Основной задачей было сделать новый дизайн сервиса удобным и интуитивно понятным с минимальным пользовательским путем. Кроме того, мы хотели внедрить в него новые функции, не меняя старые прототипы глобально. ",
  "Вот, что получилось. Панель управления элементами справа. Слева - навигация по документу и панель добавления элементов, с возможностью подгружать новые и использовать ранее загруженные. ",
  "Мы спроектировали интерфейс оплаты и оформления подписки на сервис с интерактивной картой, в которую нужно ввести данные. Такое решение нативно и удобно.",
  "Далее нами с клиентом было принято решение по разработке продающего лендинга. Продукт завоевал достаточно крупную аудиторию на российском рынке, теперь мы были готовы выйти на международный. ",
  "Для каждого проекта обязательно прорабатываю взаимодействия и анимацию — это неотъемлемая часть хорошего пользовательского опыта.",
];

const FOLDER_NAME = "skinscan";

export const SkinScan: React.FunctionComponent = (props) => {
  asd();
  return (
    <div className={cn["projects-content"]}>
      <Menu
        name={"Скиньскан.рф"}
        city={"Екатеринбург"}
        year={"2021"}
        description={
          "блабалбалбалбалбалаблабла блаблб албафыолврф олырвлдфорывлфоыролдфы рвфолыврфолдвр"
        }
      />
      {renderVideoBlock("Act-Contract-0", VIDEO_SOURCES["Act-Contract-0"])}
      <div className={cn["text-wrapper"]}>
        {renderTextBlock(TEXT_BLOCK[0])}
        {renderTextBlock(TEXT_BLOCK[1])}
      </div>
      {[11, 12].map((a) => renderImageBlock(FOLDER_NAME, a))}
      <div className={cn["text-wrapper"]}>
        {renderTextBlock(TEXT_BLOCK[2])}
        {renderTextBlock(TEXT_BLOCK[3])}
      </div>
      {[8, 9].map((a) => renderImageBlock(FOLDER_NAME, a))}
      <div className={cn["text-wrapper"]}>{renderTextBlock(TEXT_BLOCK[4])}</div>
      {renderImageBlock(FOLDER_NAME, 10)}
      <div className={cn["text-wrapper"]}>{renderTextBlock(TEXT_BLOCK[5])}</div>
      {[2, 3, 4, 5, 6, 7].map((a) => renderImageBlock(FOLDER_NAME, a))}
      <div className={cn["text-wrapper"]}>{renderTextBlock(TEXT_BLOCK[6])}</div>
      {renderVideoBlock("Act-Contract-1", VIDEO_SOURCES["Act-Contract-1"])}
      {renderVideoBlock("Act-Contract-2", VIDEO_SOURCES["Act-Contract-2"])}
    </div>
  );
};

function asd() {
  const element = document.querySelector(".image");
  console.log(element);
}
