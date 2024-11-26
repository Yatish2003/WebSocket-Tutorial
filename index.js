const http=require('http');
const express=require('express');
const path=require('path');
const {Server}=require('socket.io');

const app=express();
const PORT=5000;
const server=http.createServer(app);

const io= new Server(server);


//Sockets

io.on('connection',(socket)=>{
    socket.on('User-Mess',(mess)=>{
        io.emit('message',mess);

    })
})

app.use(express.static(path.resolve('./public')))

app.get('/',(req,res)=>{
    return res.sendFile('/public/index.html');
})

server.listen(PORT,()=>console.log(`Server is listing on http://localhost:${PORT}`));