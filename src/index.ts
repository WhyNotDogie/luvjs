import * as cp from "child_process";
import Config from "./config";
import * as graphics from "./graphics"

class Window {
    async open() {
        const ret:[cp.ExecException|null, string, string] = await new Promise(resolve => {
            cp.exec('./LOVE/love.exe ./love-src', (err, stdout, stderr) => resolve([err, stdout, stderr]));
        });
        const err = ret[0]
        const stdout = ret[1]
        const stderr = ret[2]
        console.log({err, stdout, stderr})
    }
    async close() {

    }
    config = new Config()
    process:cp.ChildProcess|null = null
    graphics = graphics
    gfx = this.graphics
}

export default { Window, Config }