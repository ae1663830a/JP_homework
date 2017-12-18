import React, {Component} from 'react'
import Navbar from '../../components/Navbar'
import ProductAdminList from '../../components/ProductAdminList/ProductAdminList'
import axios from "axios/index";
import PropTypes from "prop-types";

class ProductAdminListClass extends Component {

    state = {
        productList: []
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

    componentWillMount() {
        axios.get('products/').then(response => {
            const products = response.data;
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

    editProduct = (index) => {
        this.props.router.push('admin/createproduct/' + this.state.productList[index].id);
    };
    adminProducts = () => this.props.router.push('admin');
    listProducts = () => this.props.router.push('products');
    createProduct = () => this.props.router.push('admin/createproduct/new');

    render() {
        return (
            <div>
                <Navbar
                    admin={this.adminProducts}
                    home={this.listProducts}
                />
                <ProductAdminList
                    productList={this.state.productList}
                    id={this.state.productList.id}
                    title={this.state.productList.title}
                    description={this.state.productList.description}
                    image={this.state.productList.image}
                    editProduct={this.editProduct}
                />
                <p>
                    <button id="button" className="btn btn-success" onClick={this.createProduct}>Add new product
                    </button>
                </p>
            </div>

        );
    }
}

export default ProductAdminListClass;