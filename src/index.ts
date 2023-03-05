import * as cp from "child_process";
import Config from "./config";
import * as graphics from "./graphics"
import * as path from "path"
import * as process from "process"

class Window {
    open() {
        const proc = cp.exec(`start "" "${path.resolve(__dirname, "..")}/love-files/LOVE/lovec.exe" "${path.resolve(__dirname, "..")}/love-files/love-src"`);
        proc.stdin?.setDefaultEncoding('utf-8');
        proc.stdout?.pipe(process.stdout);
        this.process = proc
        return this
    }
    close() {
        this.process?.stdin?.write('>>|love.event.quit()\r\n')
        this.process?.stdin?.end()
    }
    config = new Config()
    process:cp.ChildProcess|null = null
    graphics = graphics
    gfx = this.graphics
    constructor () {
        process.on('exit', (code) => {
            this.close()
        });
    }
}

new Window().open()

export { Window, Config }