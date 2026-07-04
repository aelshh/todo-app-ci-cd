import { WebSocketServer } from "ws";
import { prisma } from "@repo/db";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("connect to ws server");

  ws.on("message", async (data) => {
    const parsedData = await JSON.parse(data.toString());
    console.log(parsedData);
    console.log(typeof Math.random().toString());
    const userResponse = await prisma.user.create({
      data: {
        username: Math.random().toString(),
        password: Math.random().toString(),
      },
    });

    const todoResponse = await prisma.todo.create({
      data: {
        task: "Some random ass task",
        done: false,
        userId: userResponse.id,
      },
    });
    ws.send(
      JSON.stringify({
        message: "Hey thanks for connecting, Created user and todo",
      }),
    );
  });
});
