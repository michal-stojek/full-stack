import { Action } from "redux";

import { HideLoginDialog, SetAuthTokens, ShowLoginDialog } from "../actions";

import { initialState } from "./InitialState";

export function isLoginDialogVisible(
    value: boolean = initialState.isLoginDialogVisible,
    action: Action,
) {
    if (action.type === ShowLoginDialog.TYPE) {
        return true;
    }
    if (action.type === HideLoginDialog.TYPE) {
        return false;
    }
    if (action.type === SetAuthTokens.TYPE) {
        return false;
    }

    return value;
}
