import React, {Component} from 'react'
import NewProduct from '../components/NewProduct'
import PropTypes from 'prop-types'
import axios from 'axios'
import Navbar from '../components/Navbar'

class Product extends Component {
    state = {
        id: '',
        title: '',
        description: '',
        price: '',
        image: '',
        quantity: ''
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
        axios.post('https://itpro2017.herokuapp.com/api/products', product)
            .then(response => {
                console.log(response)
            })
    };

    render() {
        return (
            <div>
                <Navbar/>
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
                />
            </div>
        )
    }
}

export default Product;