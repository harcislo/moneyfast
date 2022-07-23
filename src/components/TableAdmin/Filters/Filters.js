import React from "react";
import styles from "./Filters.module.css"

const Filters = ({filter, setFilter}) => {
  const filters = [
    {id: 'all', title: 'Все'},
    {id: 'confirmed', title: 'Подтверждённые'},
    {id: 'inProcessing', title: 'В обработке'},
    {id: 'rejected', title: 'Отклонённые'},
    {id: 'completed', title: 'Завершённые'},
  ]
  return (
    <div className={styles.wrapper}>
      {
        filters.map((el) =>
          <div
            key={el.id}
            className={styles.item}
            onClick={() => setFilter(el.id)}
            style={{
              color: filter===el.id ? '#FFFFFF' : undefined,
              backgroundColor: filter===el.id ? '#295BF4' : undefined,
              marginRight: el.id==='completed'?0:undefined
            }}
          >
            {el.title}
          </div>
        )
      }

    </div>
  );
};

export default Filters;