import { OktaAuth, withAuth } from "@okta/okta-react";
import { OktaConfiguration } from "api";
import * as React from "react";
import { connect } from "react-redux";

import { SetAuthTokens } from "../actions";
import { AppState } from "../state";

import { OktaSignInWidget } from "./OktaSignInWidget";

interface Props {
    auth: OktaAuth;
    oktaClient: any;

    isAuthenticated: boolean;
    oktaConfiguration: OktaConfiguration;

    onSuccess: (response) => void;
}

const mapStateToProps = (state: AppState) => ({
    // oktaClient: state.oktaClient,
    oktaConfiguration: state.configuration.oktaConfiguration,
}) as Props;

const mapDispatchToProps = (dispatch) => ({
    onSuccess: (response) =>
        dispatch(new SetAuthTokens().invoke(response[0].accessToken)),
}) as Props;

class DisconnectedLogin extends React.Component<Props, {}> {
    public render() {
        return <OktaSignInWidget
                   configuration = { this.props.oktaConfiguration }
                   onSuccess = { (response) =>  {
                       window.console.log(response[0]);
                       (this.props.auth as any)._oktaAuth.tokenManager.add("idToken", response[0]);
                       (this.props.auth as any)._oktaAuth.tokenManager.add("accessToken", response[1]);
                       this.props.onSuccess(response);
                   } }
               />;
    }
}

export const LoginContainer = withAuth(connect(mapStateToProps, mapDispatchToProps)(DisconnectedLogin));
