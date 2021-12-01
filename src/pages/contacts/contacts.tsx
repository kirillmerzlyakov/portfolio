import cn from "./contacts.module.less";
import avatar from "../media/avatar.png";
import contacts from "../media/contacts.jpg";

export const Contacts = () => (
  <div className={cn.mainPage}>
    <div className={cn.firstBlockWrapper}>
      <div className={cn.menu}>
        <img className={cn.avatar} src={avatar} alt="картинка"></img>
      </div>
      {renderTitulBlock()}
    </div>
  </div>
);

const renderTitulBlock = () => (
  <div className={cn.title}>
    <div className={cn.wrapper}>
      <img className={cn.contacts} src={contacts} alt="картинка"></img>
      <div className={cn.contactBlock}>
        <div className={cn.contactBlock1}>Напишите мне:</div>
        <div className={cn.contactBlock2}>e. lachikhina2017@yandex.ru</div>
        <a className={cn.phone} href="tel:79321239426">
          t. +7 932 123 9426
        </a>
      </div>
    </div>
  </div>
);
