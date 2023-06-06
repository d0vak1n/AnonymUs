import express from "express";
import http from "http";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);

const io = new Server(server);

app.get("/", (req: any, res: any) => {
  res.sendFile(__dirname + "/html/index.html");
});

io.on("connection", (socket) => {
  console.log("Un usuario ha entrado a la sala");

  socket.on("chat message", (msg) => {
    console.log("Mensaje: " + msg);
  });

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("Un usuario ha salido de la sala");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
