import React from 'react'

const productCartSum = (props) => {
    const products = props.productList;
    const cartSum = products.reduce((sum, product) => sum + product.price, 0);
    return (
        <div>
            <span>{cartSum}&euro;</span>
        </div>
    )
};

export default productCartSum;