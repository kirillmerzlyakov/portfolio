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
  <div className={cn["contact-title"]}>
    <div className={cn["contact-title-text-wrapper"]}>
      <span className="contact-text-1">
        DO YOU WANT
        <br />
        TO ORDER
        <span className={cn["contact-text-2"]}>
          A DESIGN
          <span className={cn["contact-text-3"]}>?</span>
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
