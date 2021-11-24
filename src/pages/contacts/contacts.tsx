import cn from "./contacts.module.less";

export const Contacts = () => (
  <div className={cn["contacts"]}>
    <div className={cn["contact-page"]}>
      <img
        className={cn["avatar"]}
        src={`./avatar.png`}
        alt="картинка"
        width="290"
      ></img>
    </div>
    {renderTitleBlock()}
  </div>
);

const renderTitleBlock = () => (
  <div className={cn["title"]}>
    <div className={cn["text-wrapper"]}>
      <span className={cn["text-1"]}>
        DO YOU WANT
        <br />
        TO ORDER
        <span className={cn["text-2"]}>
          A DESIGN
          <span className={cn["text-3"]}>?</span>
        </span>
      </span>
    </div>
    <div className={cn["contact-block"]}>
      <div className={cn["contact-block1"]}>Напишите мне:</div>
      <div className={cn["contact-block2"]}>e. lachikhina2017@yandex.ru</div>
      <span>t. +7 932 123 9426</span>
    </div>
  </div>
);
