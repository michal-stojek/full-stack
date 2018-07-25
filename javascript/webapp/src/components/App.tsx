import * as React from "react";

import {
    AppBar,
    Button,
    Dialog,
    Theme,
    Toolbar,
    Typography,
    withStyles,
} from "@material-ui/core";

import { LoginContainer } from "../auth/Login";
import { LoginInfoContainer } from "../containers/LoginInfo";

const styles = (theme: Theme) => ({
    grow: {
        flexGrow: 1,
    },
}) as any;

interface Props {
    classes: any;
    isAuthenticated: boolean;
    isLoginDialogVisible: boolean;

    hideLoginDialog: () => void;
    showLoginDialog: () => void;
}

class UnstyledApp extends React.Component<Props, {}> {
    constructor(props) {
        super(props);

        this.state = { showLogin: false };
    }

    public render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="title"
                            color="inherit"
                            className = { this.props.classes.grow }
                        >
                            My App
                        </Typography>
                        <Button
                            color="inherit"
                            onClick = { this.props.showLoginDialog }
                        >
                            { this.props.isAuthenticated ? "Logout" : "Login" }
                        </Button>
                        <Dialog
                            open = { this.props.isLoginDialogVisible }
                            onClose = { this.props.hideLoginDialog }
                        >
                            <LoginContainer />
                        </Dialog>
                    </Toolbar>
                </AppBar>
                <LoginInfoContainer />
            </div>
        );
    }
}

export const App = withStyles(styles)(UnstyledApp);
