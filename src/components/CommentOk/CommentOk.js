import React, { useEffect, useState } from "react";
import styles from "./CommentOk.module.css";
import { getCommentsAdmin } from "../../services";
import Comment from "../Сomment/Comment";
import { Button } from "antd";
import CommentOkItem from "./CommentOkItem";

const CommentOk = () => {
  const [comments, setComments] = useState();
  useEffect(() => {
    getCommentsAdmin().then(r => setComments(r.data));
  }, []);
  return (
    <div className={styles.wrapper}>
      <span className={styles.h1Text}>Отзывы</span>

      <div>

        {
          comments?.map(comment => {
            return <CommentOkItem comment={comment}/>
          })
        }


      </div>

    </div>
  );
};

export default CommentOk;