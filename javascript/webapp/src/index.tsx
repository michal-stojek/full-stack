import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Action, applyMiddleware, createStore, Middleware } from "redux";
import logger from "redux-logger";
import thunk, { ThunkDispatch } from "redux-thunk";

import { GetWebappConfiguration } from "./actions";
import { AppContainer } from "./containers/App";
import { rootReducer } from "./reducers";
import { AppState } from "./state";

import "./index.scss";

const middlewares: Middleware[] = [ thunk ];

if (process.env.NODE_ENV === "development") {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
(store.dispatch as ThunkDispatch<AppState, {}, Action>)(new GetWebappConfiguration().invoke());

ReactDOM.render(
    <Provider store={ store }>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));
