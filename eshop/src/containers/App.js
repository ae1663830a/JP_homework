import React, {Component} from 'react';
import './App.css';
import ProductList from '../components/ProductList'
import phone from '../assets/phone.jpg'
import PropTypes from 'prop-types'

class App extends Component {

    state = {
        productList: [
            {id: '1', title: 'Phone', description: 'new phone', price: '20', image: phone},
            {id: '2', title: 'iPhone', description: 'new phone', price: '20', image: phone},
            {id: '3', title: 'Samsung', description: 'old phone', price: '20', image: phone},
            {id: '4', title: 'Old', description: 'new phone', price: '20', image: phone},
            {id: '5', title: 'Samsung', description: 'new phone', price: '20', image: phone},
            {id: '6', title: 'SE', description: 'new phone', price: '20', image: phone},
            {id: '7', title: 'CAT', description: 'new phone', price: '20', image: phone},
            {id: '8', title: 'Sony', description: 'new phone', price: '20', image: phone}
        ]
        //productNames: this.state.productList.title
    };

    // static propTypes = {
    //     productList: PropTypes.shape({
    //         id: PropTypes.number.isRequired,
    //         title: PropTypes.string.isRequired,
    //         description: PropTypes.number.isRequired,
    //         price: PropTypes.string.isRequired,
    //         image: PropTypes.string.isRequired
    //     }).isRequired
    // };


    deleteProduct = (index) => {
        const newProducts = [...this.state.productList]; // Creates a new array of persons by copying the persons array.
        newProducts.splice(index, 1); // Remove elements: starting at personIndex, 1 = total number of elements to remove.
        this.setState({
            productList: newProducts // Re-assign (in classes state) persons array after deletion.
        })
    };

    titlePrice = (index) => {
       const fff = this.state.productList[index];
        console.log(fff.title, fff.price)
    };

    titles = () => {
        const titleName = this.state.productList.reduce((sum, amTitle) => {
            return sum + ', ' + amTitle.title;

        });
    console.log(titleName)
    };

    ifSamsung = () => {
        const sumsungPhones =
            this.state.productList.filter(phone => phone.title === 'Samsung').map(phone => phone.description);
        console.log(sumsungPhones)
    };

    //
    //
    // changeAge = (event, id) => {
    //     const personIndex = this.state.persons.findIndex(person => {
    //         return person.id === id;
    //     });
    //     const newPerson = {
    //         ...this.state.persons[personIndex]
    //     };
    //     newPerson.age = event.target.value;
    //     const newPersons = [...this.state.persons];
    //     newPersons[personIndex] = newPerson;
    //     this.setState({
    //         persons: newPersons
    //     });
    // };


    render() {

        return (<div>
            <ProductList
                productList={this.state.productList}
                key={this.state.productList.id}
                clicked={this.ifSamsung}
            />
            </div>
        );
    }
}

export default App;