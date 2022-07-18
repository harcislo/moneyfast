import React, { useState } from "react";
import styles from "./Step.module.css";

import cryptoIcon from "../../../assets/icons/bitcoin.png";
import bankIcon from "../../../assets/icons/bank.png";
import qrCodeImg from "../../../assets/icons/qr-code.png";

import { Input } from "antd";

const Step3 = ({ nextStep }) => {
  const [purse, setPurse] = useState("1MAUuLrH162bLX2y9t9LAZc6fNoz2sypWV");
  const [sum, setSum] = useState("0.00204188 btc");

  return (
    <div
      style={{
        alignItems: "start",
        paddingBottom: 32,
      }}
      className={styles.wrapper}
    >
      <span
        style={{
          fontWeight: 500,
          fontSize: 20,
          color: "#B7B7B7",
        }}
      >
        Заявка 182882
      </span>

      <span
        style={{
          marginTop: 8,
          maxWidth: 630,
          textAlign: "left",
        }}
        className={styles.h1Text}
      >
        Для завершения обмена совершите следующие действия
      </span>

      <div
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            marginLeft: 8,
            fontWeight: 400,
            fontSize: 16,
          }}
        >
          Вы меняете:{" "}
        </span>

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
              marginLeft: 16,
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
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "#0F1221",
            marginRight: 80,
            marginTop: 20,
          }}
        >
          1. Осуществить перевод по реквизитам
        </span>
        <span
          style={{
            fontSize: 20,
            fontWeight: 500,
            color: "#0F1221",
            maxWidth: 470,
            marginTop: 20,
          }}
        >
          2. Данная операция производится вручную. Пожалуйста, убедитесь, что Вы
          нажали на кнопку «Я оплатил» и перевели средства.
        </span>
      </div>

      <div className={styles.step3Fields}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 16,
              marginBottom: 8,
              fontWeight: 500,
              color: "#0F1221",
            }}
          >
            Кошелёк:
          </span>
          <Input
            className={styles.inputSmallText}
            defaultValue={purse}
            value={purse}
            // onChange={(e) => setPurse(e.target.value)}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 16,
              marginBottom: 8,
              fontWeight: 500,
              color: "#0F1221",
            }}
          >
            QR-код:
          </span>
          <img src={qrCodeImg} alt="qr" />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: 24,
          }}
        >
          <span
            style={{
              fontSize: 16,
              marginBottom: 8,
              fontWeight: 500,
              color: "#0F1221",
            }}
          >
            Сумма:
          </span>
          <Input
            className={styles.inputSmallText}
            style={{
              fontSize: 16,
            }}
            defaultValue={sum}
            value={sum}
            // onChange={(e) => setSum(e.target.value)}
          />
        </div>

        <div
          style={{
            width: "100%",
          }}
          className={styles.btn}
        >
          <button
            style={{
              width: "100%",
            }}
            onClick={() => nextStep(4)}
          >
            Я оплатил
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
