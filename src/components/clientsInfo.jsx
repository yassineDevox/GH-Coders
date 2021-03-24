import React from "react";

export default function ClientsInfo(props) {
  return (
    <div>
      <table className="table ">
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
                    <th scope="col">{list.fullname}</th>
                    <td>{list.phoneNumber}</td>
                    <td>{list.email}</td>
                    <td>
                      <button 
                      onClick={()=>props.deleteBtn(list)}
                      type="button" 
                      className="btn btn-danger">
                        remove <i class="fas fa-trash"></i>
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
