import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Action, applyMiddleware, createStore, Middleware } from "redux";
import logger from "redux-logger";
import thunk, { ThunkDispatch } from "redux-thunk";

import { App } from "./components/App";
import { AppState } from "./state";

import "./index.scss";
import { rootReducer } from "./redux";

const middlewares: Middleware[] = [ thunk ];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));
