  
import React, { Component } from 'react'
import AdminPage from '../shared/adminPlace'
import CategoriePage from "./manage-categorie"
export default class CategoriesPage extends Component {
    render() {
        return (
          <AdminPage>
                <CategoriePage/>
           </AdminPage>
        )
    }
}