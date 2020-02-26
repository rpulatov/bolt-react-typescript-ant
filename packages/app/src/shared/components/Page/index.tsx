import React, { ReactElement, ReactChild } from "react"

import { PageHeader, Skeleton, Card } from "antd"
// import Title from '../Title'
// import classnames from 'classnames'

import styles from "./page.module.less"
import { useHistory } from "react-router-dom"

interface PageProps {
  loading?: boolean
  fullpage?: boolean
  pageHeader?: {
    breadcrumb?: object
    title: string
    subTitle?: string
    actionButtons?: ReactElement[]
  }
  children: ReactChild | ReactChild[]
}

function Page({ pageHeader, children }: PageProps): ReactElement {
  return (
    <>
      {pageHeader && (
          <PageHeader
            ghost={false}
            title={pageHeader.title}
            subTitle={pageHeader.subTitle}
            breadcrumb={pageHeader.breadcrumb}
            extra={pageHeader.actionButtons}
          />

      )}
      <div className={styles.page}>{children}</div>
    </>
  )
}

export default Page
