import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ProductListClass from './containers/ProductListClass';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import CreateProduct from './containers/CreateProductClass'
import {Router, Route, IndexRoute, hashHistory, IndexRedirect, browserHistory} from 'react-router'
import axios from 'axios'
import ProductDetails from './containers/ProductDetailsClass'
import ProductAdminListClass from './containers/ProductAdminListClass/ProductAdminListClass'

// axios.defaults.baseURL = 'https://itpro2017.herokuapp.com/api/';
axios.defaults.baseURL = 'http://localhost:8888/api/';


const InitialApp = (props) => {
    return <div>
        {props.children}
    </div>
};

const NoMatch = () => {
    return <div className="notFound">
        <h1>Page not found</h1><br/>
        <p>
            <button className="btn btn-lg btn-warning" onClick={() => hashHistory.replace('/')}>
                To main page
            </button>
        </p>
    </div>;
};

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={InitialApp}>
            <IndexRoute component={ProductListClass}/>
            <IndexRedirect to='products'/>
            <Route path="/products" component={ProductListClass}/>
            <Route path="/products/:id" component={ProductDetails}/>
            <Route path="/admin" component={ProductAdminListClass}/>
            <Route path="/admin/createproduct" component={CreateProduct}/>
            <Route path="/admin/createproduct/:id" component={CreateProduct}/>
            {/*<Route path="/help" component={DemonstruotiNavigacija}/>*/}
            <Route path="*" component={NoMatch}/>
            <Route component={ProductListClass}/>
        </Route>
    </Router>
), document.getElementById('root'));
// ReactDOM.render(<ProductListClass/>, document.getElementById('root'));
registerServiceWorker();