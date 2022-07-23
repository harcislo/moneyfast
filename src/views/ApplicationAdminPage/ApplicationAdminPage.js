import React from "react";
import styles from './ApplicationAdminPage.module.css'
import BitcoinPng from '../../assets/icons/Bitcoin.png'
import smallRefreshPng from '../../assets/icons/small-refresh.png'
import qrCode from '../../assets/icons/qr-code.png'
import bankPng from '../../assets/icons/bank.png'
import bitcoinPng from '../../assets/icons/bitcoin.png'

const ApplicationAdminPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
      <span className={styles.h1Text}>Заявка #128293</span>

        <div className={styles.applicationInfo}>
          <div className={styles.userInfo}>
            <span className={styles.span}><b>Пользователь:</b> Иванов Иван Иванович</span>
            <span className={styles.span}><b>Статус заявки: </b> <b style={{
              color: '#26BD23'
            }}>Подтверждено</b></span>
            <span className={styles.span}><b>Дата: </b>08.07.2022, 12:41</span>
            <span className={styles.span}><b>E-mail: </b> ivanivanov@mail.ru</span>

            <span className={styles.span} style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <b>Обмен: </b>
              <span className={styles.span} style={{marginTop: 0}}>
                 <img width={24} src={bitcoinPng} alt="bitcoinPng" />
              <b>0.00204188 btc</b>
              <img style={{margin: '0 0 0 8px'}} src={smallRefreshPng} alt="smallRefreshPng" />
              <img width={24} src={bankPng} alt="bankPng" />
              <b>2500 rub</b>
              </span>
            </span>

          </div>

          <div className={styles.paymentInfo}>
            <span className={styles.span}><b>Номер карты: </b> 1234567890</span>
            <span className={styles.span}><b>Номер кошелька: </b> 1MAUuLrH162bLX2y9t9LAZc6fNoz2sypWV</span>
            <span className={styles.span}>
              <b>QR-код: </b><br/>
              <img style={{marginTop: 16, height: "auto"}} src={qrCode} alt="qrCode" />
            </span>
          </div>

        </div>
      </div>
      <div className={styles.img}>
        <img style={{width: '100%', height: "auto"}} src={BitcoinPng} alt="BitcoinPng" />
      </div>
    </div>
  );
};

export default ApplicationAdminPage;