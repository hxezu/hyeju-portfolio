import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
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

httpServer.listen(3001, () => {
  console.log("Socket.io server running on port 3001");
});
