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


class AppStateless extends Component {
    //
    // state = {
    //     className: ''
    // };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <Besisukantis
                            className={'App-logo'}
                            mouseIn={() => console.log('rrr')}
                            /*mouseOut={() => {className = 'App-logo'}} *//>
                    </div>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default AppStateless;
