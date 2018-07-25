import { WebappConfiguration } from "api";
import { Action } from "redux";

import {
    ApiAction,
    GetWebappConfiguration,
    Status,
    SuccessApiAction,
} from "../actions";

export function configuration(
    value: WebappConfiguration = null,
    action: Action,
) {
    switch (action.type) {
        case GetWebappConfiguration.TYPE:
            switch ((action as ApiAction).status) {
                case Status.Success:
                    return (action as SuccessApiAction<WebappConfiguration>).data;
            }
    }

    return value;
}
