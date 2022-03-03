import React from 'react'
import Layout from '../Shared/Layout'

export default function Contacts(props) {
  return (
    <Layout>
      <h1>Contacts</h1>
      <p>Password Detail Page</p>
      <p>{props.foo}</p>
    </Layout>
  )
}