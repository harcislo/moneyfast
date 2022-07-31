import React from "react";
import styles from "./Step.module.css";
import cryptoIcon from "../../../assets/icons/bitcoin.png";
import bankIcon from "../../../assets/icons/bank.png";
import { useDispatch, useSelector } from "react-redux";
import { cancelApplication } from "../../../services";
import { setInitialState } from "../../../store/applicationSlice";

const Step4 = ({reverse, setReverse }) => {
  const dispatch = useDispatch()
  const fromExchange = useSelector(state => state.application.fromExchange)
  const inExchange = useSelector(state => state.application.inExchange)
  const fromSum = useSelector(state => state.application.fromSum)
  const inSum = useSelector(state => state.application.inSum)
  const idForm = useSelector(state => state.application.idForm)
  return (
    <div
      style={{
        alignItems: "center",
      }}
      className={styles.wrapper + " " + styles.step4Wrapper}
    >
      <span className={styles.h1Text}>{`Заявка ${idForm?'#'+idForm:''} принята в обработку`}</span>

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
            на{" "}
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
        <button onClick={() => {
          cancelApplication(idForm).then(() => console.log('Заявка отменена'))
          dispatch(setInitialState())
        }}>Отменить заявку</button>
      </div>
    </div>
  );
};

export default Step4;
