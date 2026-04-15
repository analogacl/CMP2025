import fs from "fs"
import path from "path"
import Database from "better-sqlite3"

/** Ruta del archivo SQLite (override con env `SQLITE_PATH`). */
export function getSqlitePath(): string {
  const env = process.env.SQLITE_PATH?.trim()
  if (env) return env
  return path.join(process.cwd(), "data", "cmp2025.sqlite")
}

/** Comprueba si el directorio del .sqlite permite crear/escribir archivos. */
export function isSqliteWritable(): boolean {
  const fp = getSqlitePath()
  const dir = path.dirname(fp)
  try {
    fs.mkdirSync(dir, { recursive: true })
    const probe = path.join(dir, `.write-probe-${process.pid}`)
    fs.writeFileSync(probe, "ok")
    fs.unlinkSync(probe)
    return true
  } catch {
    return false
  }
}

let cachedDb: Database.Database | undefined

export function getPhq9Db(): Database.Database {
  if (cachedDb) return cachedDb
  if (!isSqliteWritable()) {
    throw new Error("Directorio de SQLite no escribible")
  }
  const fp = getSqlitePath()
  const db = new Database(fp)
  db.pragma("journal_mode = WAL")
  db.exec(`
    CREATE TABLE IF NOT EXISTS phq9_submission (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      created_at TEXT NOT NULL,
      answers TEXT NOT NULL,
      total INTEGER NOT NULL,
      severity TEXT NOT NULL
    );
  `)
  cachedDb = db
  return db
}
