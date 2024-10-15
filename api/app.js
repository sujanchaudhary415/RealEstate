import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js"

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL, // Make sure this is set correctly
    credentials: true, // Allow cookies to be sent
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/test", testRoute);
app.use("/api/posts",postRoute)

app.listen(8800, () => {
  console.log("Server is running");
});
