/// <reference types="types-for-adobe/AfterEffects/2018" />

import "extendscript-es5-shim-ts";
import _ from "underscore";
import { UISample } from "./ui_sample";

class Main {
    showSample() {
        const sample = new UISample();
        sample.button.onClick = () => {
            alert(sample.textbox.text);
        }
        sample.show();
    }
}

const main = new Main();
main.showSample();
