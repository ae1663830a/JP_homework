import React from 'react'
import './ProductDetails.css'

const productDetails = (props) => {
    return (
        <div id="productDetails" className="row">

                <div className="col-xs-12 col-sm-6 md-6">
                    <img className="img-responsive"
                         src={props.image} alt="product"
                         title={props.title}/>
                </div>
                <div className="col-xs-12 col-sm-6 md-6">
                    <h2><b>{props.title}</b></h2>
                    <p>{props.description}</p>
                </div>

            <h3>Product price</h3>
            <h2>{props.price} &euro;</h2>
            <p>
                <button className="btn btn-success" onClick={props.toCart}>Add to cart</button>
                &ensp;
                <button className="btn btn-warning" onClick={props.goBack}>Cancel</button>
            </p>
        </div>
    )
};

export default productDetails;