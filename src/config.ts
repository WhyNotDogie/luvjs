
type windowConfig = {
    title : string,         // The window title (string)
    icon : string|null,                 // Filepath to an image to use as the window's icon (string)
    width : number,                // The window width (number)
    height : number,               // The window height (number)
    borderless : boolean,         // Remove all border visuals from the window (boolean)
    resizable : boolean,          // Let the window be user-resizable (boolean)
    minwidth : number,               // Minimum window width if the window is resizable (number)
    minheight : number,              // Minimum window height if the window is resizable (number)
    fullscreen : boolean,         // Enable fullscreen (boolean)
    fullscreentype : ("desktop"|"exclusive"), // Choose between "desktop" fullscreen or "exclusive" fullscreen mode (string)
    vsync : number,                  // Vertical sync mode (number)
    msaa : number,                   // The number of samples to use with multi-sampled antialiasing (number)
    depth : number|null,                // The number of bits per sample in the depth buffer
    stencil : number|null,              // The number of bits per sample in the stencil buffer
    display : number,                // Index of the monitor to show the window in (number)
    highdpi : boolean,            // Enable high-dpi mode for the window on a Retina display (boolean)
    usedpiscale : boolean,         // Enable automatic DPI scaling when highdpi is set to true as well (boolean)
    x : number|null,                    // The x-coordinate of the window's position in the specified display (number)
    y : number|null,                    // The y-coordinate of the window's position in the specified display (number)
}

class Config {
    identity:string|null = null                    // The name of the save directory (string)
    appendidentity:boolean = false            // Search files in source directory before save directory (boolean)
    gammacorrect:boolean = false              // Enable gamma-correct rendering, when supported by the system (boolean)

    window:windowConfig = {
        title : "Untitled",         // The window title (string)
        icon : null,                 // Filepath to an image to use as the window's icon (string)
        width : 800,                // The window width (number)
        height : 600,               // The window height (number)
        borderless : false,         // Remove all border visuals from the window (boolean)
        resizable : false,          // Let the window be user-resizable (boolean)
        minwidth : 1,               // Minimum window width if the window is resizable (number)
        minheight : 1,              // Minimum window height if the window is resizable (number)
        fullscreen : false,         // Enable fullscreen (boolean)
        fullscreentype : "desktop", // Choose between "desktop" fullscreen or "exclusive" fullscreen mode (string)
        vsync : 1,                  // Vertical sync mode (number)
        msaa : 0,                   // The number of samples to use with multi-sampled antialiasing (number)
        depth : null,                // The number of bits per sample in the depth buffer
        stencil : null,              // The number of bits per sample in the stencil buffer
        display : 1,                // Index of the monitor to show the window in (number)
        highdpi : false,            // Enable high-dpi mode for the window on a Retina display (boolean)
        usedpiscale : true,         // Enable automatic DPI scaling when highdpi is set to true as well (boolean)
        x : null,                    // The x-coordinate of the window's position in the specified display (number)
        y : null,                    // The y-coordinate of the window's position in the specified display (number)
    }
}

export default Config