import React, { useEffect, useState } from "react";
import styles from "./Step.module.css";
import refreshImg from "../../../assets/icons/refresh.png";
import bankIcon from "../../../assets/icons/bank.png";
import btcIcon from "../../../assets/icons/bitcoin.png";
import { Input, Select } from "antd";

const { Option } = Select;

const Step1 = ({ nextStep }) => {
  const [crypts, setCrypts] = useState([
    { img: btcIcon, name: "Bitcoin" },
    { img: btcIcon, name: "Ethereum" },
    { img: btcIcon, name: "Tether" },
    { img: btcIcon, name: "USD Coin" },
    { img: btcIcon, name: "BNB" },
  ]);

  const [banks, setBanks] = useState([
    { img: bankIcon, name: "Совкомбанк" },
    { img: bankIcon, name: "ВТБ" },
    { img: bankIcon, name: "Россельхозбанк" },
    { img: bankIcon, name: "Газпромбанк" },
    { img: bankIcon, name: "Уралсиб" },
  ]);

  const [selectCrypt, setSelectCrypt] = useState("");
  const [selectBank, setSelectBank] = useState("");
  const [sumCrypts, setSumCrypts] = useState("");
  const [sumBank, setSumBank] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(
      (selectCrypt.length === 0 ||
        selectBank.length === 0 ||
        sumCrypts.length === 0 ||
        sumBank.length === 0) &&
        true
    );
  }, [selectCrypt, selectBank, sumCrypts, sumBank]);

  return (
    <div
      style={{
        padding: "32px 32px 0 32px",
      }}
      className={styles.wrapper}
    >
      <div className={styles.fields}>
        <div className={styles.changeColumn}>
          <Select
            dropdownStyle={{
              borderRadius: 15,
            }}
            onChange={(value) => setSelectCrypt(value)}
            // showSearch
            placeholder="Выберите валюту"
            className={styles.select}
            size={"large"}
            style={{
              // width: '100%',
              fontWeight: 500,
              fontSize: 20,
            }}
            listHeight={150}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {crypts.map((el) => (
              <Option
                style={{
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: 500,
                }}
                key={el.name}
                value={el.name.toLowerCase()}
              >
                <img
                  style={{
                    marginRight: 8,
                    // width: 25
                  }}
                  src={el.img}
                  alt="icon"
                />
                {el.name}
              </Option>
            ))}
          </Select>

          <Input
            className={styles.input}
            value={sumCrypts}
            onChange={(e) => setSumCrypts(e.target.value)}
            style={{
              marginTop: 24,
            }}
            placeholder="Введите сумму"
            type={"number"}
          />
        </div>

        <div
          style={{
            margin: 30,
          }}
        >
          <img src={refreshImg} alt="refreshImg" />
        </div>

        <div
          style={{
            position: "relative",
            top: 9,
          }}
          className={styles.changeColumn}
        >
          <Select
            dropdownStyle={{
              borderRadius: 15,
            }}
            onChange={(value) => setSelectBank(value)}
            placeholder="Выберите банк"
            className={styles.select}
            size={"large"}
            style={{
              // width: '100%',
              fontWeight: 500,
              fontSize: 20,
            }}
            listHeight={150}
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {banks.map((el) => (
              <Option
                style={{
                  height: 50,
                  display: "flex",
                  alignItems: "center",
                  fontSize: 16,
                  fontWeight: 500,
                }}
                key={el.name}
                value={el.name.toLowerCase()}
              >
                <img
                  style={{
                    marginRight: 8,
                    // width: 25
                  }}
                  src={el.img}
                  alt="icon"
                />
                {el.name}
              </Option>
            ))}
          </Select>

          <Input
            className={styles.input}
            value={sumBank}
            type={"number"}
            style={{
              marginTop: 24,
            }}
            placeholder="Введите сумму"
            onChange={(e) => setSumBank(e.target.value)}
          />
          <span
            style={{
              position: "relative",
              top: 12,
              fontWeight: 400,
              fontSize: 16,
              color: "#0F1221",
            }}
          >
            Курс обмена: 1 BTC – 721022.1713 UAH
          </span>
        </div>
      </div>

      <div
        style={{
          marginTop: 70,
        }}
        className={styles.btn}
      >
        <button
          style={{
            backgroundColor: isDisabled ? "#B7B7B7" : undefined,
          }}
          disabled={isDisabled}
          onClick={() => nextStep(2)}
        >
          Обменять сейчас
        </button>
      </div>
    </div>
  );
};

export default Step1;
