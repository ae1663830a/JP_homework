import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Product from './components/Product'

ReactDOM.render(<Product />, document.getElementById('root'));
registerServiceWorker();