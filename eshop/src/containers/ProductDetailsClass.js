import React, {Component} from 'react'
import Navbar from '../components/Navbar'
import ProductDetails from '../components/ProductDetails'
import {hashHistory} from 'react-router'
import axios from 'axios'
import phone from '../assets/phones.jpg'

class ProductDetailsContainer extends Component {

    state = {
        product: {
            id: 0,
            image: '',
            title: '',
            description: '',
            price: 0,
            quantity: 0
        }
    };

    adminProducts = () => this.props.router.push('createproduct');
    listProducts = () => this.props.router.push('products');
    goBack = () => hashHistory.goBack();

    componentDidMount() {
        axios.get('products/' + this.props.params.id).then(response => {
            const product = response.data;
            // const updatedProduct = {...product, image: phone};
            this.setState({product: product})
        })
    }

    render() {
        return (
            <div>
                <Navbar
                    create={this.adminProducts}
                    home={this.listProducts}/>

                <ProductDetails
                    goBack={this.goBack}
                    key={this.state.product.id}
                    title={this.state.product.title}
                    description={this.state.product.description}
                    price={this.state.product.price}
                    image={this.state.product.image}
                />
            </div>
        )
    }
}

export default ProductDetailsContainer;