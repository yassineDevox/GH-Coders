import React from "react";


export default function Order(props) {
    return (

  <div className="text-center mt-5">
        <div >
       <div className="row">
           <div className="col-md-12">
               <h4>Manage Orders</h4>
               <div className="table-responsive">
                   <table id="mytable" className="table table-bordred table-striped">
                       <thead>
                           
                           <th>ID</th>
                           <th>Fullname</th>
                           <th>Phone Number</th>
                           <th>Product</th>
                           <th>Quantity</th>
                           <th>Price</th>
                           <th>Status</th>



                       </thead>
                       <tbody>
      {props.listOrder.map( o =>
        {
            return(
     <tr>


          <td>{o.id}</td>
          <td>{o.fullname}</td>
          <td>{o.phoneNumber}</td>
          <td>{o.product}</td>
          <td>{o.quantity}</td>
          <td>{o.price}</td>
          <span className={o.status=="En attent"?"badge bg-warning text-white" :"d-none"}>En Attent</span>
          <span className={o.status=="Annuler"?"badge bg-danger text-white" :"d-none"}>Annuler</span>
          <span className={o.status=="Confirmer"?"badge bg-success text-white" :"d-none"}>Confirmer</span>

     </tr>
     )
    }
    )}


                       </tbody>
                   </table>
               </div>
           </div>
       </div>
   </div>
</div>



 
    )
}
