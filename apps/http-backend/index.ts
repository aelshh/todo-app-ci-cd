import express from "express";
import { prisma } from "@repo/db";

const app = express();

app.get("/", async (req, res) => {
  const response = await prisma.user.findMany();

  return res.json({
    data: response,
  });
});

app.post("/", async (req, res) => {
  const response = await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  return res.json({
    data: response,
  });
});

app.listen(3001);
