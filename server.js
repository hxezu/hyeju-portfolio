import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

const app = express();
const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

let viewers = 0;

io.on("connection", (socket) => {
  viewers++;
  io.emit("updateViewers", viewers);

  socket.on("disconnect", () => {
    viewers--;
    io.emit("updateViewers", viewers);
  });
});

const PORT = process.env.PORT;
httpServer.listen(PORT, () => {
  console.log("Socket.io server running on port : ", PORT);
});
