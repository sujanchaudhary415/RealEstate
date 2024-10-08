import express from "express";
import cors from "cors"; 
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route.js";



const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL, // Make sure this is set correctly
    credentials: true, // Allow cookies to be sent
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);

app.listen(8800, () => {
    console.log("Server is running");
});
