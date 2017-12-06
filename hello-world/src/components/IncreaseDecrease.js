import React from 'react'

const increaseDecrease = (props) => {
    return (
        <div>
            <button className="btn btn-default"
                    onClick={props.increase}>
                Increase
            </button>
            <button className="btn btn-default"
                    onClick={props.decrease}>
                Decrease
            </button>
        </div>
    )
};

export default increaseDecrease;
