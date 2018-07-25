import * as React from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";

import {
    AppBar,
    Button,
    Toolbar,
    Typography,
} from "@material-ui/core";

import { GetWord } from "../actions";
import { State } from "../state";

interface IProps {
    word: string;

    onButtonClick: () => void;
}

const mapStateToProps = (state: State) => ({
    word: state.word,
}) as IProps;

const mapDispatchToProps = (dispatch: ThunkDispatch<State, void, Action>) => ({
    onButtonClick: () => dispatch(new GetWord().invoke()),
});

class DiconnectedAppContainer extends React.Component<IProps, {}> {
    public render() {
        return (
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            { this.props.word }
                        </Typography>
                    </Toolbar>
                    <Button onClick={ this.props.onButtonClick }>click</Button>
                </AppBar>
            </div>
        );
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(DiconnectedAppContainer);
