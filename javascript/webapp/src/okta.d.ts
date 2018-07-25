// declare module "@okta/okta-react";
declare module "@okta/okta-react" {
    import { Component } from "react";

    interface AccessToken {}
    interface Auth {
        getAccessToken(): Promise<AccessToken>;
        isAuthenticated(): Promise<boolean>;
    }
    interface SecurityProps {
        issuer: string;
        client_id: string;
        redirect_uri: string;

        onAuthRequired(): void;
    }
    class Security extends Component<SecurityProps, {}> {}

    const ImplicitCallback: any;
    const withAuth: any;
}
declare module "@okta/okta-signin-widget";