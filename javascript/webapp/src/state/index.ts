import { WebappConfiguration } from "api";

export interface AppState {
    configuration: WebappConfiguration;
    isLoginDialogVisible: boolean;
    // oktaClient: any;
}
