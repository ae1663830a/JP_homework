import React, {Component} from 'react'
import RegisterUser from '../../components/UserRegister/UserRegister'
import PropTypes from 'prop-types'
import axios from 'axios'
import Navbar from '../../components/Navbar'
import {hashHistory} from 'react-router'

class CreateUserClass extends Component {
    state = {
        user: {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
            // repeatPassword: ''
        }
    };

    static defaultProps = {
        firstName: 'Undefined',
        lastName: 'Undefined',
        email: 'Undefined',
        password: 'Undefined'
        // repeatPassword: 'Undefined'
    };

    static propTypes = {
        id: PropTypes.number,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired
        // repeatPassword: PropTypes.string.isRequired
    };

    changeValueHandler = (fieldName) => {
        return (
            (event) => {
                const changedUser = this.state.user;
                changedUser[fieldName] = event.target.value;
                this.setState({user: changedUser})
            }
        )
    };

    registerUser = () => {
        const user = this.state.user;
            axios.post('/users/', user).then(response => {
                console.log(response);
            }).catch(error => {
                console.log('Error = ' + error)
            })
        };
        // else {
        //     axios.put('/products/' + productId, product).then(response => {
        //         console.log(response)
        //     }).catch(error => {
        //         console.log('Error = ' + error)
        //     })
        // }
        // hashHistory.replace('/products')};

    // componentDidMount() {
    //     const productId = this.props.params.id;
    //     if (productId !== 'new')
    //         axios.get('products/' + productId).then(response => {
    //             this.setState({product: response.data})
    //         }).catch(error => {
    //             console.log('Error = ' + error)
    //         })
    // }

    listProducts = () => this.props.router.push('products');
    adminProducts = () => this.props.router.push('admin');
    registerUser= () => this.props.router.push('users/register');
    cancelRegisterUser = () => hashHistory.goBack();

    render() {

        return (
            <div>
                <Navbar
                    home={this.listProducts}
                    admin={this.adminProducts}
                    register={this.registerUser}
                />

                <RegisterUser
                    firstName={this.state.user.firstName}
                    lastName={this.state.user.lastName}
                    email={this.state.user.email}
                    password={this.state.user.password}
                    // repeatPasword={this.state.user.repeatPassword}
                    onFieldChange={this.changeValueHandler}
                    submitData={this.registerUser}
                    cancelCreate={this.cancelRegisterUser}
                />
            </div>
        )
    }
}

export default CreateUserClass;