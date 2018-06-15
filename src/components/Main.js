import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import BaseLayout from './BaseLayout';
import Accessories from './Accessories';
import ShowProduct from './ShowProduct';
import ShowDesigner from './ShowDesigner';
import Designers from './Designers';
import Products from './Products';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (<BrowserRouter>
		  <BaseLayout>
		      <Switch>
		        <Route exact path="/" component={App} />
		        <Route path="/accessories" component={Accessories} />
		        <Route exact path="/designers/:id" component={ShowDesigner} />
		        <Route path="/designers" component={Designers} />
		        <Route exact path="/products/:id" component={ShowProduct} />
		        <Route path="/products" component={Products} />
		      </Switch>
	      </BaseLayout>
	  </BrowserRouter>);
	}
};