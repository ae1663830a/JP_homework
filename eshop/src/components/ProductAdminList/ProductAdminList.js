import React from 'react'
import ProductAdminCard from './ProductAdminCard'

const productAdminList = (props) => {
    const products = props.productList;

    if (products.length === 0) {
        return <div><h1>Loading</h1></div>
    }
    const listItems = products.map((productAdminCard, index) =>
        <ProductAdminCard
            id={productAdminCard.id}
            key={productAdminCard.id}
            image={productAdminCard.image}
            title={productAdminCard.title}
            description={productAdminCard.description}
            edit={() => props.editProduct(index)}
            delete={() => props.deleteProduct(index)}
        />
    );
    return (
        <div>
            <table className="table">
                <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Edit Product</th>
                    <th>Delete Product</th>
                </tr>
                </thead>
                <tbody>{listItems}</tbody>
            </table>
        </div>
    )
};

export default productAdminList;