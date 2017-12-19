import React from 'react'
import './ProductAdminCard.css'

const productAdminCard = (props) => {
    return (<tr>
        <td>{props.id}</td>
        <td>
            <img id="img" className="img-responsive" src={props.image} alt={props.title + " Image"} title={props.title}/>
        </td>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>
            <button id="buttonEdit" className="btn btn-success" onClick={props.edit}>Edit</button>
        </td>
        <td>
            <button id="buttonDelete" className="btn btn-danger" onClick={props.delete}>Delete</button>
        </td>
    </tr>)
};

export default productAdminCard;