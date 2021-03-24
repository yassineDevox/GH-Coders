import React, { Component } from 'react'
import AdminPage from '../shared/adminPlace'
import CategoriePage from './manage-categorie'
export default class AdminPlace extends Component {

    constructor(){
        super()
        this.state={}
    }
    render() {
        return (
          <AdminPage>
              <CategoriePage/>
          </AdminPage>
        )
    }

    handleLogout= ()=>{
        alert(1)
    }
}
