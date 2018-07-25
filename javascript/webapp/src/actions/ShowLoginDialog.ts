export class ShowLoginDialog {

    public static TYPE = "SHOW_LOGIN_DIALOG";

    public invoke() {
        return { type: ShowLoginDialog.TYPE };
    }
}
