import React from "react"

export interface RoutePageProps {
  label: string
  icon: string
  pageKey: string
  defaultPage: boolean
  component: React.ComponentType<any>
  children?: React.ReactElement
}

function RoutePage({ children }: RoutePageProps): React.ReactElement | null {
  return children ? children : null
}

export default RoutePage
