import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import CreateProduct from './containers/CreateProduct'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import axios from 'axios'


axios.defaults.baseURL = 'https://itpro2017.herokuapp.com/api';

const InitialApp = (props) => {
    return <div>
        {props.children}
    </div>
};

const NoMatch = () => {
    return <div>
        Route did not match
    </div>
};

const DemonstruotiNavigacija = (props) => {
    const goApp = () => props.router.push("/");
    return (
        <div>
            At route: {props.router.getCurrentLocation().pathname}
            <button onClick={goApp}>Go App</button>
            <pre>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    )
};

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={InitialApp}>
            <IndexRoute component={App}/>
            <Route path="/createproduct" component={CreateProduct}/>
            <Route path="/products" component={App}/>
            <Route path="/createproduct/:id" component={DemonstruotiNavigacija}/>
            <Route path="/help" component={DemonstruotiNavigacija}/>
            <Route path="*" component={NoMatch}/>
        </Route>
    </Router>
), document.getElementById('root'));
// ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();