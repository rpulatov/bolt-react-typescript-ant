import React, { ReactElement } from "react"
import { Result, Button } from "antd"
import { useHistory } from "react-router-dom"

function NotFound(): ReactElement {
  const history = useHistory()
  return (
    <Result
      status={404}
      title="404"
      subTitle="Извините, данной страницы не существует"
      extra={
        <Button type="primary" onClick={() => history.push("/")}>
          Вернуться на главную
        </Button>
      }
    />
  )
}

export default NotFound
