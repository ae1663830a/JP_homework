import React, {Component} from 'react';
import './ProductListClass.css';
import ProductList from '../components/ProductList'
import PropTypes from 'prop-types'
import ProductTitle from '../components/Filter/ProductTitleAndPrice'
import ProductFilterPrice from '../components/Filter/ProductFilterPrice'
import ProductCartSum from '../components/Filter/ProductCartSum'
import axios from 'axios'
import Navbar from '../components/Navbar'
import phone from '../assets/phones.jpg'
import Modal from '../components/UserRegister/Modal/Modal'
import Aux from '../hoc/Aux'

class ProductListClass extends Component {

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
            // {id: 1, title: 'Phone', description: 'new phone', price: 3, image: phone},
            // {id: 2, title: 'iPhone', description: 'new phone', price: 6, image: phone},
            // {id: 3, title: 'Samsung', description: 'old phone', price: 5, image: phone},
        ],
        loginNow: false
    };

    loginButton = () => {
      this.setState({loginNow: !this.state.loginNow})
    };

    // titlePrice = (index) => {
    //     const product = this.state.productList[index];
    //     console.log(product.title, product.price, product.id, product.index)
    // };
    //
    // titles = () => {
    //     const titleName = this.state.productList.reduce((sum, amTitle) => {
    //         return sum + ', ' + amTitle.title;
    //     });
    //     console.log(titleName)
    // };
    //
    // ifSamsung = () => {
    //     const samsungPhones = this.state.productList;
    //     samsungPhones.filter(phone => phone.title === 'Samsung').map(phone => phone.description);
    //     console.log(samsungPhones)
    // };
    //
    // filterByPrice = () => {
    //     const expensiveProductsNames = this.state.productList;
    //     const filtered = expensiveProductsNames.filter(product => product.price > 100)
    //         .map(product => product.title).reduce((titles, title) => titles + ' ' + title);
    //     console.log("Titles: ", filtered)
    // };

    adminProducts = () => this.props.router.push('admin');
    listProducts = () => this.props.router.push('products');
    registerUser= () => this.props.router.push('users/register');

    productDetails = (index) => {
        this.props.router.push('products/' + this.state.productList[index].id);
    };

    componentDidMount() {
        axios.get('products/').then(response => {
            const products = response.data.slice(0, 20);
            // const updatedProducts = products.map(product => {
            //     return {
            //         ...product, image: phone
            //     }
            // });
            this.setState({
                productList: products
            })
        }).catch(error => {
            console.log('Error = ' + error)
        })
    }

    render() {

        return (
            <Aux>
                <Modal show={this.state.loginNow} hide={this.loginButton}/>
                <Navbar
                    admin={this.adminProducts}
                    home={this.listProducts}
                    register={this.registerUser}
                    login={this.loginButton}
                />
                <ProductList
                    productList={this.state.productList}
                    key={this.state.productList.id}
                    clicked={this.productDetails}/>

                {/*<ProductTitle*/}
                {/*productList={this.state.productList}*/}
                {/*key={this.state.productList.id}/>*/}

                {/*<ProductFilterPrice*/}
                {/*productList={this.state.productList}*/}
                {/*key={this.state.productList.id}*/}
                {/*clicked={this.titlePrice}*/}
                {/*/>*/}

                {/*<ProductCartSum*/}
                {/*productList={this.state.productList}*/}
                {/*/>*/}
                {/*<button onClick={this.filterByPrice}>Filter</button>*/}
            </Aux>
        );
    }
}

export default ProductListClass;