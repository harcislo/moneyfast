import React from "react";
import styles from "./Step.module.css";
import cryptoIcon from "../../../assets/icons/bitcoin.png";
import bankIcon from "../../../assets/icons/bank.png";

const Step4 = ({ nextStep }) => {
  return (
    <div
      style={{
        alignItems: "start",
      }}
      className={styles.wrapper + " " + styles.step4Wrapper}
    >
      <span className={styles.h1Text}>Заявка #182882 принята в обработку</span>

      <div
        style={{
          marginTop: 24,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={cryptoIcon} alt="cryptoIcon" />
            <span
              style={{
                marginLeft: 8,
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              {" "}
              0.00204188 btc
            </span>
          </div>

          <span
            style={{
              margin: "0 12px",
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            {" "}
            на{" "}
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={bankIcon} alt="bankIcon" />
            <span
              style={{
                marginLeft: 8,
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              {" "}
              2500 rub
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          margin: "34px 0",
          maxWidth: 730,
        }}
      >
        <span
          style={{
            display: "block",
            marginTop: 24,
            fontWeight: 400,
            fontSize: 16,
            color: "#0F1221",
          }}
        >
          После поступления Ваших денег на наш счёт, она будет обработана и
          средства будут перечислены на указанный вами кошелёк или счёт.
        </span>
        <span
          style={{
            display: "block",
            marginTop: 24,
            fontWeight: 400,
            fontSize: 16,
            color: "#0F1221",
          }}
        >
          По всем вопросам или в случае задержки обмена, обращайтесь в
          техническую поддержку.
        </span>
        <span
          style={{
            display: "block",
            marginTop: 24,
            fontWeight: 400,
            fontSize: 16,
            color: "#0F1221",
          }}
        >
          С Уважением, администрация сайта.
        </span>
      </div>

      <div className={styles.btn}>
        <button onClick={() => nextStep(1)}>Отменить заявку</button>
      </div>
    </div>
  );
};

export default Step4;
