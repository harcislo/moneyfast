import React from "react";
import { Dropdown, Table } from "antd";
import TableStatusMenu from "./TableStatusMenu";
import styles from "./Table.module.css";
import smallRefreshPng from "../../../assets/icons/small-refresh.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const TableUi = () => {
  const applications = useSelector(state => state.application.applications);

  const tableAdminColumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      defaultSortOrder: "descend",
      filterMultiple: true,
      sorter: (a, b) => b.id - a.id,
      render: (id) => (
        <NavLink style={{ color: "#0F1221" }} to={`/admin/${id}`}>
                  <span className={styles.tableApplication} style={{ fontSize: 16 }}>
          Заявка <b>#{id}</b>
        </span>
        </NavLink>
      )
    },
    {
      title: "Статус",
      dataIndex: "statusAndId",
      key: "status",
      render: (statusAndId) => {
        const [status, id] = statusAndId;
        return (
          <Dropdown trigger={["click"]} overlay={<TableStatusMenu id={id} />}>
          <span className={styles.statusTable} style={{
            fontWeight: 500,
            fontSize: 16,
            padding: 10,
            color: status === "inProcessing" && "#295BF4" || status === "confirmed" && "#26BD23" || status === "completed" && "#0F1221" || status === "rejected" && "#F92323"
          }}>{
            //filter = 'all'||'confirmed'||'inProcessing'||'rejected'||'completed'

            status === "confirmed" && "Подтверждено" ||
            status === "inProcessing" && "В обработке" ||
            status === "rejected" && "Отклонено" ||
            status === "completed" && "Завершено"


          }</span>
          </Dropdown>
        );

      }
    },
    {
      title: "Дата", dataIndex: "createdAt", key: "date", render: (date) => <span style={{ fontSize: 16 }}>{

        new Date(date).toLocaleString()

      }</span>
    },
    {
      title: "Пользователь",
      dataIndex: "userFullName",
      key: "user",
      render: (user) => <span style={{ fontSize: 16 }}>{user}</span>
    },
    {
      title: "E-mail",
      dataIndex: "userMail",
      key: "email",
      render: (email) => <span style={{ fontSize: 16 }}>{email}</span>
    },
    {
      title: "Сумма обмена",
      dataIndex: "sumExchange",
      key: "sumExchange",
      render: (sumExchange) => <span style={{ fontSize: 16 }}><b>{sumExchange[0]}</b> {sumExchange[1]} <img
        style={{ margin: "0 8px" }}

        src={smallRefreshPng} alt="smallRefreshPng" />  <b>{sumExchange[2]}</b> {sumExchange[3]}</span>
    }
    // { title: "Обмен", dataIndex: "exchange", key: "exchange",  render: () => <span>
    //     <img width={24} src={bitcoinPng} alt="bitcoinPng" />
    //     <img style={{margin: '0 8px'}} src={smallRefreshPng} alt="smallRefreshPng" />
    //     <img width={24} src={bankPng} alt="bankPng" />
    //   </span>},
  ];
  const tableAdminColumns1000 = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      defaultSortOrder: "descend",
      filterMultiple: true,
      sorter: (a, b) => b.id - a.id,
      render: (id) => (
        <NavLink style={{ color: "#0F1221" }} to={`/admin/${id}`}>
                  <span className={styles.tableApplication} style={{ fontSize: 16 }}>
          Заявка <b>#{id}</b>
        </span>
        </NavLink>
      )
    },
    {
      title: "Статус",
      dataIndex: "statusAndId",
      key: "status",
      render: (statusAndId) => {
        const [status, id] = statusAndId;
        return (
          <Dropdown trigger={["click"]} overlay={<TableStatusMenu id={id} />}>
          <span className={styles.statusTable} style={{
            fontWeight: 500,
            fontSize: 16,
            padding: 10,
            color: status === "inProcessing" && "#295BF4" || status === "confirmed" && "#26BD23" || status === "completed" && "#0F1221" || status === "rejected" && "#F92323"
          }}>{
            //filter = 'all'||'confirmed'||'inProcessing'||'rejected'||'completed'

            status === "confirmed" && "Подтверждено" ||
            status === "inProcessing" && "В обработке" ||
            status === "rejected" && "Отклонено" ||
            status === "completed" && "Завершено"


          }</span>
          </Dropdown>
        );

      }
    }
  ];


  // const data = [
  //   {
  //     key: "1",
  //     id: "23554",
  //     status: "В обработке",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },
  //   {
  //     key: "2",
  //     id: "23554",
  //     status: "Подтверждено",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },
  //   {
  //     key: "3",
  //     id: "23554",
  //     status: "Откланено",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },
  //   {
  //     key: "4",
  //     id: "23554",
  //     status: "Завершено",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },
  //   {
  //     key: "5",
  //     id: "23554",
  //     status: "В обработке",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },
  //   {
  //     key: "6",
  //     id: "23554",
  //     status: "В обработке",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },
  //   {
  //     key: "7",
  //     id: "23554",
  //     status: "В обработке",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },
  //   {
  //     key: "8",
  //     id: "23554",
  //     status: "В обработке",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },    {
  //     key: "9",
  //     id: "23554",
  //     status: "В обработке",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },
  //   {
  //     key: "10",
  //     id: "23554",
  //     status: "В обработке",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },
  //   {
  //     key: "11",
  //     id: "23554",
  //     status: "В обработке",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },
  //   {
  //     key: "12",
  //     id: "23554",
  //     status: "В обработке",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },
  //   {
  //     key: "13",
  //     id: "555555",
  //     status: "В обработке",
  //     date: "08.07.2022, 12:41",
  //     user: "Иван Иванов",
  //     email: "ivanivanov@mail.ru",
  //     sumExchange: "1500 rub",
  //     exchange: "yes",
  //   },
  //
  // ];

  return (
    <div>
      <Table pagination={{ defaultPageSize: 8 }}
             columns={window.innerWidth > 1000 ? tableAdminColumns : tableAdminColumns1000} dataSource={applications} />
    </div>
  );
};

export default TableUi;
