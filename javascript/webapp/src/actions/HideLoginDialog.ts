export class HideLoginDialog {

    public static TYPE = "HIDE_LOGIN_DIALOG";

    public invoke() {
        return { type: HideLoginDialog.TYPE };
    }
}
