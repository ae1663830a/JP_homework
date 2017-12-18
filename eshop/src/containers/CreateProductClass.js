import React, {Component} from 'react'
import NewProduct from '../components/CreateProduct'
import PropTypes from 'prop-types'
import axios from 'axios'
import Navbar from '../components/Navbar'
import {hashHistory} from 'react-router'

class CreateProductClass extends Component {
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

    // static propTypes = {
    //     id: PropTypes.number,
    //     title: PropTypes.string.isRequired,
    //     description: PropTypes.string.isRequired,
    //     price: PropTypes.number.isRequired,
    //     image: PropTypes.string.isRequired,
    //     quantity: PropTypes.number.isRequired
    // };
    //
    static defaultProps = {
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
        let product = this.state.product;
        let productId = this.props.params.id;
        if (productId === 'new') {
            axios.post('/products/', product).then(response => {
                console.log(response);
            });
        } else {
            axios.put('/products/' + this.state.product.id, this.state.product).then(response => {
                console.log(response)
            })
        }
        hashHistory.replace('/admin')
    };

    componentDidMount() {
        const productId = this.props.params.id;
        if (productId !== 'new')
            axios.get('products/' + productId).then(response => {
                this.setState({product: response.data})
            })
    }

    listProducts = () => this.props.router.push('products');
    adminProducts = () => this.props.router.push('admin');
    cancelCreateProduct = () => hashHistory.goBack();

    render() {

        return (
            <div>
                <Navbar
                    home={this.listProducts}
                    admin={this.adminProducts}
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