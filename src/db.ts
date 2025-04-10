// Import klasy Pool z paczki 'pg' – służy do tworzenia puli połączeń do bazy PostgreSQL
import { Pool } from 'pg';

// Import paczki dotenv – pozwala ładować zmienne środowiskowe z pliku .env
import dotenv from 'dotenv';

// Wywołujemy config() aby wczytać zmienne z pliku .env do process.env
dotenv.config();

// Tworzymy i eksportujemy pulę połączeń do bazy PostgreSQL
export const db = new Pool({
  connectionString: process.env.DATABASE_URL // Ładujemy connection string z pliku .env
});