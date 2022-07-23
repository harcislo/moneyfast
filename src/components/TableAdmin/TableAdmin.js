import React, { useState } from "react";
import styles from './TableAdmin.module.css'
import Filters from "./Filters/Filters";
import TableUi from "./Table/Table";

const TableAdmin = () => {


  //filter = 'all'||'confirmed'||'inProcessing'||'rejected'||'completed'
  const [filter, setFilter] = useState('all')
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  return (
    <div className={styles.wrapper}>
      <span className={styles.h1Text}>Заявки</span>
      <div className={styles.filters}>
        <Filters filter={filter} setFilter={setFilter}/>
      </div>
      <div className={styles.table}>
        <TableUi/>
      </div>
    </div>
  );
};

export default TableAdmin;