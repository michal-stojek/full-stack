export class SetAuthTokens {

    public static TYPE = "SET_AUTH_TOKENS";

    public invoke(authToken: string) {
        return { type: SetAuthTokens.TYPE, authToken };
    }

}
