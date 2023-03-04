local json = require "json"

_LUVJS = { channel = "rd"}

--EVENTS
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
    print("<<|EVENT|"..json.encode({ type="textinput", value=t }))
end

function love.focus(t)
    if t then
        print("<<|EVENT|"..json.encode({ type="focus", value="+" }))
    else
        print("<<|EVENT|"..json.encode({ type="focus", value="-" }))
    end
end

end

_LUVJS.errors = {
    SYNTAXERROR = 0
}

local thrd = [[
while true do
    local r = io.read()
    love.thread.getChannel(_LUVJS.channel):push(r)
end]]

local th = love.thread.newThread(thrd)
th:start()

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