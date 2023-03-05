while true do
    local r = io.read()
    love.thread.getChannel("rd"):push(r)
end