import React, { Component } from 'react'
import AdminPage from '../shared/adminPlace'
import ManageClientPage from "./clients info/ManageClientPage"
export default class OrderPage extends Component {
    render() {
        return (
          <AdminPage>
      <ManageClientPage/>
           </AdminPage>
        )
    }
}