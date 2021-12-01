import React from "react";
import s from "./header.module.less";
import { Link, useLocation } from "react-router-dom";

export const Header: React.FC = (props) => {
  const { pathname } = useLocation();
  return (
    <div className={s.header}>
      <div className={s.navigation}>
        {pathname !== "/" && renderBackArrow()}
      </div>
      <div className={s.name}>
        <Link className={s.nameLink} to="/">
          Дарина Лачихина
        </Link>
      </div>
      <div className={s.buttons}>
        <div
          className={s.button}
          onClick={() => {
            if (pathname === "/") {
              scrollTo(700);
            } else {
              window.location.pathname = "/";
            }
          }}
        >
          Портфолио
        </div>
        <div className={s.button}>
          <Link className={s.button} to="/contacts">
            Контакты
          </Link>
        </div>
      </div>
    </div>
  );
};

const renderBackArrow = () => (
  <Link className={s.navigateLink} to="/">
    <div className={s.arrowSvg}></div>
    <span className={s.backText}>Назад</span>
  </Link>
);

function scrollTo(y: number) {
  window.scrollTo({ top: y });
}
