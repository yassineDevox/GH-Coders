import React, { Component } from 'react'
import CategorieModal from '../models/categorie-model'
import Categorie from '../components/categorie'

export default class CategoriePage extends Component {
    constructor(){
        super()
        this.state = {
          id:"",
          name:"",
          description:"",
          updateCat_id: -1,
          list_categorie_data:[],
          backupList:[],
        }
      }
    render() {
        return (
            <Categorie 
            handleChange={this.handleChangeInput}
            handleAddSubmit={this.handleAdd}
            handleEditCategorie={this.handleEditCat}
            handleEditSubmit={this.submitEditCat}
            handleDeleteSubmit={this.handleDelete}
            dataList={this.state.list_categorie_data}
 
            name={this.state.name}
            description={this.state.description}
            />
        )
    }

    handleChangeInput = (event) => {
        let value = event.target.value;
        let input = event.target.name;
         console.log(value, input)
        this.setState({ [input]: value })
      }
    
    handleAdd = (event) =>{
        event.preventDefault();
        event.target.reset();
    if (this.state.name == "" || this.state.description == "" ) {
        alert("veuillez remplir tous les champs")
      }
      else{
          let newCategorie = new CategorieModal(
              0,
              this.state.name,
              this.state.description          
              );
              this.setState({
                name: "",
                description: "",
              })
              //ajouter categorie 
              let nvCategorie = this.state.list_categorie_data;
        
              nvCategorie.push(newCategorie);
              this.setState({ list_categorie_data: nvCategorie });
        
              const data_categorie = {
                name: newCategorie.name,
                description: newCategorie.description,
                
              }
              console.log(data_categorie)
              //ajouter une categorie a la partie serveur "firebase" avec axios
              axios.post("categorie.json", data_categorie).then((response) => {
                // console.log(response)
                let id_new_categorie = response.dataList.name;
                //chercher la categorie qui a l'id == 0 sur la liste
                let newCategorie = this.state.list_categorie_data;
                newCategorie.forEach(c => {
                  if (c.id == 0) {
                    c.id = id_new_categorie;
                  }
                  
                })
                this.setState({ list_categorie_data: newCategorie })
              })
      
    }
}
componentDidMount() {
  axios.get("categorie.json").then((response) => {
    if (response.data != null) {
      //extraire toutes les cles du l'objet data
      let keys = Object.keys(response.data)
      //parcourir les keys
      let listCategorie = keys.map((k) => {
        console.log(response)
        let cat = new CategorieModal(
          k,
          response.data[k].name,
          response.data[k].description
        );
        return cat;
        //affichage des proprietes de l'objet datalist

      });

      //ajouter la liste
      this.setState({ list_categorie_data: listCategorie })
      //ajouter un backup a la liste
      this.setState({backupList: listCategorie })
      console.log(listCategorie)
    }
  })
}
handleEditCat = (editCat)=>{
    this.setState({
        name: editCat.name,
        description: editCat.description,
        updateCat_id: editCat.id,
      })
}

submitEditCat =(event)=>{

    event.preventDefault();
    //partie data a envoyer a firebase
    const categorie_data = {
      name:this.state.name,
      description:this.state.description,
    }
    //appe a la fonction put de axios
    axios.put("categorie/"+this.state.updateCat_id+".json",categorie_data).then((response)=>{
      //changer les infos du categorie
      let newList = this.state.list_categorie_data;
      newList.forEach((c)=>{
        if(c.id==this.state.updateCat_id){
  
          c.name=response.data.name;
          c.description=response.data.description;
        }
      });
      //modifier la liste du state
      this.setState({list_categorie_data:newList})
      //vider le formulaire 
      event.target.reset();
      //vider les variables state
      this.setState({
        name:"",
        description:"",
        updateCat_id: -1,
      })
    })
}

handleDelete = (idCat) => {

    let choice = window.confirm('Are you sure ?');
    if (choice == true) {
      //supp un Catdepuis firebase
      axios.delete("Categorie/" + idCat + ".json").then(() => {
        //supp dans html
        let newList = this.state.list_categorie_data.filter(
          (s) => s.id != idCat
        )
        this.setState({ list_categorie_data: newList })
      })

    }
  }
}
