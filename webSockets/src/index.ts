// console.log("hii there")
// we are creating our server it is not a client side code, we will later write the client side code;
import { WebSocketServer } from "ws";// {WebSocketServer} it is inside braces because ws is importing so many diffrent things but we only want webSocketServer from ws that why we kept it in braces;
const wss=new WebSocketServer({port:8080});
wss.on("connection",function(socket){
    // whenever the connection is made give me the socket of that person(the person who is connecting to server);
    // server is sending the message;
    console.log("user connected")
    setInterval(()=>{
        socket.send("current price of the solana "+Math.random());
    },5000)
    // now client will send the message to server;
    // client will send the message when the socket is on;
    // we have to add the handler ki jb socket se message aaye(message is not comming from server it is coming from socket) toh kaise handle krna hai;
    socket.on("message",(e)=>{
        console.log(e.toString())
    })
})