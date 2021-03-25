import React from 'react'

export default function Categorie(props) {
    return (
        <div className='w-75 m-auto'>
            <form onSubmit={props.action==="ADD" ? props.handleAddSubmit : props.handleEditSubmit}>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input onChange={props.handleChange} type="text" value={props.name} name='name' className="form-control" placeholder="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
                    <textarea onChange={props.handleChange} className="form-control" value={props.description} name='description' rows={3} defaultValue={""} />
                </div>
                <button type="submit" className="btn btn-primary d-flex justify-content-center">ADD</button>
            </form>
            <div className="text-center mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Manage Categories</h4>
                            <div className="table-responsive">
                                <table id="mytable" className="table table-bordred table-striped">
                                    <thead>
                                        <th><input type="checkbox" id="checkall" /></th>
                                        <th>ID</th>
                                        <th>Name of Categorie</th>
                                        <th>Description</th>


                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </thead>
                                    <tbody>

                                        {props.dataList.map(c => {
                                            return (
                                                <tr>
                                                    <td><input type="checkbox" className="checkthis" /></td>
                                                    <td>{c.id}</td>
                                                    <td>{c.name}</td>
                                                    <td>{c.description}</td>

                                                    <td><button type="button" onClick={()=>props.handleEditCategorie(c)} className="btn btn-success btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit"><i className="fas fa-edit" aria-hidden="true"></i></button></td>
                                                    <td><button type="button" onClick={()=>props.handleDeleteSubmit(c.id)} className="btn btn-danger btn-xs"><i className="fa fa-trash" aria-hidden="true"></i></button></td>
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


        </div>
    )
}