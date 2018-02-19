export class UISample {
    dialog: Window;
    button: Button;
    textbox: EditText;

    constructor() {
        this.dialog = new Window("dialog");
        this.dialog.size = [320, 240];

        this.textbox = this.dialog.add("edittext", undefined, "何か入力してください");
        this.button = this.dialog.add("button", undefined, "Click");
    }

    show() {
        this.dialog.show();
    }
}