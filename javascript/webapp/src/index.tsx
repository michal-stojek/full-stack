import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore, Middleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { AppContainer } from "./containers/App";
import { rootReducer } from "./reducers";

import "./index.scss";

const middlewares: Middleware[] = [ thunk ];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

ReactDOM.render(
    <Provider store={ createStore(rootReducer, applyMiddleware(...middlewares)) }>
        <AppContainer />
    </Provider>,
    document.getElementById("root"));
