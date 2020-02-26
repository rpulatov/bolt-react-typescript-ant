import React, { ReactElement } from "react"

import { Button, Card, Modal } from "antd"

import Page from "shared/components/Page"

interface ProductProps {}

function Product({}: ProductProps): ReactElement {
  
  return (
    <Page
      pageHeader={{
        title: "Товары",
        actionButtons: [
          <Button key="add" type="primary" icon="plus" onClick={() => {}}>
            Добавить
          </Button>,
        ],
      }}
    >
      <Card>Demo</Card>
    </Page>
  )
}

export default Product
