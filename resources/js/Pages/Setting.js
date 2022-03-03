import React from 'react'
import Layout from '../Shared/Layout'

export default function Setting(props) {
  return (
    <Layout>
      <h1>Settings</h1>
      <p>Password Detail Page</p>
      <p>{props.foo}</p>
    </Layout>
  )
}