import { type SQLiteDatabase } from "expo-sqlite";

export default async function initializeDatabase(database: SQLiteDatabase){
    await database.execAsync(`
        CREATE TABLE IF NOT EXISTS clients(
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          nome_cliente TEXT NOT NULL 
        )
    `)
}