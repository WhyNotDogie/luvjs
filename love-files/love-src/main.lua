local json = require "json"

_LUVJS = { channel = "rd" }

local thrd = "send.lua"

local th = love.thread.newThread(thrd)
th:start()

--[[
    EVENTS
    excludes: {
        love.update
        love.mousemoved
        [all joystick callbacks]
    }
    
]]
do

function love.load()
    print("<<|EVENT|"..json.encode({ type="load" }))
end

function love.directorydropped(t)
    print("<<|EVENT|"..json.encode({ type="dirdropped", dir=t.."\\" }))
end

function love.filedropped(t)
    print("<<|EVENT|"..json.encode({ type="filedropped", file=(t:getFilename()) }))
end

function love.textinput(t)
    print("<<|EVENT|"..json.encode({ type="textinput", text=t }))
end

function love.focus(t)
    if t then
        print("<<|EVENT|"..json.encode({ type="+focus" }))
    else
        print("<<|EVENT|"..json.encode({ type="-focus" }))
    end
end

function love.keypressed(t)
    print("<<|EVENT|"..json.encode({ type="+key", key=t }))
end

function love.keyreleased(t)
    print("<<|EVENT|"..json.encode({ type="-key", key=t }))
end

function love.mousepressed(t)
    print("<<|EVENT|"..json.encode({ type="+mouse", value=t }))
end

function love.mousereleased(t)
    print("<<|EVENT|"..json.encode({ type="-mouse", value=t }))
end

function love.mousefocus(t)
    if t then
        print("<<|EVENT|"..json.encode({ type="+mouseover" }))
    else
        print("<<|EVENT|"..json.encode({ type="-mouseover" }))
    end
end

function love.quit()
    print("<<|EVENT|"..json.encode({ type="quit" }))
end

end

_LUVJS.errors = {
    SYNTAXERROR = 0
}

function love.update(dt)
    _LUVJS.error = th:getError()
    assert( not _LUVJS.error, _LUVJS.error )
    _LUVJS.inf = love.thread.getChannel(_LUVJS.channel):pop()
    if _LUVJS.inf then
        if string.sub(_LUVJS.inf, 1, 3) ~= ">>|" then
            print("<<|ERROR|".."SYNTAXERROR|".._LUVJS.errors["SYNTAXERROR"])
            return
        end
        loadstring(string.sub(_LUVJS.inf, 4, -1))()
        print("<<|SUCCESS")
    end
end