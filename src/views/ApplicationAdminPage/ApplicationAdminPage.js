import React, { useEffect, useState } from "react";
import styles from './ApplicationAdminPage.module.css'
import BitcoinPng from '../../assets/icons/Bitcoin.png'
import smallRefreshPng from '../../assets/icons/small-refresh.png'
import qrCode from '../../assets/icons/qr-code.png'
import bankPng from '../../assets/icons/bank.png'
import bitcoinPng from '../../assets/icons/bitcoin.png'
import { useParams } from "react-router-dom";
import { getApplicationById, getNumberFiat, getPaymentByCrypt } from "../../services";

const ApplicationAdminPage = () => {
  const params = useParams()
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    getApplicationById(params.id)
      .then(r => setData(r.data))
      .finally(() => setIsLoading(false))
  }, [])

  return (!isLoading &&
    <div className={styles.wrapper}>
      <div className={styles.content}>
      <span className={styles.h1Text}>Заявка #{data?.id}</span>

        <div className={styles.applicationInfo}>
          <div className={styles.userInfo}>
            <span className={styles.span}><b>Пользователь:</b> {data?.userFullName}</span>
            <span className={styles.span}><b>Статус заявки: </b>
              {
                data?.status === 'completed' && <b style={{ color: "#0F1221" }}>Завершено</b>
              }
              {
                data?.status === 'rejected' && <b style={{ color: "#F92323" }}>Отклонено</b>
              }
              {
                data?.status === 'confirmed' && <b style={{ color: "#26BD23" }}>Подтверждено</b>
              }
              {
                data?.status === 'inProcessing' && <b style={{ color: "#295BF4" }}>В обработке</b>
              }
            </span>

            <span className={styles.span}><b>Дата: </b>{
             new Date(data?.createdAt).toLocaleString()
            }</span>
            <span className={styles.span}><b>E-mail: </b> {data?.userMail}</span>

            <span className={styles.span} style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap'
            }}>
              <b style={{
                marginRight: 5
              }}>Обмен: </b>
              <span className={styles.span} style={{marginTop: 0}}>
                 {/*<img width={24} src={bitcoinPng} alt="bitcoinPng" />*/}
               <b> { data?.fromSum} {data?.fromExchange}</b>
              <img style={{margin: '0 8px 0 8px'}} src={smallRefreshPng} alt="smallRefreshPng" />
              {/*<img width={24} src={bankPng} alt="bankPng" />*/}
              <b>{data?.inSum} {data?.inExchange}</b>
              </span>
            </span>

          </div>


          {
            getPaymentByCrypt(data?.fromExchange) !== 'неизвестный кошелёк'
            ?<div className={styles.paymentInfo}>
                <span className={styles.span}><b>Реквизиты пользователя: </b> {data?.userRequisites}</span>
                <span className={styles.span}><b>Реквизиты получателя: </b> {getPaymentByCrypt(data?.fromExchange)}</span>
                {/*<span className={styles.span}>*/}
                {/*  <b>QR-код: </b><br/>*/}
                {/*  <img style={{marginTop: 16, height: "auto"}} src={qrCode} alt="qrCode" />*/}
                {/*</span>*/}
              </div>


            : <div className={styles.paymentInfo}>
                <span className={styles.span}><b>Реквизиты пользователя: </b> {data?.userRequisites}</span>
                <span className={styles.span}><b>Реквизиты получателя: </b> {getNumberFiat(data?.fromExchange)}</span>
                {/*<span className={styles.span}>*/}
                {/*  <b>QR-код: </b><br/>*/}
                {/*  <img style={{marginTop: 16, height: "auto"}} src={qrCode} alt="qrCode" />*/}
                {/*</span>*/}
              </div>
          }



        </div>
      </div>
      <div className={styles.img}>
        <img style={{width: '100%', height: "auto"}} src={BitcoinPng} alt="BitcoinPng" />
      </div>
    </div>
  );
};

export default ApplicationAdminPage;