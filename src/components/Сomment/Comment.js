import React from "react";
import styles from './Comment.module.css'
import { Rate } from 'antd';


const Comment = ({name, date, text, rating}) => {
  return (
    <div className={styles.wrapper}>
        <div className={ styles.header}>
          <div>
            <span className={styles.name}>{name}</span>
            <span className={styles.date}>{date}</span>
          </div>
          <Rate disabled={true} value={rating}/>
        </div>

        <div className={styles.text}>
          {text}
        </div>

      </div>
  );
};

export default Comment;