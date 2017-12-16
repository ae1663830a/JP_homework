import React from 'react';
import ReactDOM from 'react-dom';
import ProductListClass from './ProductListClass';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProductListClass />, div);
});