import * as cp from "child_process";
import Config from "./config";
import * as graphics from "./graphics"

class Window {
    open() {

    }
    close() {

    }
    config = new Config()
    process:cp.ChildProcess|null = null
    graphics = graphics
    gfx = this.graphics
}

export default { Window, Config }