import React from "react";
import FormExchange from "../../components/FormExchange/FormExchange";
import styles from "./HomePage.module.css";
import bitcoinImg from "../../assets/icons/Bitcoin.png";

const HomePage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.formExchange}>
        <FormExchange />
      </div>
      <img className={styles.img} src={bitcoinImg} alt="bitcoin" />
    </div>
  );
};

export default HomePage;
