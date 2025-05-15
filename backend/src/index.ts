import express, { json } from "express";
import { userRouter } from "./routers/user";
import { authRouter } from "./routers/auth";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(cors());
app.use(json());
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});
