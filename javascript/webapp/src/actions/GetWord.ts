import * as api from "api";
import { Dispatch } from "redux";

import { ApiCall } from "./Action";

export class GetWord extends ApiCall<string> {
    public static TYPE: string = "GET_WORD";

    constructor() {
        super(GetWord.TYPE);
    }

    public invoke() {
        return (dispatch: Dispatch) => {
            dispatch(this.awaitingResponse());

            api.getWord(
                (data: string) => dispatch(this.success(data)),
                (response: Response) => dispatch(this.error(response)));
        };
    }
}
