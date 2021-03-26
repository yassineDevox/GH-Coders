import React, { Component } from 'react'
import AdminPage from '../shared/adminPlace'
import ManageClientPage from "./clients info/ManageClientPage"
export default class clientInfoPage extends Component {
    render() {
        return (
          <AdminPage>
      <ManageClientPage/>
           </AdminPage>
        )
    }
}