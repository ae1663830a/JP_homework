import React, {Component} from 'react';
import './App.css';
import ProductList from '../components/ProductList'
import phone from '../assets/phone.jpg'
import PropTypes from 'prop-types'

class App extends Component {

    state = {
        productList: [
            {id: '1', description: 'new phone', price: '20', image: phone},
            {id: '2', description: 'new phone', price: '20', image: phone},
            {id: '3', description: 'new phone', price: '20', image: phone},
            {id: '4', description: 'new phone', price: '20', image: phone},
            {id: '5', description: 'new phone', price: '20', image: phone},
            {id: '6', description: 'new phone', price: '20', image: phone},
            {id: '7', description: 'new phone', price: '20', image: phone},
            {id: '8', description: 'new phone', price: '20', image: phone}
        ]
    };

    static propTypes = {
        productList: PropTypes.shape({
            id: PropTypes.number.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired
        })
    };

    render() {
        return (
            <ProductList
                productList={this.state.productList}
                key={this.state.productList.id}
            />
        );
    }
}

export default App;