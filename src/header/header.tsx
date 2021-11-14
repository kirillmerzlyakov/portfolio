import React from "react";
import "./header.css";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="navigation">
          <div className="arrowSvg"></div>
          Назад
        </div>
        <div className="header-main">Дарина Лачихина</div>
        <div className="header-buttons">
          <div className="header-button">Портфолио</div>
          <div className="header-button">Обо&nbsp;мне</div>
          <div className="header-button">Контакты</div>
        </div>
      </div>
    );
  }
}
