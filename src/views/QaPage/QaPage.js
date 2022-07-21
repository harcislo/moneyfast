import React from "react";
import styles from "./QaPage.module.css";
import { Collapse } from "antd";
import questionImg from '../../assets/icons/Questions.png'
import { questionsArray } from "../../data";
const { Panel } = Collapse;

const QaPage = () => {
  return (<div className={styles.wrapper}>
      <div className={styles.questions}>
        <span className={styles.h1Text}>Часто задаваемые вопросы</span>
        <Collapse className={styles.collapse}>
          {questionsArray.map((el, i) => <Panel key={i} header={el.question}>{el.answer}</Panel>)}
        </Collapse>
      </div>
      <div className={styles.help}>
        <span className={styles.h1Text}>Не нашли ответ?</span>
        <span className={styles.smText}>Напишите нам на E-mail и мы в ближайшее время ответим
              на все ваши вопросы</span>
        <img style={{
          maxWidth: '100%',
          height: 'auto'
        }} src={questionImg} alt="questionImg" />
        <div className={styles.qaEmail}>
          <span className={styles.smText}>Задайте ваш вопрос на E-mail:</span>
          <a style={{
            color: '#295BF4',
            fontWeight: 500,
            marginTop: 0
          }} className={styles.smText} href='mailto:
          '>Guuworking@proton.me</a>
        </div>

        <span className={styles.smText}>Либо можете обратиться в online-поддержку, которая находится справа внизу</span>
      </div>
    </div>);
};

export default QaPage;