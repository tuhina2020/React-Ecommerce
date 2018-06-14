import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Cart from './Cart';
import BaseLayout from './BaseLayout';
import Women from './Women';
import Men from './Men';
import Clothes from './Clothes';
import Accessories from './Accessories';
import ShowProduct from './ShowProduct';
import ShowDesigner from './ShowDesigner';
import Designers from './Designers';
import Items from './Items';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (<BrowserRouter>
	    <BaseLayout/>
	  </BrowserRouter>);
	}
};