import React from 'react'

const style = {
    imageCss: {
        display: 'block',
        width: '100%',
        height: '150px'
    },
    thumbnail: {
        maxWidth: '170px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        border: '1px solid red',
    }
};

const productDetails = (props) => {
    return (
        <div className="col-xs-12 col-sm-4 col-md-3 col-lg-2">
            <div className="thumbnail" style={style.thumbnail}>
                <img src={props.image} style={style.imageCss} alt="..."/>
                <div className="caption">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <p>{props.price} &euro;</p>
                    <p>
                        <button className="btn btn-warning" role="button" onClick={props.goBack}>go back</button>
                        <button className="btn btn-success" onClick={props.toCart}>Add to cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default productDetails;