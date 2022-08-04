import React from "react";
import styles from './Help.module.css'
import mailPng from'../../assets/icons/mail-black.png'
import telegramPng from '../../assets/icons/telegram-black.png'
import telegramIcon from "../../assets/icons/telegramIcon.png";

const Help = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.text1}>
        <span>Нужна помощь? Напишите нам!</span>
      </div>
      <div className={styles.text2}>
        <span>Ответим в течение нескольких минут...</span>
      </div>

      <div style={{
        marginTop: 16
      }}>
        <div className={styles.contact}>
          <img width={18} src={mailPng} alt="mailPng" />
          <a href="mailto:support_moneyfast@proton.me">
          <span>support_moneyfast@proton.me</span>
          </a>
        </div>

        <div style={{
            display: 'flex',
            justifyContent: "center",
            marginTop: 8
        }} className={styles.contact}>
          {/*<img width={18} src={telegramPng} alt="telegramPng" />*/}
            <a target="_blank" href="https://t.me/money_support_fast">
                <img width={32} src={telegramIcon} alt="telegram" />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Help;