import React, { useState } from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

import burgerIcon from "../../../assets/icons/burger.png";
import closeIcon from "../../../assets/icons/close.png";

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.logo}>moneyfast</span>
        <div style={{ top: burgerActive ? 0 : "-100%" }} className={styles.nav}>
          <div className={styles.navLinks}>
            <NavLink
              to="qa"
              className={styles.link}
              style={({ isActive }) => {
                if (isActive && burgerActive) {
                  return {
                    fontWeight: 700,
                    color: "#ffffff",
                  };
                } else if (isActive && !burgerActive) {
                  return { fontWeight: 500 };
                }
              }}
            >
              Вопросы и ответы
            </NavLink>
            <NavLink
              to="help"
              className={styles.link}
              style={({ isActive }) => {
                if (isActive && burgerActive) {
                  return {
                    fontWeight: 700,
                    color: "#ffffff",
                  };
                } else if (isActive && !burgerActive) {
                  return { fontWeight: 500 };
                }
              }}
            >
              Помощь
            </NavLink>
            <NavLink
              to="reviews"
              className={styles.link}
              style={({ isActive }) => {
                if (isActive && burgerActive) {
                  return {
                    fontWeight: 700,
                    color: "#ffffff",
                  };
                } else if (isActive && !burgerActive) {
                  return { fontWeight: 500 };
                }
              }}
            >
              Отзывы
            </NavLink>
          </div>
        </div>
        <div className={styles.burger}>
          <img
            onClick={() => setBurgerActive((prevState) => !prevState)}
            src={burgerActive ? closeIcon : burgerIcon}
            alt="burger"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
