import React from 'react';
import ReactDOM from 'react-dom';
import VCalls from './VCalls';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VCalls />, div);
  ReactDOM.unmountComponentAtNode(div);
});
