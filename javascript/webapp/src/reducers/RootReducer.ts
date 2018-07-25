import { combineReducers } from "redux";

import { auth } from "./AuthReducer";
import { configuration } from "./ConfigurationReducer";
import { isLoginDialogVisible } from "./IsLoginDialogVisibleReducer";
import { oktaClient } from "./OktaClientReducer";

export const rootReducer = combineReducers({
    auth,
    configuration,
    isLoginDialogVisible,
    oktaClient,
});
