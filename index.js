const express=require("express");
const http=require("http");
const {Server}=require("socket.io");

const app=express();

const httpserver=http.createServer(app);

httpserver.listen(3000);
app.get('/',(ask,give)=>{
    give.sendFile(__dirname+'/index.html')
})
const io=new Server(httpserver);

io.on("connection",(socket)=>{
    console.log("a user connected");
    socket.on("chat",(msg)=>{
        io.emit('chat',msg);
    })
    socket.on("disconnect",()=>{
        console.log("user disconnected");
    })
}) 

