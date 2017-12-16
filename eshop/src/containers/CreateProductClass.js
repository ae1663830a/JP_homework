import React, {Component} from 'react'
import NewProduct from '../components/CreateProduct'
import PropTypes from 'prop-types'
import axios from 'axios'
import Navbar from '../components/Navbar'
import {hashHistory} from 'react-router'

class CreateProductClass extends Component {
    state = {
        id: '',
        title: '',
        description: '',
        price: '',
        image: '',
        quantity: '',
    };


    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    };

    static defaultProps = {
        id: 0,
        title: 'Undefined',
        description: 'Undefined',
        price: 0,
        image: 'Undefined',
        quantity: 0
    };

    titleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    };

    imageChange = (event) => {
        this.setState({
            image: event.target.value
        })
    };

    descriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    };

    priceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    };

    quantityChange = (event) => {
        this.setState({
            quantity: event.target.value
        })
    };

    addProduct = () => {
        const product = this.state;
        axios.post('/productsCollection/', product)
            .then(response => {
                console.log(response);
            });
        hashHistory.replace('/')
    };

    listProducts = () => this.props.router.push('products');
    cancelCreateProduct = () => hashHistory.goBack();

    render() {

        return (
            <div>
                <Navbar
                    home={this.listProducts}
                />

                <NewProduct
                    title={this.state.title}
                    changeTitle={this.titleChange}
                    image={this.state.image}
                    changeImage={this.imageChange}
                    description={this.state.description}
                    changeDescription={this.descriptionChange}
                    price={this.state.price}
                    changePrice={this.priceChange}
                    quantity={this.state.quantity}
                    changeQuantity={this.quantityChange}
                    submitData={this.addProduct}
                    cancelCreate={this.cancelCreateProduct}
                />
            </div>
        )
    }
}

export default CreateProductClass;