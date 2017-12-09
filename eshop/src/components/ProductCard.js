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

const productCard = (props) => {
    return (
        <div className="col-xs-12 col-sm-4 col-md-2">
            <div className="thumbnail" style={style.thumbnail}>
                <img src={props.image} style={style.imageCss} alt="..."/>
                <div className="caption">
                    <p>{props.description}</p>
                    <p>{props.price} &euro;</p>
                    <p>
                        <button className="btn btn-danger" role="button">Details</button>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default productCard;