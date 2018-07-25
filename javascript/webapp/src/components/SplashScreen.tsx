import * as React from "react";

import {
    CircularProgress,
    Theme,
    withStyles,
} from "@material-ui/core";

const styles = (theme: Theme) => ({
    splash: {
        position: "absolute",
        textAlign: "center",

        height: "100px",
        width: "100px",

        left: "calc(50% - 50px)",
        top: "calc(50% - 50px)",
    },
}) as any;

interface Props {
    classes: any;
}

class UnstyledSplashScreen extends React.Component<Props, {}> {
    public render() {
        return (
            <div className = { this.props.classes.splash } >
                <CircularProgress size = { 100 } />
            </div>
        );
    }
}

export const SplashScreen = withStyles(styles)(UnstyledSplashScreen);
