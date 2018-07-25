import { Action } from "redux";

import { SetAuthTokens } from "../actions";
import { AuthState } from "../state";

export function auth(
    value: AuthState = null,
    action: Action,
) {
    switch (action.type) {
        case SetAuthTokens.TYPE:
            return {
                accessToken: (action as any).accessToken,
                idToken: (action as any).idToken,
            };
    }

    return value;
}
