import React, { Component } from 'react'
import Order from '../components/order'
import OrderModel from "../models/order-model"
import ThemeAdmin from './../theme/admin'

export default class OrderPagep extends Component {
    constructor(){
        super();
        this.state={
            list_order_data:[
        new OrderModel("1","anas anas","0601010101","phone","5","100€","Annuler"),
        new OrderModel("2","amine amine","0602020202","phone","3","50€","Confirmer")
            ]
        }
    }
    render() {
        return (
          <ThemeAdmin>
            <Order
            listOrder={this.state.list_order_data}
            />
            </ThemeAdmin>

        )
    }


}
