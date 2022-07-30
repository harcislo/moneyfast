import React, { useEffect, useState } from "react";
import styles from './TableAdmin.module.css'
import Filters from "./Filters/Filters";
import TableUi from "./Table/Table";
import { getApplicationsByStatus } from "../../services";
import { useDispatch, useSelector } from "react-redux";
import { setApplications } from "../../store/applicationSlice";

const TableAdmin = () => {
  const applications = useSelector(state => state.application.applications)
  const dispatch = useDispatch()
  const [filter, setFilter] = useState('all')
  const [page, setPage] = useState(1)
  useEffect(() => {
    getApplicationsByStatus(filter).then(r => {
      // const newArray = r.data.map(el =>
      const newArray = r.data.map(el => {
        return {
          ...el, sumExchange: [el.fromSum, el.fromExchange, el.inSum, el.inExchange],statusAndId: [el.status, el.id]
        }
      })
      console.log(newArray)
      dispatch(setApplications(newArray))
    })
  }, [filter])

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