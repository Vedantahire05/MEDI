import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import chatRoutes from "./routes/chatRoutes.js";
import meditimeRoutes from './routes/meditime.js';
import './scheduler/reminderScheduler.js';
import path from 'path'

dotenv.config();
connectDB();

const app = express();

const _dirname = path.resolve()

app.use(express.json());
app.use(cors());

app.use("/api", chatRoutes);
app.use('/api', meditimeRoutes);

app.use(express.static(path.join(_dirname, "/frontend/build")))
app.get('*', (_, res) => {
    res.sendFile(path.resolve(_dirname, "frontend", "build", "index.html"))
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
