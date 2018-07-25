import { Auth, withAuth } from "@okta/okta-react";
import * as React from "react";
import { connect } from "react-redux";

import { AppState } from "../state";

interface Props {
    auth: any;
    isAuthenticated: boolean;
}

interface State {
    isAuthenticated: boolean;
}

const mapStateToProps = (state: AppState) => ({
    isAuthenticated: state.auth !== null,
}) as Props;

const mapDispatchToProps = (dispatch) => ({
    // hideLoginDialog: () => dispatch(new HideLoginDialog().invoke()),
    // showLoginDialog: () => dispatch(new ShowLoginDialog().invoke()),
}) as Props;

class UnauthedLoginInfoContainer extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { isAuthenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
    }

    public async componentDidMount() {
        await this.checkAuthentication();
    }

    public async componentDidUpdate() {
        await this.checkAuthentication();
    }

    public render() {
        if (this.state.isAuthenticated === null) {
            return <div>Fuck knows...</div>;
        }

        return <div>We know: { this.state.isAuthenticated.valueOf().toString() }</div>;
    }

    private async checkAuthentication() {
        const isAuthenticated = await this.props.auth.isAuthenticated();
        window.console.log(await this.props.auth.isAuthenticated());
        window.console.log(await this.props.auth.getAccessToken());
        if (isAuthenticated !== this.state.isAuthenticated) {
            this.setState({ isAuthenticated });
        }
    }
}

export const LoginInfoContainer = withAuth(connect(mapStateToProps, mapDispatchToProps)(UnauthedLoginInfoContainer));
