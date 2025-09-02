import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { getTemperature } from './controllers/temperature';

dotenv.config();

const app = express();
const port = process.env.PORT || 8001;

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);

app.use(express.json());

app.get('/api/temperature', getTemperature);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
