import React, { useEffect, useState } from "react";
import styles from './Reviews.module.css'
import Comment from "../../components/Сomment/Comment";
import { Input, Pagination, Rate } from "antd";

import formImg from '../../assets/icons/Survey-amico.png'
import { getCommentConfirmedAdmin, setCommentsClient } from "../../services";
const { TextArea } = Input;


const Reviews = () => {
  const [name, setName] = useState('')
  const [text, setText] = useState('')
  const [rating, setRating] = useState(0)

  const [comments, setComments] = useState([])
  useEffect(() => {

    getCommentConfirmedAdmin().then(r => setComments(r.data))


  }, [])

  useEffect(() => {
    setIsDisabled(
      (name.length === 0 ||
        text.length === 0 ||
        rating === 0) &&
      true
    );
  }, [name, text, rating]);

  const [isDisabled, setIsDisabled] = useState(true)
  return (
    <div className={styles.wrapper}>
      <div className={styles.reviews}>
        <span className={styles.h1Text}>Отзывы</span>
        <div style={{
          marginTop: 16
        }} className={styles.comments}>
          {comments.map((el, i) => <Comment name={el.name} rating={el.rating} date={el.date} text={el.text}/>)}
        </div>
        {/*<div className={styles.pagination}>*/}
        {/*  <Pagination*/}
        {/*    style={{*/}
        {/*      display: 'flex',*/}
        {/*      justifyContent: 'center'*/}
        {/*    }}*/}
        {/*    onChange={(value) => console.log(value)}*/}
        {/*    simple={window.innerWidth<700}*/}
        {/*    pageSizeOptions={[]} pageSize={8} defaultCurrent={1} total={500} />*/}
        {/*</div>*/}
      </div>
      <div className={styles.form}>
        <img style={{
          width: '100%',
          maxWidth: 467,
          height: "auto"
        }} src={formImg} alt="formImg" />

        <span className={styles.formText}>Оставить отзыв</span>

        <Input
          value={name}
          className={styles.input}
          onChange={(e) => setName(e.target.value)}
          style={{
            marginTop: 24,
          }}
          placeholder="Введите имя"
        />

        <TextArea
          rows={4}
          value={text}
          className={styles.input}
          onChange={(e) => setText(e.target.value)}
          style={{
            marginTop: 8,
          }}
          placeholder="Введите имя"
        />

        <div className={styles.formRating}>
          <span style={{
            fontSize: 16,
            color: '#0F1221',
            marginRight: 40
          }}>Поставьте оценку</span>
          <Rate value={rating} onChange={(value) => setRating(value)}/>
        </div>

        <button
          style={{
            backgroundColor: isDisabled ? "#B7B7B7" : undefined,
          }}
          disabled={isDisabled}
          onClick={() => {
            setText('')
            setName('')
            setRating(0)
            setCommentsClient({
              userName: name,
              text: text,
              rating: rating,
              status: "isProcessing"
            }).then(r => console.log(r))
          }}
        >
          Оставить отзыв
        </button>

      </div>
    </div>
  );
};

export default Reviews;