import React, { Component } from "react";
import AuthContext from "../../shared/auth/auth-context";
import ClientsInfo from "../../components/clientsInfo";
import ClientsInfoModel from "../../models/clientsInfoModel";
export default class ManageClientPage extends Component {
  constructor() {
    super();
    this.state = {
      infolist: [
        new ClientsInfoModel(
          "gus something", 
          "4543",
           "ee@de", 
           "1")],

           backupList:[
             
           ]

           
    };
  }

  componentDidMount() {
    axios.get("/clients.json").then((response) => {
      if (response.data != null) {
        //extraire toutes les cles du l'objet data
        let keys = Object.keys(response.data)
        //parcourir les keys
        let listCategorie = keys.map((c) => {
          console.log(response)
          let Nclient = new ClientsInfoModel(
            c,
            response.data[c].fullname,
            response.data[c].phoneNumber,
            response.data[c].email,
            response.data[c].id
          );
          return Nclient;
          //affichage des proprietes de l'objet datalist
  
        });
  
        //ajouter la liste
        this.setState({ infolist: listCategorie})
        //ajouter un backup a la liste
        this.setState({backupList: listCategorie })
        console.log(listCategorie)
      }
    })
  }


  render() {
    return (
      <div>
        <ClientsInfo
          listclient={this.state.infolist}
          deleteBtn={this.DeleteClient}
        />
      </div>
    );
  }
  DeleteClient = (idClient) => {
    console.log(idClient);
  };
}
ManageClientPage.contextType = AuthContext;
