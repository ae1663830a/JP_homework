import React, {Component} from 'react'
import NewProduct from './NewProduct'

class Product extends Component {
    state = {
        id: '',
        title: '',
        description: '',
        price: '',
        image: '',
        quantity: ''
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

    saveData = (event) => {
        console.log(this.state);
        event.preventDefault()
    };


    render() {
        return(
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
            submitData={this.saveData}
            />
        )
    }
}

export default Product;