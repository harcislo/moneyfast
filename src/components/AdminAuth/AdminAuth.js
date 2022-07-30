import React from "react";
import styles from './AdminAuth.module.css'
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../../store/userSlice";
import { loginAdmin } from "../../services";


const AdminAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onFinish = async (values) => {
    console.log('Success:', values);
    const token = await loginAdmin({email: values.login, password: values.password})
    localStorage.setItem('token', `${token.data.token}`)
    dispatch(setToken(`${token}`))
    navigate("/admin")
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className={styles.wrapper}>
      <Form
        name='auth'
        labelCol={{ span: 7 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >

        <Form.Item
          label="Логин"
          name="login"
          rules={[{ required: true, message: 'Введите логин' }]}
        >
          <Input size='large' />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input.Password size='large' />
        </Form.Item>

        <Form.Item>
          <Button size='large' type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AdminAuth;