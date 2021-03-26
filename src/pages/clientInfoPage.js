import React, { Component } from 'react'
import AdminPage from '../theme/admin'
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