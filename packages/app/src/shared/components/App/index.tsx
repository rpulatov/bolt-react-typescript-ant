import React from "react"

import Layout from "../Layout"
import Products from "screens/Products"
import RoutePage from '../RoutePage'



function App() {
  return (
    <Layout>
      <RoutePage pageKey="products" label="Товары" icon="appstore" component={Products} defaultPage/>
    </Layout>
  )
}

export default App
