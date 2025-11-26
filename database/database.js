import * as SQLite from "expo-sqlite";

let db = null;

// Inicializa o banco de dados
export const initDatabase = async () => {
  if (db) return db; // evita abrir novamente

  db = await SQLite.openDatabaseAsync("login.db");

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    );
  `);

  // Inserir usuário padrão
  await db.runAsync(
    `INSERT OR IGNORE INTO users (id, username, password)
     VALUES (1, 'admin', '12345');`
  );

  console.log("Banco SQLite inicializado com sucesso!");
  return db;
};

// Login com API moderna
export const validateLogin = async (username, password) => {
  if (!db) await initDatabase();

  const user = await db.getFirstAsync(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password]
  );

  return user ? true : false;
};

export default db;

export const registerUser = async (username, password) => {
    if (!db) await initDatabase();

    try {
        await db.runAsync(
            "INSERT INTO users (username, password) VALUES (?, ?)",
            [username, password]
        );

        return true;
    } catch (err) {
        return false;
    }
};

