import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="navigation">
          <Link className="navigate-link" to="/">
            <div className="arrowSvg"></div>
            Назад
          </Link>
        </div>
        <div className="header-main">Дарина Лачихина</div>
        <div className="header-buttons">
          <Link className="header-button" to="/skinscan">
            Портфолио
          </Link>
          <div className="header-button">Обо&nbsp;мне</div>
          <div className="header-button">Контакты</div>
        </div>
      </div>
    );
  }
}
