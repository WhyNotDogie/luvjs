import * as cp from "child_process";
import Config from "./config";
import * as graphics from "./graphics"

class Window {
    async open() {
        const proc = cp.exec('start "" "love-files/LOVE/love.exe" "love-files/love-src"');
        this.process = proc
        return undefined
    }
    async close() {

    }
    config = new Config()
    process:cp.ChildProcess|null = null
    graphics = graphics
    gfx = this.graphics
}

export default { Window, Config }