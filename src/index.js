import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// custom components
import App from './components/App';
import Heading from './components/Heading';
import PersonDetail from './components/PersonDetail'

import rootReducer from './reducers/index';
import promiseMiddleWare from 'redux-promise';
// redux
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';




const createStoreWithMiddleware = applyMiddleware(promiseMiddleWare)(createStore);

ReactDOM.render(
	<Provider store={createStoreWithMiddleware(rootReducer)}>
		<BrowserRouter>
					<Heading />
					<Switch>	
						<Route exact path = "/" component={App} />
						<Route exact path = "/:name" component={PersonDetail} />
					</Switch>
				</BrowserRouter>
	</Provider>
, document.getElementById('root'));


