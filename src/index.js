import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import {Router, Route, hashHistory} from "react-router";
import {routerReducer} from "react-router-redux";

import "./styles/main.css";
import reducer from "./reducers/";
import Shop from "./containers/Shop";
import ItemPage from "./containers/ItemPage";
import Admin from "./containers/Admin";


const store = createStore(
	combineReducers({
		reducer,
		routing: routerReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
			<Route path="/" component={Shop}/>
			<Route path="/item/:id" component={ItemPage} />
			<Route path="/admin" component={Admin}/>
		</Router>
	</Provider>,
	document.getElementById("root")
);