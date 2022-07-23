import React, { useEffect } from "react";
import { Dropdown, Menu, Table } from "antd";
import TableStatusMenu from "./TableStatusMenu";
import styles from './Table.module.css'
import smallRefreshPng from '../../../assets/icons/small-refresh.png'
import bankPng from '../../../assets/icons/bank.png'
import bitcoinPng from '../../../assets/icons/bitcoin.png'
import { Link, NavLink } from "react-router-dom";

const TableUi = () => {
  const tableAdminColumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <NavLink style={{color: '#0F1221'}} to={`/admin/${id}`}>
                  <span className={styles.tableApplication} style={{fontSize: 16}}>
          Заявка <b>#{id}</b>
        </span>
        </NavLink>
      ),
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Dropdown trigger={['click']} overlay={TableStatusMenu}>
          <span className={styles.statusTable} style={{
            fontWeight: 500,
            fontSize: 16,
            padding: 10,
            color: status==='В обработке'&&'#295BF4'||status==='Подтверждено'&& '#26BD23'||status==='Завершено'&&'#0F1221'||status==='Откланено' &&'#F92323',
          }}>{status}</span>
        </Dropdown>
      ),
    },
    { title: "Дата", dataIndex: "date", key: "date", render: (date) => <span style={{fontSize:16}}>{date}</span> },
    { title: "Пользователь", dataIndex: "user", key: "user", render: (user) => <span style={{fontSize:16}}>{user}</span> },
    { title: "E-mail", dataIndex: "email", key: "email", render: (email) => <span style={{fontSize:16}}>{email}</span> },
    { title: "Сумма обмена", dataIndex: "sumExchange", key: "sumExchange", render: (sumExchange) => <span style={{fontSize: 16}}><b>0.00204188</b> btc <img style={{margin: '0 8px'}}
                                                                                                                                                            src={smallRefreshPng} alt="smallRefreshPng" />  <b>2500</b> rub</span> },
    { title: "Обмен", dataIndex: "exchange", key: "exchange",  render: () => <span>
        <img width={24} src={bitcoinPng} alt="bitcoinPng" />
        <img style={{margin: '0 8px'}} src={smallRefreshPng} alt="smallRefreshPng" />
        <img width={24} src={bankPng} alt="bankPng" />
      </span>},
  ];
  const tableAdminColumns1000 = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <NavLink style={{color: '#0F1221'}} to={`/admin/${id}`}>

           <span className={styles.tableApplication} style={{fontSize: 16}}>
          Заявка <b>#{id}</b>
        </span>
        </NavLink>
      ),
    },
    {
      title: "Статус",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Dropdown trigger={['click']} overlay={TableStatusMenu}>
          <span className={styles.statusTable} style={{
            fontWeight: 500,
            fontSize: 16,
            padding: 10,
            color: status==='В обработке'&&'#295BF4'||status==='Подтверждено'&& '#26BD23'||status==='Завершено'&&'#0F1221'||status==='Откланено' &&'#F92323',
          }}>{status}</span>
        </Dropdown>
      ),
    },
  ];



  const data = [
    {
      key: "1",
      id: "23554",
      status: "В обработке",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },
    {
      key: "2",
      id: "23554",
      status: "Подтверждено",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },
    {
      key: "3",
      id: "23554",
      status: "Откланено",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },
    {
      key: "4",
      id: "23554",
      status: "Завершено",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },
    {
      key: "5",
      id: "23554",
      status: "В обработке",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },
    {
      key: "6",
      id: "23554",
      status: "В обработке",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },
    {
      key: "7",
      id: "23554",
      status: "В обработке",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },
    {
      key: "8",
      id: "23554",
      status: "В обработке",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },    {
      key: "9",
      id: "23554",
      status: "В обработке",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },
    {
      key: "10",
      id: "23554",
      status: "В обработке",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },
    {
      key: "11",
      id: "23554",
      status: "В обработке",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },
    {
      key: "12",
      id: "23554",
      status: "В обработке",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },
    {
      key: "13",
      id: "555555",
      status: "В обработке",
      date: "08.07.2022, 12:41",
      user: "Иван Иванов",
      email: "ivanivanov@mail.ru",
      sumExchange: "1500 rub",
      exchange: "yes",
    },

  ];

  return (
    <div>
      <Table pagination={{defaultPageSize: 8}} columns={window.innerWidth>1000?tableAdminColumns:tableAdminColumns1000} dataSource={data} />
    </div>
  );
};

export default TableUi;
