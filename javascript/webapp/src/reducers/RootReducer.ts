import { Action } from "redux";

import {
    ApiAction,
    ErrorApiAction,
    GetWord,
    Status,
    SuccessApiAction } from "../actions";
import { State } from "../State";

import { initialState } from "./InitialState";

export function rootReducer(state: State = initialState, action: Action): State {
    if (typeof state === "undefined") {
        return initialState;
    }

    if (action.type === GetWord.TYPE) {
        switch ((action as ApiAction).status) {
            case Status.AwaitingResponse:
                return { word: "Processing "};
            case Status.Success:
                return { word: (action as SuccessApiAction<string>).data };
            case Status.Error:
                return { word: (action as ErrorApiAction).response.statusText };
            default:
                throw Error("Unknown status: " + (action as ApiAction).status);
        }
    }

    return state;
}
