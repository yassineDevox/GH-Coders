import React from 'react'

export default function Categorie(props) {
    return (

        <div className='w-75 m-auto'>
            <form onSubmit={props.handleAddSubmit}>
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

                                                    <td><button type="button" onClick={()=>props.handleEditCategorie(props.dataList)} className="btn btn-success btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit"><i className="fas fa-edit" aria-hidden="true"></i></button></td>
                                                    <td><button type="button" onClick={props.handleDeleteSubmit} className="btn btn-danger btn-xs"><i className="fa fa-trash" aria-hidden="true"></i></button></td>
                                                </tr>
                                            )
                                        }
                                        )}
                                    </tbody>
                                </table>

                                {/* modal form edit */}
                                <div className="modal fade" id="edit" tabIndex={-1} aria-labelledby="editCat" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="editCat">Edit Categorie</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                            </div>
                                            <div className="modal-body">
                                                <form onSubmit={props.handleEditSubmit}>
                                                    <div className="mb-3 ">
                                                        <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                                        <input type="text" value={props.name} name='name' className="form-control" placeholder="name" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
                                                        <textarea className="form-control" value={props.description} name='description' rows={3} defaultValue={""} />
                                                    </div>
                                                    <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button" className="btn btn-primary">Save changes</button>
                                            </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>



    )
}
