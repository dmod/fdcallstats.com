import React from 'react';
import ReactDOM from 'react-dom';
import NewCall from './NewCall';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewCall />, div);
  ReactDOM.unmountComponentAtNode(div);
});
