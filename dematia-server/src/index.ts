import express from 'express';
import cors from 'cors';
import authRoutes from "./routes/auth";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors()); // Pour gérer les requêtes CORS
app.use(express.json()); // Pour parser les requêtes JSON

app.use('/auth', authRoutes);

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});