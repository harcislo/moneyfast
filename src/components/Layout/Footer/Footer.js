import React from "react";
import styles from "./Footer.module.css";

// import telegramIcon from "../../../assets/icons/telegram.png";
import emailIcon from "../../../assets/icons/mail.png";
import telegramIcon from "../../../assets/icons/telegramIcon.png";


const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.footerBlock}>
        <span className={styles.logo}>moneyfast</span>
        <span className={styles.copyright}>
          ©2022 Сервис обмена криптовалют
        </span>
      </div>

      <div className={styles.footerBlock}>
        <div>
          <img src={emailIcon} alt="email" />
          <a href="mailto:Guuworking@proton.me">
            <span className={styles.contactText}>Guuworking@proton.me</span>
          </a>
        </div>
        <div style={{
          // display: "flex",
          // justifyContent: "flex-end",
          // // width: '100%'
          position: "absolute",
          right: 0,
        }}>
          <a target="_blank" href="https://t.me/money_support_fast">
            <img width={32} src={telegramIcon} alt="telegram" />
          </a>
          {/*<a href="tel:+79897904681">*/}
          {/*  <span className={styles.contactText}>+79897904681</span>*/}
          {/*</a>*/}
        </div>
      </div>
    </div>
  );
};

export default Footer;
