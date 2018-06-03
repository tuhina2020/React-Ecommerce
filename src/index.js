import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Main from './components/Main.js';

render(<Main />
, document.getElementById('root'));
registerServiceWorker();
