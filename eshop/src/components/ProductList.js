import React from 'react'
import ProductCard from './ProductCard'

const productList = (props) => {
    const products = props.productList;
    const listItems = products.map((productCard, index) =>
        <ProductCard
            key={index}
            id={productCard.id}
            description={productCard.description}
            price={productCard.price}
            image={productCard.image}
        />);
    return (
        <div className="row">
            {listItems}
        </div>
    )
};

export default productList;