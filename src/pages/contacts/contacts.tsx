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
        <a className={cn["phone"]} href="tel:79321239426">
          t. +7 932 123 9426
        </a>
      </div>
    </div>
  </div>
);
