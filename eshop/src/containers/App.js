import React, {Component} from 'react';
import './App.css';
import ProductList from '../components/ProductList'
import phone from '../assets/phone.jpg'
import PropTypes from 'prop-types'
import ProductTitle from '../components/Filter/ProductTitleAndPrice'
import ProductFilterPrice from '../components/Filter/ProductFilterPrice'
import ProductCartSum from '../components/Filter/ProductCartSum'
import axios from 'axios'
import Navbar from '../components/Navbar'

class App extends Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired
    };

    static defaultProps = {
        id: 0,
        title: 'Undefined',
        description: 'Undefined',
        price: 0,
        image: 'Undefined'
    };

    state = {
        productList: [
            {id: 1, title: 'Phone', description: 'new phone', price: 3, image: phone},
            {id: 2, title: 'iPhone', description: 'new phone', price: 6, image: phone},
            {id: 3, title: 'Samsung', description: 'old phone', price: 5, image: phone},
            {id: 4, title: 'Old', description: 'new phone', price: 4, image: phone},
            {id: 5, title: 'Samsung', description: 'new phone', price: 12, image: phone},
            {id: 6, title: 'SE', description: 'new phone', price: 34, image: phone},
            {id: 7, title: 'CAT', description: 'new phone', price: 21, image: phone},
            {id: 8, title: 'Sony', description: 'new phone', price: 12, image: phone}
        ]
    };

    deleteProduct = (index) => {
        const newProducts = [...this.state.productList]; // Creates a new array of persons by copying the persons array.
        newProducts.splice(index, 1); // Remove elements: starting at personIndex, 1 = total number of elements to remove.
        this.setState({
            productList: newProducts // Re-assign (in classes state) persons array after deletion.
        })
    };

    titlePrice = (index) => {
        const product = this.state.productList[index];
        console.log(product.title, product.price)
    };

    titles = () => {
        const titleName = this.state.productList.reduce((sum, amTitle) => {
            return sum + ', ' + amTitle.title;
        });
        console.log(titleName)
    };

    ifSamsung = () => {
        const sumsungPhones = this.state.productList
            .filter(phone => phone.title === 'Samsung')
            .map(phone => phone.description);
        console.log(sumsungPhones)
    };

    goProducts = () => this.props.router.push('createproduct');
    goProducts1 = () => this.props.router.push('/');

    componentDidMount() {
        axios.get('/products/')
            .then(response => {
                const products = response.data.slice(0, 20);
                // const updatedProducts = products.map(product => {
                //     return {
                //         ...product, image: phone
                //     }
                // });
                this.setState({
                    productList: products
                })
            })
    }

    deleteProduct1 = (index) => {
        axios.delete('/products/' + this.state.productList[index].id)
            .then(response => {
                console.log(response)
            })
    };

    render() {

        return (
            <div>
                <Navbar
                    create={this.goProducts}
                    home={this.goProducts1}
                />
                <ProductList
                    productList={this.state.productList}
                    key={this.state.productList.id}
                    clicked={this.deleteProduct1}/>

                <ProductTitle
                    productList={this.state.productList}
                    key={this.state.productList.id}/>

                <ProductFilterPrice
                    productList={this.state.productList}
                    key={this.state.productList.id}
                    clicked={this.ifSamsung}
                />

                <ProductCartSum
                    productList={this.state.productList}
                />
            </div>
        );
    }
}

export default App;