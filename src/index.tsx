import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Presentation from './Presentation';
import { registerServiceWorker } from './serviceWorker';

ReactDOM.render(<Presentation />, document.getElementById('root'));

registerServiceWorker();
