import React from 'react';
import { Switch, Route } from 'react-router';
import { Container } from 'react-bootstrap';

import { Home } from './pages/Home';

const App = () => (
	<Container className="mt-4 text-center">
		<Switch>
			<Route path="/" component={Home} />
		</Switch>
	</Container>
);

export default App;
