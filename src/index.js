import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";
import {Router, Route, browserHistory} from "react-router";
import {syncHistoryWithStore, routerReducer} from "react-router-redux";

import "./styles/main.css";
import reducer from "./reducers/";
import Shop from "./containers/Shop";
import ItemPage from "./containers/ItemPage";


const store = createStore(
	combineReducers({
		reducer,
		routing: routerReducer
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
			<Route path="/" component={Shop}/>
			<Route path="/item/:id" component={ItemPage} />
		</Router>
	</Provider>,
	document.getElementById("root"));