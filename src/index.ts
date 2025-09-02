import express from 'express';
import { getTemperature } from './controllers/temperature';

const app = express();
const port = process.env.PORT || 8001;

app.use(express.json());

app.get('/temperature', getTemperature);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
