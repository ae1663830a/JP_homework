import React from 'react'

const productTitle = (props) => {
    const products = props.productList;
    const listItems = products.map((productCard) =>
        <div>
           <span>{productCard.title}</span> <span>{productCard.price}&euro;</span>
        </div>
    ); return <div className=''>
        {listItems}
    </div>
};

export default productTitle;