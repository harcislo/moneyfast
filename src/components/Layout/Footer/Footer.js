import React from "react";
import styles from "./Footer.module.css";

import telegramIcon from "../../../assets/icons/telegram.png";
import emailIcon from "../../../assets/icons/mail.png";

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
          <span className={styles.contactText}>Guuworking@proton.me</span>
        </div>
        <div>
          <img src={telegramIcon} alt="telegram" />
          <span className={styles.contactText}>+79897904681</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
