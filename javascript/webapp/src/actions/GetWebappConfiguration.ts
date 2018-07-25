import * as api from "api";

import { ApiCall } from "./Action";

export class GetWebappConfiguration extends ApiCall<api.WebappConfiguration> {

    public static TYPE = "GET_WEBAPP_CONFIGURATION";

    constructor() {
        super(GetWebappConfiguration.TYPE);
    }

    public invoke() {
        return (dispatch) => {
            dispatch(this.awaitingResponse());

            api.webappConfigurationService.getWebappConfiguration(
                (data: api.WebappConfiguration) => dispatch(this.success(data)),
                (response: Response) => dispatch(this.error(response)));
        };
    }
}
