import "./contacts.css";

export const Contacts = () => (
  <div className="contacts">
    <div className="contact-page">
      <img
        className="avatar"
        src={`./avatar.png`}
        alt="картинка"
        width="290"
      ></img>
    </div>
    {renderTitleBlock()}
  </div>
);

const renderTitleBlock = () => (
  <div className="contact-title">
    <div className="contact-title-text-wrapper">
      <span className="contact-text-1">
        DO YOU WANT
        <br />
        TO ORDER
        <span className="contact-text-2">
          A DESIGN
          <span className="contact-text-3">?</span>
        </span>
      </span>
    </div>
    <div className="contact-block">
      <div className="contact-block1">Напишите мне:</div>
      <div className="contact-block2">e. lachikhina2017@yandex.ru</div>
      <span>t. +7 932 123 9426</span>
    </div>
  </div>
);
