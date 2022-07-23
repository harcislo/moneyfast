import React from "react";
import { Menu } from "antd";

const TableStatusMenu = () => {
  return (
    <Menu
    items={[
      {
        label: <span style={{
          fontSize: 16,
          color: '#295BF4',
          fontWeight: 500
        }}>В обработке</span>,
        key: 'confirmed'
      },
      {
        label: <span style={{
          fontSize: 16,
          color: '#26BD23',
          fontWeight: 500
        }}>Подтверждено</span>,
        key: 'inProcessing'
      },
      {
        label: <span style={{
          fontSize: 16,
          color: '#F92323',
          fontWeight: 500
        }}>Отклонено</span>,
        key: 'rejected'
      },
      {
        label: <span style={{
          fontSize: 16,
          color: '#0F1221',
          fontWeight: 500
        }}>Завершено</span>,
        key: 'completed'
      },
    ]}
    />
  );
};

export default TableStatusMenu;