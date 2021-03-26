import React from 'react'

export default function Product(props) {
    return (
        <div className='w-75 m-auto'>
            <form onSubmit={props.action == "ADD" ? props.handleAddSubmit : props.handleEditSubmit}>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Image</label>
                    <input onChange={props.handleChange} type="url" value={props.image} name='image' className="form-control" placeholder="image" />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input onChange={props.handleChange} type="text" value={props.name} name='name' className="form-control" placeholder="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Discription</label>
                    <textarea onChange={props.handleChange} className="form-control" value={props.description} name='description' rows={3} defaultValue={""} />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Categorie</label>
                    <select  value={props.categorie} onChange={props.handleChange} className="form-select" aria-label="Default select example" name="categorie">
                        <option selected>Open this select menu</option>
                        {props.list_categorie_data.map(p=>
                        <option value={p.name}>{p.name}</option>)}
                       
                    </select>

                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                    <input onChange={props.handleChange} type="text" value={props.price} name='price' className="form-control" placeholder="price" />
                </div>
                <div className="mb-3 ">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Quantity</label>
                    <input onChange={props.handleChange} type="text" value={props.quantity} name='quantity' className="form-control" placeholder="quantity" />
                </div>
                <button type="submit" className="btn btn-primary d-flex justify-content-center">ADD</button>
            </form>
            <div className="text-center mt-5">
                <div>
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Manage Products</h4>
                            <div className="table-responsive">
                                <table id="mytable" className="table table-bordred table-striped">
                                    <thead>
                                        <th><input type="checkbox" id="checkall" /></th>
                                        <th>ID</th>
                                        <th>Image</th>
                                        <th>Name of Product</th>
                                        <th>Description</th>
                                        <th>Categorie</th>
                                        <th>Price</th>
                                        <th>Quantity</th>

                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </thead>
                                    <tbody>

                                        {props.dataList.map(p => {
                                            return (
                                                <tr>
                                                    <td><input type="checkbox" className="checkthis" /></td>
                                                    <td>{p.id}</td>
                                                    <td><img height="50" width="50" src={p.image} alt="image-product" /></td>
                                                    <td>{p.name}</td>
                                                    <td>{p.description}</td>
                                                    <td>{p.categorie}</td>
                                                    <td>{p.price}</td>
                                                    <td>{p.quantity}</td>

                                                    <td><button type="button" onClick={() => props.handleEditProduct(p)} className="btn btn-success btn-xs" data-title="Edit" data-toggle="modal" data-target="#edit"><i className="fas fa-edit" aria-hidden="true"></i></button></td>
                                                    <td><button type="button" onClick={() => props.handleDeleteSubmit(p.id)} className="btn btn-danger btn-xs"><i className="fa fa-trash" aria-hidden="true"></i></button></td>
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
