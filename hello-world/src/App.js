import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const style = {width: '100px'};

const Besisukantis = (props) => {
    return <img src={logo}
                className={props.className}
                onMouseOver={props.mouseIn}
                onMouseOut={props.mouseOut}
                style={style} alt="logo"/>
};

class App extends Component {

    state = {
        className: '',
        count: 0
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

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <Besisukantis
                            className={this.state.className}
                            mouseIn={this.spin.bind(this, 'App-logo')}
                            mouseOut={this.spin.bind(this, '')}/></div>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>

                <p>
                    {this.state.count} &nbsp;
                    <button className="btn btn-default"
                            onClick={this.increaseClick}>
                        Increase
                    </button>
                    <button className="btn btn-default"
                            onClick={this.decreaseClick}>
                        Decrease
                    </button>
                </p>
            </div>
        );
    }
}

export default App;
