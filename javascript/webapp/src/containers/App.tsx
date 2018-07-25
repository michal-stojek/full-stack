import { ImplicitCallback, Security } from "@okta/okta-react";
import { WebappConfiguration } from "api";
import * as React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { HideLoginDialog, ShowLoginDialog } from "../actions";
import { AppState } from "../state";

import { App } from "../components/App";
import { SplashScreen } from "../components/SplashScreen";

interface Props {
    configuration: WebappConfiguration;
    isAuthenticated: boolean;
    isLoginDialogVisible: boolean;

    hideLoginDialog: () => void;
    showLoginDialog: () => void;
}

const mapStateToProps = (state: AppState) => ({
    configuration: state.configuration,
    isAuthenticated: state.auth !== null,
    isLoginDialogVisible: state.isLoginDialogVisible,
}) as Props;

const mapDispatchToProps = (dispatch) => ({
    hideLoginDialog: () => dispatch(new HideLoginDialog().invoke()),
    showLoginDialog: () => dispatch(new ShowLoginDialog().invoke()),
}) as Props;

class DiconnectedAppContainer extends React.Component<Props, {}> {
    public render() {
        return this.props.configuration
            ? <Security
                  issuer = { this.props.configuration.oktaConfiguration.issuer }
                  client_id = { this.props.configuration.oktaConfiguration.clientId }
                  redirect_uri = { window.location.origin + "/callback" }
                  onAuthRequired = { this.props.showLoginDialog }
              >
                  <Route path = "/callback" component = { ImplicitCallback } />

                  <App
                      isAuthenticated = { this.props.isAuthenticated }
                      isLoginDialogVisible = { this.props.isLoginDialogVisible }
                      hideLoginDialog = { this.props.hideLoginDialog }
                      showLoginDialog = { this.props.showLoginDialog }
                  />
              </Security>
            : <SplashScreen />;
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(DiconnectedAppContainer);
