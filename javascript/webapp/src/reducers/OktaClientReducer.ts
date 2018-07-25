import OktaAuth from "@okta/okta-auth-js";
import { WebappConfiguration } from "api";
import { Action } from "redux";

import {
    ApiAction,
    GetWebappConfiguration,
    Status,
    SuccessApiAction,
} from "../actions";

export function oktaClient(
    value: any = null,
    action: Action,
) {
    switch (action.type) {
        case GetWebappConfiguration.TYPE:
            switch ((action as ApiAction).status) {
                case Status.Success:
                    const oktaConfiguration = (action as SuccessApiAction<WebappConfiguration>)
                        .data.oktaConfiguration;

                    return new OktaAuth({
                        issuer: oktaConfiguration.issuer,
                        tokenManager: {
                            storage: "localStorage",
                        },
                        url: oktaConfiguration.baseUrl,
                    });
            }
    }

    return value;
}
