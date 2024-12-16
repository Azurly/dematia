import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors()); // Pour gérer les requêtes CORS
app.use(express.json()); // Pour parser les requêtes JSON

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});