import React from "react"

import { Form, Icon, Input, Button, Card } from "antd"
import { FormComponentProps } from "antd/es/form"
import { useDispatch } from "react-redux"

import { loginAction } from "../../redux/auth/actions"
import useSelector from "../../shared/hooks/useSelector"

import styles from "./Login.module.less"

const LoginForm = Form.create({ name: "login" })(({ form }: FormComponentProps) => {
  const isLoading = useSelector(({ auth }) => auth.loading)
  const dispatch = useDispatch()

  const handleSubmit = React.useCallback(
    e => {
      e.preventDefault()
      form.validateFields((err, values) => {
        if (!err) {
          dispatch(loginAction(values.email, values.password))
        }
      })
    },
    [form, dispatch]
  )

  const { getFieldDecorator } = form

  return (
    <Form onSubmit={handleSubmit} className={styles.form}>
      <Form.Item>
        {getFieldDecorator("email", {
          rules: [
            { type: "email", message: "Введите корректный email" },
            { required: true, message: "Введите email" },
          ],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Email"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true, message: "Ввежите пароль" }],
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
            placeholder="Пароль"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" block size="large" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
})

const Login = () => (
  <div className={styles.loginLayout}>
    <Card title="Вход">
      <LoginForm />
    </Card>
  </div>
)

export default Login
