import { WebappConfiguration } from "api";

export interface AppState {
    auth: AuthState;
    configuration: WebappConfiguration;
    isLoginDialogVisible: boolean;
    oktaClient: any;
}

export interface AuthState {
    accessToken: string;
    idToken: string;
}
