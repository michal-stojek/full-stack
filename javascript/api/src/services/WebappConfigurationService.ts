import { Auth } from "@okta/okta-react";
import "whatwg-fetch";

import { WebappConfiguration } from "../dtos";

import { jsonApi, plaintextApi } from "./ApiUtil";

function getEmail(
    auth: Auth,
    success: (data: string) => void,
    error: (response: Response) => void,
) {
    auth.getAccessToken()
        .then((accessToken) => {
            plaintextApi(
                "api/webapp_configuration/email",
                { headers: { Authorization: "Bearer " + accessToken } },
                success,
                error);
        });
}

function getWebappConfiguration(
    success: (data: WebappConfiguration) => void,
    error: (response: Response) => void,
) {
    return jsonApi("api/webapp_configuration", {}, success, error);
}

export const webappConfigurationService = {
    getEmail,
    getWebappConfiguration,
};
