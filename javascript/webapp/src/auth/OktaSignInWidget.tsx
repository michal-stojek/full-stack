import OktaSignIn from "@okta/okta-signin-widget";
import { OktaConfiguration } from "api";
import * as React from "react";
import * as ReactDOM from "react-dom";

import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import "@okta/okta-signin-widget/dist/css/okta-theme.css";

interface Props {
    configuration: OktaConfiguration;

    onSuccess: any;
}

export class OktaSignInWidget extends React.Component<Props, {}> {
    public componentDidMount() {
        const el = ReactDOM.findDOMNode(this);
        (this as any).widget = new OktaSignIn({
            authParams: {
                issuer: this.props.configuration.issuer,
                responseType: [ "id_token", "token" ],
            },
            baseUrl: this.props.configuration.baseUrl,
            clientId: this.props.configuration.clientId,
            idps: this.props.configuration.idps,
            redirectUri: window.location.origin + "/callback",
        });
        (this as any).widget.renderEl({el}, this.props.onSuccess,
            (err) => window.console.log(err));
    }

    public componentWillUnmount() {
        (this as any).widget.remove();
    }

    public render() {
        return <div />;
    }
}
