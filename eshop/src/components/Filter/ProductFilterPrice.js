import React from 'react'
import ProductCard from '../ProductCard'

const productFilterPrice = (props) => {
    const products = props.productList;
    const listItems = products.filter(productCard => productCard.price < 50)
        .map(productCard =>
            <ProductCard
                key={productCard.id}
                title={productCard.title}
                description={productCard.description}
                price={productCard.price}
                image={productCard.image}
            />
        );
    return (
        <div className="row">
            {listItems}
        </div>
    )
};

export default productFilterPrice;