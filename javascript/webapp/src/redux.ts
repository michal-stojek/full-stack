import { TypedAction, TypedReducer } from "redoodle";
import { AppState } from "./state";

const TEST_ACTION = TypedAction.define("test")<{}>();

export const rootReducer = TypedReducer.builder<AppState>()
    .withHandler(TEST_ACTION.TYPE, (state, {}) => ({
        configuration: null,
    }))
    .build();
