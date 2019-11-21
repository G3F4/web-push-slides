import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Presentation from './Presentation';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Presentation />, document.getElementById('root'));

if (process.env.NODE_ENV === 'production') {
  serviceWorker.register();
} else {
  serviceWorker.unregister();
}
