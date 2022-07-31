import React, { useState } from "react";
import styles from "./FormExchange.module.css";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/step3";
import Step4 from "./steps/Step4";
import { useSelector } from "react-redux";

const FormExchange = () => {
  const step = useSelector(state => state.application.step)
  const [reverse, setReverse] = useState(false)

  return (
    <div style={styles.wrapper}>
      {step === 1 && <Step1 reverse={reverse} setReverse={setReverse} />}
      {step === 2 && <Step2 reverse={reverse} setReverse={setReverse} />}
      {step === 3 && <Step3 reverse={reverse} setReverse={setReverse} />}
      {step === 4 && <Step4 reverse={reverse} setReverse={setReverse} />}
    </div>
  );
};

export default FormExchange;
