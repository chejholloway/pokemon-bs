import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

import App from './App';
import './styles.css';
import './styles.scss';

const rootElement = document.getElementById('root');
ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</StrictMode>,
	rootElement
);
