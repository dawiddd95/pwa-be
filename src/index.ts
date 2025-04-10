// Importujemy Expressa – główny framework backendowy
import express from 'express';
// Importujemy CORS – pozwala na komunikację front-back w różnych domenach
import cors from 'cors';
// Import parsera JSON – pozwala czytać JSON w request.body
import bodyParser from 'body-parser';
// Importujemy nasz router z obsługą leadów
import leadRoutes from './lead.routes';

// Tworzymy aplikację Express
const app = express();

// Włączamy CORS, by zezwolić na zapytania z frontendu (localhost, netlify itd.)
app.use(cors());

// Włączamy automatyczne parsowanie JSON w request.body
app.use(bodyParser.json());

// Montujemy router pod ścieżką /api/leads
app.use('/api/leads', leadRoutes);

// Odpalamy serwer na porcie 3000 i logujemy info
app.listen(3000, () => console.log('Server działa na http://localhost:3000'));
