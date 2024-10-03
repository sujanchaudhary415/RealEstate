import express from "express";
import cors from "cors"; // Importing the cors module
import cookieParser from "cookie-parser"
import authRoute from "./routes/auth.route.js"

const app=express();


app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from the frontend running on this origin
    credentials: true, // Allow credentials (cookies, etc.)
}));


app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoute)



app.listen(8800,()=>{
    console.log("Server is running ")
})