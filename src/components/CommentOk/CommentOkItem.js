import React, { useState } from "react";
import Comment from "../Сomment/Comment";
import { Button } from "antd";
import { removeCommentAdmin, updateCommentStatusAdmin } from "../../services";

const CommentOkItem = ({comment}) => {
  const [isOk, setIsOk] = useState(comment.status=== 'confirmed')
  const [isDel, setIsDel] = useState(false)
  return (
    <div>
      <div
        style={{
          display: isDel? "none":"flex",
          flexDirection: 'column',
          alignItems: "flex-start",
          marginTop: 32
        }}>
        <Comment name={comment.userName} date={new Date(comment.createdAt).toLocaleString()} rating={comment.rating} text={comment.text} />
        <div>
          <Button type={isOk? 'primary': 'default'} onClick={() => {
            setIsOk(true)
            updateCommentStatusAdmin('confirmed', comment.id).then(r => console.log(r))
          }} style={{
            marginTop: 15
          }}>{isOk? 'Одобрено': 'Одобрить'}</Button>
          <Button onClick={() => {
            setIsDel(true)
            removeCommentAdmin(comment.id).then(r => console.log(r))
          }} type='danger' style={{
            marginTop: 15,
            marginLeft: 15
          }}>Удалить</Button>
        </div>

      </div>
    </div>
  );
};

export default CommentOkItem;