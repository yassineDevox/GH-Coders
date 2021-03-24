import React, { Component } from 'react'
import AuthContext from '../../shared/auth/auth-context'
import ClientsInfo from "../../components/clientsInfo"
import ClientsInfoModel from "../../models/clientsInfoModel"
export default class ManageClientPage extends Component {


    constructor(){
        super()
        this.state={
      
       infolist:[
      new ClientsInfoModel(
          "gus something",
          "4543",
          "ee@de",
)
     
  ]
      
        }
    }
    render() {
        return (

            <div>
               <ClientsInfo
              listclient={this.state.infolist}
              deleteBtn={this.DeleteClient}
               />
            </div>
        )
    }
    DeleteClient=()=>{
      alert(1)
    }


}
ManageClientPage.contextType = AuthContext;