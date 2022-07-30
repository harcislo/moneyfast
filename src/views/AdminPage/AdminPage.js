import React, { useState } from "react";
import styles from "./AdminPage.module.css";
import TableAdmin from "../../components/TableAdmin/TableAdmin";
import { Menu } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import CommentOk from "../../components/CommentOk/CommentOk";


const AdminPage = () => {
  const [current, setCurrent] = useState('applications');
  return (
    <div className={styles.wrapper}>

        <div style={{
          margin: window.innerWidth>1000? '30px 0px 0px 60px':'30px 0px 0px 16px'
        }} className={styles.menu}>
          <span onClick={() => {
            setCurrent('applications')
          }} style={{
            borderBottom: current==='applications'? '2px solid #295bf4': undefined
          }} className={styles.span}>Заявки</span>
          <span onClick={() => {
            setCurrent('comments')
          }} style={{
            borderBottom: current==='comments'? '2px solid #295bf4': undefined
          }} className={styles.span}>Отзывы</span>
        </div>


      {current==='applications' && <TableAdmin/>}
      {current==='comments' && <CommentOk/>}
    </div>
  );
};

export default AdminPage;