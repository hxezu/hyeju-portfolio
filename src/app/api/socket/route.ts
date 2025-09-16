import { NextRequest, NextResponse } from "next/server";
import { Server } from "socket.io";
import type { Socket } from "socket.io";
import type { Server as HttpServer } from "http";

declare global {
  var ioServer: Server | undefined;
}

let io: Server;

interface NextRequestWithSocket extends NextRequest {
  socket: {
    server: HttpServer;
  };
}

export const GET = (req: NextRequest) => {
  return NextResponse.json({ message: "Socket.io API running" });
};

export const POST = (req: NextRequest) => {
  if (!io) {
    const server = globalThis.ioServer;
    if (!server) {
      const httpServer = (req as NextRequestWithSocket).socket.server;
      io = new Server(httpServer, {
        path: "/api/socket",
        cors: { origin: "*" },
      });
      globalThis.ioServer = io;

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
