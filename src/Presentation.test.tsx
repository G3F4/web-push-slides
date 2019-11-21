import React from 'react';
import ReactDOM from 'react-dom';
import Presentation from './Presentation';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Presentation />, div);
  ReactDOM.unmountComponentAtNode(div);
});
