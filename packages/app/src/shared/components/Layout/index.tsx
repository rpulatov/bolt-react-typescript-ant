import React from "react"

import { Layout as LayoutAnt, Menu, Icon } from "antd"
import { Switch, NavLink, useRouteMatch, Route } from "react-router-dom"

import NotFound from "screens/NotFound"
import { RoutePageProps } from "../RoutePage"

import styles from "./layout.module.less"

const { Header, Content, Sider } = LayoutAnt

type LayoutProps = {
  children: React.ReactElement<RoutePageProps> | React.ReactElement<RoutePageProps>[]
}

type MenuItemType = {
  label: string
  icon: string
  pageKey: string
  defaultPage: boolean
}

function Layout({ children }: LayoutProps) {
  const [collapsed, setCollapsed] = React.useState(false)

  const pages = React.useMemo(() => {
    const menuList: MenuItemType[] = []
    const routes: React.ReactElement[] = []

    React.Children.forEach(children, route => {
      if (React.isValidElement(route)) {
        const { pageKey, defaultPage, component } = route.props
        if (defaultPage) {
          routes.push(<Route key="/" path="/" exact component={component} />)
        }
        routes.push(<Route key={pageKey} path={`/${pageKey}`} component={component} />)
        menuList.push(route.props)
      }
    })
    routes.push(<Route key="*" path="*" component={NotFound} />)

    return {
      routes,
      menuList,
    }
  }, [children])

  const match = useRouteMatch<{ key: string }>("/:key")
  const selectedMenu = pages.menuList.find(item =>
    match ? item.pageKey === match.params.key : item.defaultPage
  )

  return (
    <LayoutAnt className={styles.mainLayout}>
      <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
        <div className={styles.logo}>
          <img src="./logo192.png" alt="" />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={selectedMenu ? [selectedMenu.pageKey] : undefined}
          mode="inline"
        >
          {pages.menuList.map(menuItem => (
            <Menu.Item key={menuItem.pageKey}>
              <NavLink to={`/${menuItem.pageKey}`}>
                <Icon type={menuItem.icon} />
                <span>{menuItem.label}</span>
              </NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <LayoutAnt>
        <Header className={styles.header}/>
        <Content className={styles.content}>
          <Switch>{pages.routes}</Switch>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>Bill is a cat.</div> */}
        </Content>
      </LayoutAnt>
    </LayoutAnt>
  )
}

export default Layout
