import React from 'react'

const productAdminCard = (props) => {
    return (<tr>
        <td>{props.id}</td>
        <td>
            <img id="img" className="img-responsive" style={{width: '80px'}}
                 src={props.image} alt={props.title + " Image"} title={props.title}/>
        </td>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>
            <button className="btn btn-success" onClick={props.edit}>Edit</button>
        </td>
    </tr>)
};

export default productAdminCard;