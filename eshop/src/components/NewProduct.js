import React from 'react'

const newProduct = (props) => {
    return (
        <div>
            <form onSubmit={props.submitData}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Product title"
                           key={props.id}
                           value={props.title}
                           onChange={props.changeTitle}/>
                </div>
                <div className="form-group">
                    <label>Image Url</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Product image URL"
                           value={props.image}
                           onChange={props.changeImage}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Product description"
                           value={props.description}
                           onChange={props.changeDescription}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Product price"
                           value={props.price}
                           onChange={props.changePrice}/>
                </div>
                <div className="form-group">
                    <label>Quantity</label>
                    <input type="text"
                           className="form-control"
                           placeholder="Product quantity"
                           value={props.quantity}
                           onChange={props.changeQuantity}
                    />
                </div>
                <input type="submit" className="btn btn-success" value="Submit"/>
            </form>
        </div>
    )
};

export default newProduct;