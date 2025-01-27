import express from 'express';
import dotenv from 'dotenv';


import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectToMongoDB from './database/connectToMongoDB.js';
import cookieParser from 'cookie-parser';
const PORT = process.env.PORT || 8000;
const app = express();

dotenv.config();



app.use(express.json()); // to parse the incoming data with JSON payloads (from request body)
app.use(cookieParser()); // to parse the incoming cookies from the request headers
 
app.get("/",(req,res) => {
// root route http://localhost:8000/
res.send("Hello Wrld");

})

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);



app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`server is running on port ${PORT}`);
});