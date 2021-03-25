import React from "react";

export default function ClientsInfo(props) {
  return (
    <div>
      <table className="table table-bordred table-striped ">
        <thead>
          <tr>
            <th  scope="col ">fullname</th>
            <th  scope="col">Phone Number</th>
            <th  scope="col">Email</th>
            <th  scope="col">delete client</th>
          </tr>
        </thead>

        <tbody>
        {props.listclient.map(list =>{
           
                return(
                    <tr>
                    <td>{list.fullname}</td>
                    <td>{list.phoneNumber}</td>
                    <td>{list.email}</td>
                    <td>
                      <button 
                      key={list.id}
                      onClick={()=>props.deleteBtn(list.id)}
                      type="button" 
                      className="btn btn-danger">
                        <i class="fas fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                )

                }

        )}
         
        </tbody>
      </table>
    </div>
  );
}
