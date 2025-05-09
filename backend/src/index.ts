import express from "express";
import { userRouter } from "./routers/user";

const app = express();

app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});
