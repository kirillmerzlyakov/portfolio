import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export const Header: React.FC = (props) => (
  <div className="header">
    <div className="navigation">{renderBackArrow()}</div>
    <div className="header-main">Дарина Лачихина</div>
    <div className="header-buttons">
      <Link className="header-button" to="/">
        Портфолио
      </Link>
      <div className="header-button">Обо&nbsp;мне</div>
      <div className="header-button">Контакты</div>
    </div>
  </div>
);

const renderBackArrow = () => (
  <Link className="navigate-link" to="/">
    <div className="arrowSvg"></div>
    Назад
  </Link>
);
