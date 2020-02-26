import React from "react"
import ReactDOM from "react-dom"

import { Provider } from "react-redux"
import { BrowserRouter, Route, Switch, Redirect, RouteProps } from "react-router-dom"

import App from "./shared/components/App"
import Login from './screens/Login'

import useSelector from './shared/hooks/useSelector'
import * as serviceWorker from "./serviceWorker"
import store from "./redux/store"

import "styles"

const RouteLogin = (props: RouteProps) => {
  const isAuth: boolean = useSelector((state) => !!state.auth.token)
  return isAuth ? <Redirect to="/" /> : <Route {...props} />
}

const RoutePrivate = (props: RouteProps) => {
  const isAuth: boolean = useSelector((state) => !!state.auth.token)
  return isAuth ? <Route {...props} /> : <Redirect to="/login" />
}

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <RouteLogin path="/login" component={Login}/>
          <RoutePrivate path="/" component={App} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
