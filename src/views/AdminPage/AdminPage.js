import React from "react";
import styles from './AdminPage.module.css'
import TableAdmin from "../../components/TableAdmin/TableAdmin";

const AdminPage = () => {
  return (
    <div className={styles.wrapper}>
          <TableAdmin/>
    </div>
  );
};

export default AdminPage;