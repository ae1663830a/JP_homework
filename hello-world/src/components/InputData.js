import React from 'react'

const buttonStyle = {
    width: '22%', height: '45px', backgroundColor: 'darkGreen',
    color: 'white', borderRadius: '10px', border: '3px solid #333', margin: '10px'
};

const inputData = (props) => {
    return (
        <div>
            <form onSubmit={props.submitData}>
                {props.value}<br/>
                Enter name:
                <input type="text" value={props.value} onChange={props.changing}/><br/>
                <input type="submit" value="Submit" style={buttonStyle}/>
            </form>
        </div>
    )
};

export default inputData;