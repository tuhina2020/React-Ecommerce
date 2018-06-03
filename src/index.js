import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import './index.css';

// import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import App from './components/App';
// import Cart from './components/Cart';
// import BaseLayout from './components/BaseLayout';
// import Women from './components/Women';
// import Men from './components/Men';
// import Clothes from './components/Clothes';
// import Accessories from './components/Accessories';
// import ShowProduct from './components/ShowProduct';
import registerServiceWorker from './registerServiceWorker';
import Main from './components/Main.js';

render(<Main />
, document.getElementById('root'));
registerServiceWorker();
