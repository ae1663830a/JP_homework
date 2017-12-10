import React from 'react'
import ProductCard from './ProductCard'
import PropTypes from 'prop-types'

const productList = (props, index) => {
    const products = props.productList;
    const listItems = products.map((productCard, index) =>
        <ProductCard
            key={productCard.id}
            title={productCard.title}
            description={productCard.description}
            price={productCard.price}
            image={productCard.image}
            click={() => props.clicked(index)}
        />
    );
    return (
        <div className="row">
            {listItems}
        </div>
    )
};
//
// productList.propTypes = {
//     productList: PropTypes.array.isRequired
// };

export default productList;