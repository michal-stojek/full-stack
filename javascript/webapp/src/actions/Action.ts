import { Action } from "redux";

export enum Status { AwaitingResponse, Success, Error }

export interface ApiAction extends Action {
    status: Status;
}

export abstract class ApiCall<T> {
    public type: string;

    constructor(type: string) {
        this.type = type;
    }

    protected awaitingResponse() {
        return {
            status: Status.AwaitingResponse,
            type: this.type,
        } as ApiAction;
    }

    protected success(data: T) {
        return {
            data,
            status: Status.Success,
            type: this.type,
        } as SuccessApiAction<T>;
    }

    protected error(response: Response) {
        return {
            response,
            status: Status.Error,
            type: this.type,
        } as ErrorApiAction;
    }
}

export interface SuccessApiAction<T> extends ApiAction {
    data: T;
}

export interface ErrorApiAction extends ApiAction {
    response: Response;
}
