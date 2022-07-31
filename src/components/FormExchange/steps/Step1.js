import React, { useEffect, useState } from "react";
import styles from "./Step.module.css";
import refreshImg from "../../../assets/icons/refresh.png";
import bankIcon from "../../../assets/icons/bank.png";

import btcIcon from "../../../assets/icons/bitcoin.png";
import ethereumIcon from "../../../assets/icons/ethereum.png";
import zcashIcon from "../../../assets/icons/zcash.png";
import moneroIcon from "../../../assets/icons/monero.png";
import tronIcon from "../../../assets/icons/tron.png";
import stellarIcon from "../../../assets/icons/stellar.png";
import dashIcon from "../../../assets/icons/dashImg.png";


import rubIcon from "../../../assets/icons/rub.png";
import belRubIcon from "../../../assets/icons/belrub.png";
import tengeIcon from "../../../assets/icons/tenge.png";


import { Input, Select } from "antd";
import { useDispatch } from "react-redux";
import { setFromExchange, setFromSum, setInExchange, setInSum, setStep } from "../../../store/applicationSlice";
import { getExchangeRate, getExchangeUsdRub } from "../../../services";

const { Option } = Select;

const Step1 = ({ reverse, setReverse }) => {
  const dispatch = useDispatch();

  const [crypts, setCrypts] = useState([
    { id: "BTC", img: btcIcon, name: "Bitcoin" },
    { id: "ETH", img: ethereumIcon, name: "Ethereum" },
    { id: "ZEC", img: zcashIcon, name: "Zcash" },
    { id: "XMR", img: moneroIcon, name: "Monero" },
    { id: "TRX", img: tronIcon, name: "Tron" },
    { id: "XLM", img: stellarIcon, name: "Stellar" },
    { id: "DASH", img: dashIcon, name: "Dash" }
  ]);

  const [banks, setBanks] = useState([
    { id: "RUB", img: rubIcon, name: "Русский рубль" }
    // {id: 'BYR', img: belRubIcon, name: "Беллоруский рубль" },
    // {id: 'KZT', img: tengeIcon, name: "Тенге" },
  ]);

  const [selectCrypt, setSelectCrypt] = useState("");
  const [selectBank, setSelectBank] = useState("RUB");
  const [sumCrypts, setSumCrypts] = useState("");
  const [sumBank, setSumBank] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);

  const [rate, setRate] = useState(null);

  useEffect(() => {
    selectCrypt && selectBank && getExchangeRate(selectCrypt, selectBank).then(r => setRate(r));
  }, [selectCrypt, selectBank]);


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
        padding: "32px 32px 0 32px"
      }}
      className={styles.wrapper}
    >
      <div className={styles.fields}>

        {
          reverse
            ? <div
              style={{
                position: "relative"
                // top: 13,
              }}
              className={styles.changeColumn}
            >
              <Select
                value={selectBank || "Выберите фиатную валюту"}
                dropdownStyle={{
                  borderRadius: 15
                }}
                onChange={(value) => {
                  setSelectBank(value)
                  setSumBank('')
                  setSumCrypts('')
                  setRate(null)
                }
              }
                placeholder="Выберите фиатную валюту"
                className={styles.select}
                size={"large"}
                style={{
                  // width: '100%',
                  fontWeight: 500,
                  fontSize: 20
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
                      fontWeight: 500
                    }}
                    key={el.name}
                    value={el.id}
                  >
                    <img
                      style={{
                        marginRight: 8
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
                disabled={!rate || selectCrypt.length===0}

                className={styles.input}
                value={sumBank}
                type={"number"}
                style={{
                  marginTop: 24
                }}
                placeholder="Введите сумму"
                onChange={(e) => {
                  setSumBank(e.target.value);
                  rate && setSumCrypts((e.target.value / rate).toFixed(7));
                }
                }
              />
              {
                rate && <span
                  className={styles.rate}
                  style={{
                    position: "absolute",
                    fontWeight: 400,
                    fontSize: 16,
                    color: "#0F1221"
                  }}
                >
            {`Курс обмена: 1 ${selectCrypt} – ${rate} ${selectBank}`}
          </span>
              }
            </div>
            : <div className={styles.changeColumn}>
              <Select
                value={selectCrypt || "Выберите криптовалюту"}
                dropdownStyle={{
                  borderRadius: 15
                }}
                onChange={(value) => {
                  setSelectCrypt(value)
                  setSumBank('')
                  setSumCrypts('')
                  setRate(null)
                }}
                // showSearch
                placeholder="Выберите криптовалюту"
                className={styles.select}
                size={"large"}
                style={{
                  // width: '100%',
                  fontWeight: 500,
                  fontSize: 20
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
                      fontWeight: 500
                    }}
                    key={el.name}
                    value={el.id}
                  >
                    <img
                      width={32}
                      style={{
                        marginRight: 8
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
                disabled={!rate || selectCrypt.length===0}

                value={sumCrypts}
                onChange={(e) => {
                  setSumCrypts(e.target.value);
                  rate && setSumBank(Math.round(Number(e.target.value * rate)));
                }
                }
                style={{
                  marginTop: 24
                }}
                placeholder="Введите сумму"
                type={"number"}
              />
            </div>
        }


        <div
          style={{
            margin: 40,
            cursor: "pointer"
          }}
          onClick={() => {
            setReverse((prevState) => !prevState);
            // setSelectCrypt('')
            // setSelectBank('')
            // setSumCrypts('')
            // setSelectBank('')
          }
          }
        >
          <img src={refreshImg} alt="refreshImg" />
        </div>

        {
          reverse
            ? <div className={styles.changeColumn}>
              <Select
                value={selectCrypt || "Выберите криптовалюту"}
                dropdownStyle={{
                  borderRadius: 15
                }}
                onChange={(value) => {
                  setSelectCrypt(value)
                  setSumBank('')
                  setSumCrypts('')
                  setRate(null)
                }}
                // showSearch
                placeholder="Выберите криптовалюту"
                className={styles.select}
                size={"large"}
                style={{
                  // width: '100%',
                  fontWeight: 500,
                  fontSize: 20
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
                      fontWeight: 500
                    }}
                    key={el.name}
                    value={el.id}

                  >
                    <img
                      width={32}
                      style={{
                        marginRight: 8
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
                disabled={!rate || selectCrypt.length===0}

                className={styles.input}
                value={sumCrypts}
                onChange={(e) => {
                  setSumCrypts(e.target.value);
                  rate && setSumBank(Math.round(Number(e.target.value * rate)));
                }
                }
                style={{
                  marginTop: 24
                }}
                placeholder="Введите сумму"
                type={"number"}
              />
            </div>
            :
            <div
              style={{
                position: "relative"
                // top: 13,
              }}
              className={styles.changeColumn}
            >
              <Select
                value={selectBank || "Выберите фиатную валюту"}
                dropdownStyle={{
                  borderRadius: 15
                }}
                onChange={(value) => {
                  setSelectBank(value)
                  setSumBank('')
                  setSumCrypts('')
                  setRate(null)
                }}
                placeholder="Выберите фиатную валюту"
                className={styles.select}
                size={"large"}
                style={{
                  // width: '100%',
                  fontWeight: 500,
                  fontSize: 20
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
                      fontWeight: 500
                    }}
                    key={el.name}
                    value={el.id}
                  >
                    <img
                      style={{
                        marginRight: 8
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
                disabled={!rate || selectCrypt.length===0}

                className={styles.input}
                value={sumBank}
                type={"number"}
                style={{
                  marginTop: 24
                }}
                placeholder="Введите сумму"
                onChange={(e) => {
                  setSumBank(e.target.value);
                  rate && setSumCrypts((e.target.value / rate).toFixed(7));
                }}
              />

              {
                rate && <span
                  className={styles.rate}

                  style={{
                    position: "absolute",
                    fontWeight: 400,
                    fontSize: 16,
                    color: "#0F1221"
                  }}
                >
            {`Курс обмена: 1 ${selectCrypt} – ${rate} ${selectBank}`}
          </span>
              }

            </div>
        }

      </div>

      <div
        style={{
          marginTop: 85
        }}
        className={styles.btn}
      >
        <button
          style={{
            backgroundColor: isDisabled ? "#B7B7B7" : undefined
          }}
          disabled={isDisabled}
          onClick={() => {
            dispatch(setStep(2));

            if (!reverse) {
              console.log(selectCrypt, selectBank);
              dispatch(setFromExchange(selectCrypt));
              dispatch(setInExchange(selectBank));
              dispatch(setFromSum(sumCrypts));
              dispatch(setInSum(sumBank));
            } else {
              dispatch(setFromExchange(selectBank));
              dispatch(setInExchange(selectCrypt));
              dispatch(setFromSum(sumBank));
              dispatch(setInSum(sumCrypts));
            }
          }
          }
        >
          Обменять сейчас
        </button>
      </div>
    </div>
  );
};

export default Step1;
