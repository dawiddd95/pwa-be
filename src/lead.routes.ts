// Import Expressa do tworzenia routera
import express from 'express';
// Import połączenia do bazy danych (zdefiniowanego w db.ts)
import { db } from './db';
// Import funkcji do wysyłania powiadomień push
// import { sendNotificationToAll } from './push';

// Tworzymy router Expressa – osobną przestrzeń endpointów
const router = express.Router();

// Definiujemy endpoint POST / (np. /api/leads) do dodania nowego leada
router.post('/', async (req, res) => {
  console.log('DOSTAŁEM:', req.body); // Dodaj ten log
  // Destrukturyzujemy name i email z ciała żądania
  const { name, email } = req.body;

  // Wykonujemy zapytanie SQL do bazy danych – INSERT nowego leada z aktualną datą
  await db.query(
    'INSERT INTO leads(name, email) VALUES($1, $2)',
    [name, email] // wartości podstawione do zapytania (zapobiega SQL injection)
  );

  // Wysyłamy powiadomienie push do wszystkich zarejestrowanych subskrypcji
  // await sendNotificationToAll(`Nowy lead: ${name}`, `${email} właśnie się zapisał`);

  // Zwracamy status 201 Created bez treści
  res.sendStatus(201);
});

router.get('/', async (req, res) => {
  // Zwracamy status 201 Created bez treści
  res.json({success: 'Udało się'})
});

// Eksportujemy router do użycia w głównym pliku serwera
export default router;
