import "dotenv/config";
import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";

const wss = new WebSocketServer({ port: 3001 });

wss.on("connection", async (ws) => {
  try {
    const res = await prisma.user.create({
      data: {
        username: "websocket_user_shubham",
        password: "websocket_password"
      }
    })
    console.log("User created:", res);
    ws.send("Hello from WebSocket server!");
  } catch (err) {
    console.error("Error:", err);
    ws.send("Error creating user");
  }
})