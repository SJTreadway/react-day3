import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import RouteOne from './RouteOne';
import RouteTwo from './RouteTwo';

const App = React.createClass({
	render() {
		return (
			<Router>
				<Route path="/route-one/:id" component={RouteOne} />
				<Route path="/route-two/:id" component={RouteTwo} />
			</Router>
		)
	}
});

ReactDOM.render(<App />, document.getElementById("app"));
