import * as cp from "child_process";
import Config from "./config";
import * as graphics from "./graphics"
import * as path from "path"

class Window {
    async open() {
        const proc = cp.exec(`start "" "${path.resolve(__dirname, "..")}/love-files/LOVE/love.exe" "${path.resolve(__dirname, "..")}/love-files/love-src"`);
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

export { Window, Config }