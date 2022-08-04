import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

import burgerIcon from "../../../assets/icons/burger.png";
import closeIcon from "../../../assets/icons/close.png";
import { useDispatch, useSelector } from "react-redux";
import { removeToken } from "../../../store/userSlice";
import { setInitialState } from "../../../store/applicationSlice";

import telegramIcon from "../../../assets/icons/telegramIcon.png";

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Link onClick={() => dispatch(setInitialState())} to={"/"} className={styles.logo}>moneyfast</Link>

        <div style={{ top: burgerActive ? 0 : "-100%" }} className={styles.nav}>
          <div className={styles.navLinks}>
            <NavLink
              onClick={() => setBurgerActive(false)}
              to="/qa"
              className={styles.link}
              style={({ isActive }) => {
                if (isActive && burgerActive) {
                  return {
                    fontWeight: 700,
                    color: "#ffffff"
                  };
                } else if (isActive && !burgerActive) {
                  return { fontWeight: 500 };
                }
              }}
            >
              Вопросы и ответы
            </NavLink>
            <NavLink
              onClick={() => setBurgerActive(false)}
              to="/help"
              className={styles.link}
              style={({ isActive }) => {
                if (isActive && burgerActive) {
                  return {
                    fontWeight: 700,
                    color: "#ffffff"
                  };
                } else if (isActive && !burgerActive) {
                  return { fontWeight: 500 };
                }
              }}
            >
              Помощь
            </NavLink>
            <NavLink
              onClick={() => setBurgerActive(false)}
              to="/reviews"
              className={styles.link}
              style={({ isActive }) => {
                if (isActive && burgerActive) {
                  return {
                    fontWeight: 700,
                    color: "#ffffff"
                  };
                } else if (isActive && !burgerActive) {
                  return { fontWeight: 500 };
                }
              }}
            >
              Отзывы
            </NavLink>
            {(token || localStorage.getItem("token")) &&
              <NavLink
                onClick={() => setBurgerActive(false)}
                to="/admin"
                className={styles.link}
                style={({ isActive }) => {
                  if (isActive && burgerActive) {
                    return {
                      fontWeight: 700,
                      color: "#ffffff"
                    };
                  } else if (isActive && !burgerActive) {
                    return { fontWeight: 500 };
                  }
                }}
              >
                Админ
              </NavLink>
            }

            {(token || localStorage.getItem("token")) &&
              <NavLink

                onClick={() => {
                  setBurgerActive(false);
                  localStorage.removeItem("token");
                  dispatch(removeToken());
                }}
                to="/"
                className={styles.link + " " + styles.logout}
                style={({ isActive }) => {
                  if (isActive && burgerActive) {
                    return {
                      fontWeight: 700,
                      color: "#ffffff"
                    };
                  } else if (isActive && !burgerActive) {
                    return { fontWeight: 500 };
                  }
                }}
              >
                Выйти
              </NavLink>

            }

            {
              !burgerActive ? <a target="_blank" style={{
                  position: "absolute",
                  right: 10
                }} href={'https://t.me/money_support_fast'}>
                  <img width={32} src={telegramIcon} alt="telegramIcon" />
                </a> :
                <a target="_blank" href={'https://t.me/money_support_fast'}><img width={32} src={telegramIcon} alt="telegramIcon" /></a>
            }


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
