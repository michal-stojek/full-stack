import { combineReducers } from "redux";

import { configuration } from "./ConfigurationReducer";
import { isLoginDialogVisible } from "./IsLoginDialogVisibleReducer";
import { oktaClient } from "./OktaClientReducer";

export const rootReducer = combineReducers({
    configuration,
    isLoginDialogVisible,
    // oktaClient,
});
