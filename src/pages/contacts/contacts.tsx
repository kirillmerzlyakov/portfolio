import cn from "./contacts.module.less";

export const Contacts = () => (
  <div className={cn["main-page"]}>
    <div className={cn["first-block-wrapper"]}>
      {renderMenuBlock()}
      {renderTitulBlock()}
    </div>
  </div>
);

const renderMenuBlock = () => (
  <div className={cn["menu"]}>
    <img
      className={cn["avatar"]}
      src={`./common/avatar.png`}
      alt="картинка"
      width="290"
    ></img>
  </div>
);

const renderTitulBlock = () => (
  <div className={cn["title"]}>
    <div className={cn["wrapper"]}>
      <img
        className={cn["contacts"]}
        src={`./common/contacts.jpg`}
        alt="картинка"
      ></img>
      <div className={cn["contact-block"]}>
        <div className={cn["contact-block1"]}>Напишите мне:</div>
        <div className={cn["contact-block2"]}>e. lachikhina2017@yandex.ru</div>
        <span>t. +7 932 123 9426</span>
      </div>
    </div>
  </div>
);
