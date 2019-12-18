import "whatwg-fetch";

import { WebappConfiguration } from "../dtos";

import { jsonApi, plaintextApi } from "./ApiUtil";

function getConfiguration(
    success: (data: WebappConfiguration) => void,
    error: (response: Response) => void,
) {
    return jsonApi("api/configuration", {}, success, error);
}

export const webappConfigurationService = {
    getConfiguration,
};
