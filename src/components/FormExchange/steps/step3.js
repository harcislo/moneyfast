import React, { useState } from "react";
import styles from "./Step.module.css";

import cryptoIcon from "../../../assets/icons/bitcoin.png";
import bankIcon from "../../../assets/icons/bank.png";
import qrCodeImg from "../../../assets/icons/qr-code.png";

import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { createApplication, getNumberFiat, getPaymentByCrypt } from "../../../services";
import { setApplicationIdForm, setIsLoadingForm } from "../../../store/applicationSlice";

const Step3 = ({ nextStep, reverse, setReverse }) => {
  const dispatch = useDispatch()

  const fromExchange = useSelector(state => state.application.fromExchange)
  const inExchange = useSelector(state => state.application.inExchange)
  const fromSum = useSelector(state => state.application.fromSum)
  const inSum = useSelector(state => state.application.inSum)
  const userMail = useSelector(state => state.application.userMail)
  const userFullName = useSelector(state => state.application.userFullName)
  const userRequisites = useSelector(state => state.application.userRequisites)

  const [purse, setPurse] = useState(reverse? getNumberFiat(fromExchange) : getPaymentByCrypt(fromExchange));
  const [sum, setSum] = useState(inSum);

  return (
    <div
      style={{
        alignItems: "start",
        paddingBottom: 32,
      }}
      className={styles.wrapper}
    >
      {/*<span*/}
      {/*  style={{*/}
      {/*    fontWeight: 500,*/}
      {/*    fontSize: 20,*/}
      {/*    color: "#B7B7B7",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  Заявка 182882*/}
      {/*</span>*/}

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
          Вы меняете:
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
            {/*<img src={cryptoIcon} alt="cryptoIcon" />*/}
            <span
              style={{
                marginLeft: 8,
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              {fromSum + ' ' + fromExchange}
            </span>
          </div>

          <span
            style={{
              margin: "0 12px",
              fontWeight: 400,
              fontSize: 16,
            }}
          >
            на
          </span>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {/*<img src={bankIcon} alt="bankIcon" />*/}
            <span
              style={{
                // marginLeft: 8,
                fontWeight: 500,
                fontSize: 16,
              }}
            >
              {inSum + ' ' + inExchange}

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
            Реквизиты:
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
          {/*<span*/}
          {/*  style={{*/}
          {/*    fontSize: 16,*/}
          {/*    marginBottom: 8,*/}
          {/*    fontWeight: 500,*/}
          {/*    color: "#0F1221",*/}
          {/*  }}*/}
          {/*>*/}
          {/*  QR-код:*/}
          {/*</span>*/}
          {/*<img src={qrCodeImg} alt="qr" />*/}
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
            onClick={async () => {
              nextStep(4)
              dispatch(setIsLoadingForm(true))
              createApplication({fromExchange,
                inExchange,
                fromSum,
                inSum,
                userMail,
                userFullName,
                userRequisites}).then(r => {
                dispatch(setIsLoadingForm(false))
                dispatch(setApplicationIdForm(r.data.id))

              })
            }}
          >
            Я оплатил
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3;
