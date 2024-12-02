import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import {MongoDB_URI, PORT} from "./app/config/config.js";
import router from "./routes/api.js";

// create an app instance
const app = express();



// init global middleware
app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(hpp())
app.use(cookieParser())


// database connection
mongoose.connect(MongoDB_URI, {autoIndex:true}).then(()=>
    console.log("MongoDB Connected"),
)
    .catch(err => console.log(err));

// router init
app.use("/api", router)


// app listener
app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));

