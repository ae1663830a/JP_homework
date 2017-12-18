import React from 'react'
import './ProductCard.css'

const productCard = (props) => {
    return (
        <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
            <div className="thumbnail" id="thumbnail" >
                <img src={props.image} id="productCard" alt="..."/>
                <div className="caption">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <p>{props.price} &euro;</p>
                    <p>
                        <button className="btn btn-danger" onClick={props.click}>Details</button>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default productCard;