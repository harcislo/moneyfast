import React, { useEffect, useState } from "react";
import styles from "./Step.module.css";
import { Input } from "antd";

const Step2 = ({ nextStep }) => {
  const [email, setEmail] = useState("");
  const [fio, setFio] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    setIsDisabled(
      (email.length === 0 || fio.length === 0 || phoneNumber.length === 0) &&
        true
    );
  }, [email, fio, phoneNumber]);

  return (
    <div
      style={{
        padding: "0 32px 0 32px",
      }}
      className={styles.wrapper}
    >
      <div className={styles.fields}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={styles.changeColumn}
        >
          <span className={styles.h1Text}>
            Введите данные для завершения обмена
          </span>
          <Input
            className={styles.input}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              marginTop: 36,
            }}
            placeholder="Введите email"
          />
          <Input
            className={styles.input}
            onChange={(e) => setFio(e.target.value)}
            style={{
              marginTop: 16,
            }}
            placeholder="Введите ФИО получателя"
          />
          <Input
            className={styles.input}
            onChange={(e) => setPhoneNumber(e.target.value)}
            style={{
              marginTop: 16,
            }}
            placeholder="Введите номер карты"
          />

          <div
            style={{
              width: "100%",
              marginTop: 24,
            }}
            className={styles.btn}
          >
            <button
              disabled={isDisabled}
              style={{
                backgroundColor: isDisabled ? "#B7B7B7" : undefined,
                width: "100%",
              }}
              onClick={() => nextStep(3)}
            >
              Обменять сейчас
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
