import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const style = {height: '70px'};
const buttonStyle = {
    width: '22%', height: '45px', backgroundColor: 'darkGreen',
    color: 'white', borderRadius: '10px', border: '3px solid #333', margin: '10px'
};

const Besisukantis = (props) => {
    return <img src={logo}
                className={props.className1}
                onMouseOver={props.mouseIn}
                onMouseOut={props.mouseOut}
                style={style} alt="logo"/>
};

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
        this.setState({value: ''});
        event.preventDefault()
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <Besisukantis
                            className1={this.state.className}
                            mouseIn={() => this.spin('App-logo')} // First way with anon arrow function.
                            mouseOut={this.spin.bind(this, '')} // Second way by binding.
                        />
                    </div>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <p>
                    {this.state.count} <br/>
                    <button className="btn btn-default"
                            onClick={this.increaseClick}>
                        Increase
                    </button>
                    <button className="btn btn-default"
                            onClick={this.decreaseClick}>
                        Decrease
                    </button>
                    <br/>
                    <p>
                        <form onSubmit={this.handleSubmit}>
                            {this.state.value}<br/>
                            Enter name:
                            <input type="text" value={this.state.value} onChange={this.handleChange}/><br/>
                            <input type="submit" value="Submit" style={buttonStyle}/>
                        </form>
                    </p>
                </p>
            </div>
        );
    }
}

export default App;