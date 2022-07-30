import React from "react";
import styles from './Help.module.css'
import mailPng from'../../assets/icons/mail-black.png'
import telegramPng from '../../assets/icons/telegram-black.png'

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
          <a href="mailto:Guuworking@proton.me">
          <span>Guuworking@proton.me</span>
          </a>
        </div>

        <div className={styles.contact}>
          <img width={18} src={telegramPng} alt="telegramPng" />
          <a href="tel:+79897904681">
          <span className={styles.spanNumber}>+79897904681</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;