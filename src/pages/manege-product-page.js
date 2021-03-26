import React, { Component } from 'react'
import Product from '../components/products'
import ProductModal from '../models/product-model'
import CategorieModal from "../models/categorie-model"
import ThemeAdmin from './../theme/admin'
import axios from '../utils/axios'

export default class ProductPage extends Component {
    constructor(){
        super()
        this.state = {
          image:"",  
          name:"",
          description:"",
          categorie:"",
          price:"",
          quantity:"",
          updatePro_id: -1,
          list_product_data:[],
          action: "ADD",
          list_categorie_data:[]
        }
      }
    render() {
        return (
          <ThemeAdmin>
               <Product
           handleChange={this.handleChangeInput}
           handleAddSubmit={this.handleAdd}
           handleEditProduct={this.handleEditPro}
           handleEditSubmit={this.submitEditPro}
           handleDeleteSubmit={this.handleDelete}
           dataList={this.state.list_product_data}

           image={this.state.image}
           name={this.state.name}
           description={this.state.description}
           categorie={this.state.categorie}
           price={this.state.price}
           quantity={this.state.quantity}
           action={this.state.action}
           list_categorie_data={this.state.list_categorie_data}
           
           />
          </ThemeAdmin>
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
    if (this.state.image == "" || this.state.name == "" || this.state.description == "" || this.state.categorie == "" || this.state.price == "" || this.state.quantity == "" ) {
        alert("veuillez remplir tous les champs")
      }
      else{
          let newProduct = new ProductModal(
              0,
              this.state.image,
              this.state.name,
              this.state.description,
              this.state.categorie,
              this.state.price,
              this.state.quantity,          
              );
              this.setState({
                image: "",
                name: "",
                description: "",
                categorie: "",
                price: "",
                quantity: "",
              })
              //ajouter product
              let nvProduct = this.state.list_product_data;
        
              nvProduct.push(newProduct);
              this.setState({ list_product_data: nvProduct });
        
              const data_product = {
                image: newProduct.image,
                name: newProduct.name,
                description: newProduct.description,
                categorie: newProduct.categorie,
                price: newProduct.price,
                quantity: newProduct.quantity,
                
              }
              console.log(data_product)
              //ajouter un produit a la partie serveur "firebase" avec axios
              axios.post("product.json", data_product).then((response) => {
                console.log(response)
                let id_new_product = response.data.name;
                //chercher le produit qui a l'id == 0 sur la liste
                let newProduct = this.state.list_product_data;
                newProduct.forEach(p => {
                  if (p.id == 0) {
                    p.id = id_new_product;
                  }
                  
                })
                this.setState({ list_product_data: newProduct })
              })
      
    }
   
}
componentDidMount() {
// axios cat 

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







    axios.get("product.json").then((response) => {
      if (response.data != null) {
        //extraire toutes les cles du l'objet data
        let keys = Object.keys(response.data)
        //parcourir les keys
        let listProduct = keys.map((k) => {
          console.log(response)
          let pro = new ProductModal(
            k,
            response.data[k].image,
            response.data[k].name,
            response.data[k].description,
            response.data[k].categorie,
            response.data[k].price,
            response.data[k].quantity,
          );
          return pro;
          //affichage des proprietes de l'objet datalist
  
        });
  
        //ajouter la liste
        this.setState({ list_product_data: listProduct })
        //ajouter un backup a la liste
        this.setState({backupList: listProduct })
        console.log(listProduct)
      }
    })
  }

  handleEditPro = (editPro)=>{
    //changer l'action de state
    this.setState({ action: "EDIT" })
    
    this.setState({
        image: editPro.image,
        name: editPro.name,
        description: editPro.description,
        categorie: editPro.categorie,
        price: editPro.price,
        quantity: editPro.quantity,
        updatePro_id: editPro.id,
      })
}

submitEditPro =(event)=>{
    this.setState({
        image:'' ,
        name:'' ,
        description: '',
        categorie:'' ,
        price:'' ,
        quantity:'' ,
    })

    event.preventDefault();
    //partie data a envoyer a firebase
    const product_data = {
      image:this.state.image,
      name:this.state.name,
      description:this.state.description,
      categorie:this.state.categorie,
      price:this.state.price,
      quantity:this.state.quantity,
    }
    //appel a la fonction put de axios
    axios.put("product/"+this.state.updatePro_id+".json",product_data).then((response)=>{
      //changer les infos du produit
      let newList = this.state.list_product_data;
      newList.forEach((p)=>{
        if(p.id==this.state.updatePro_id){
  
          p.image=response.data.image;
          p.name=response.data.name;
          p.description=response.data.description;
          p.categorie=response.data.categorie;
          p.price=response.data.price;
          p.quantity=response.data.quantity;
        }

      });
      
      //modifier la liste du state
      this.setState({list_product_data:newList})
      
    })
    
}

  handleDelete = (idPro) => {

    let choice = window.confirm('Are you sure ?');
    if (choice == true) {
      //supp un produit depuis firebase
      axios.delete("product/" + idPro + ".json").then(() => {
        //supp dans html
        let newList = this.state.list_product_data.filter(
          (p) => p.id != idPro
        )
        this.setState({ list_product_data: newList })
      })

    }
  }
}
