import { NextRequest, NextResponse } from "next/server";
import { Server } from "socket.io";

let io: Server;

export const GET = (req: NextRequest) => {
  return NextResponse.json({ message: "Socket.io API running" });
};

export const POST = (req: NextRequest) => {
  if (!io) {
    const server = (global as any).ioServer;
    if (!server) {
      const httpServer = (req as any).socket.server;
      io = new Server(httpServer, {
        path: "/api/socket",
        cors: { origin: "*" },
      });
      (global as any).ioServer = io;

      let viewers = 0;

      io.on("connection", (socket) => {
        viewers++;
        io.emit("updateViewers", viewers);

        socket.on("disconnect", () => {
          viewers--;
          io.emit("updateViewers", viewers);
        });
      });
    } else {
      io = server;
    }
  }
  return NextResponse.json({ message: "Socket.io initialized" });
};
