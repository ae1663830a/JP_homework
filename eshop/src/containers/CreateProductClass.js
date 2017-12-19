import React, {Component} from 'react'
import NewProduct from '../components/CreateProduct'
import PropTypes from 'prop-types'
import axios from 'axios'
import Navbar from '../components/Navbar'
import {browserHistory} from 'react-router'

class CreateProductClass extends Component {
    state = {
        product: {
            id: '',
            image: '',
            title: '',
            description: '',
            price: '',
            quantity: ''
        }
    };

    static propTypes = {
        id: PropTypes.number,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        quantity: PropTypes.number.isRequired
    };

    static defaultProps = {
        title: 'Undefined',
        description: 'Undefined',
        price: 0,
        image: 'Undefined',
        quantity: 0
    };

    changeValueHandler = (fieldName) => {
        return (
            (event) => {
                const changedProduct = this.state.product;
                changedProduct[fieldName] = event.target.value;
                this.setState({product: changedProduct})
            }
        )
    };

    addProduct = () => {
        const product = this.state.product;
        const productId = this.props.params.id;
        if (productId === 'new') {
            axios.post('/products/', product).then(response => {
                console.log(response);
            }).catch(error => {
                console.log('Error = ' + error)
            })
        } else {
            axios.put('/products/' + productId, product).then(response => {
                console.log(response)
            }).catch(error => {
                console.log('Error = ' + error)
            })
        }
        browserHistory.replace('/admin')
    };

    componentDidMount() {
        const productId = this.props.params.id;
        if (productId !== 'new')
            axios.get('products/' + productId).then(response => {
                this.setState({product: response.data})
            }).catch(error => {
                console.log('Error = ' + error)
            })
    }

    listProducts = () => this.props.router.push('products');
    adminProducts = () => this.props.router.push('admin');
    cancelCreateProduct = () => browserHistory.goBack();

    render() {

        return (
            <div>
                <Navbar
                    home={this.listProducts}
                    admin={this.adminProducts}
                />

                <NewProduct
                    title={this.state.product.title}
                    image={this.state.product.image}
                    description={this.state.product.description}
                    price={this.state.product.price}
                    quantity={this.state.product.quantity}
                    onFieldChange={this.changeValueHandler}
                    submitData={this.addProduct}
                    cancelCreate={this.cancelCreateProduct}
                />
            </div>
        )
    }
}

export default CreateProductClass;