import React, {Component} from 'react';
import Besisukantis from '../components/Besisukantis'
import InputData from '../components/InputData'
import IncreaseDecrease from '../components/IncreaseDecrease'
import './App.css';


class App extends Component {

    state = {
        className: '',
        count: 0,
        value: ''
    };

    increaseClick = () => this.setState({
        count: this.state.count + 1
    });

    decreaseClick = () => this.setState({
        count: this.state.count - 1
    });

    spin = (className) => this.setState({
        className: className
    });

    handleChange = (event) => this.setState({
        value: event.target.value
    });

    handleSubmit = (event) => {
        this.setState({value: 'Submitted'});
        event.preventDefault()
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Besisukantis
                        className1={this.state.className}
                        mouseIn={() => this.spin('App-logo')} // First way with anon arrow function.
                        mouseOut={this.spin.bind(this, '')} // Second way by binding.
                    />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                {this.state.count}<br/>
                <IncreaseDecrease
                    increase={this.increaseClick}
                    decrease={this.decreaseClick}
                />
                <br/>
                <InputData
                    value={this.state.value}
                    changing={this.handleChange}
                    submitData={this.handleSubmit}
                />
            </div>
        );
    }
}

export default App;