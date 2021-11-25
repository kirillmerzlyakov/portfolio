import React from "react";
import cn from "./header.module.less";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = (props) => {
  const { pathname } = useLocation();
  return (
    <div className={cn["header"]}>
      <div className={cn["navigation"]}>
        {pathname !== "/" && renderBackArrow()}
      </div>
      <div className={cn["main"]}>Дарина Лачихина</div>
      <div className={cn["buttons"]}>
        <Link className={cn["button"]} to="/">
          Портфолио
        </Link>
        <div className={cn["button"]}>Обо&nbsp;мне</div>
        <div className={cn["button"]}>
          <Link className={cn["button"]} to="/contacts">
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
};

const renderBackArrow = () => (
  <Link className={cn["navigate-link"]} to="/">
    <div className={cn["arrowSvg"]}></div>
    Назад
  </Link>
);
