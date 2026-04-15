import { promises as fs } from "fs"
import path from "path"
import { neon, type NeonQueryFunction } from "@neondatabase/serverless"
import type { Phq9Answers } from "@/lib/phq9"

export type Phq9Row = {
  id: number
  created_at: string
  answers: number[]
  total: number
  severity: string
}

const DEV_FILE = path.join(process.cwd(), "data", "phq9-submissions.json")

function hasDb(): boolean {
  return Boolean(process.env.DATABASE_URL?.trim())
}

function getSql(): NeonQueryFunction<false, false> {
  return neon(process.env.DATABASE_URL!)
}

async function ensureNeonTable(sql: NeonQueryFunction<false, false>): Promise<void> {
  await sql`
    CREATE TABLE IF NOT EXISTS phq9_submission (
      id SERIAL PRIMARY KEY,
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      answers TEXT NOT NULL,
      total INTEGER NOT NULL,
      severity TEXT NOT NULL
    )
  `
}

async function readDevFile(): Promise<Phq9Row[]> {
  try {
    const raw = await fs.readFile(DEV_FILE, "utf-8")
    const parsed = JSON.parse(raw) as Phq9Row[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

async function writeDevFile(rows: Phq9Row[]): Promise<void> {
  await fs.mkdir(path.dirname(DEV_FILE), { recursive: true })
  await fs.writeFile(DEV_FILE, JSON.stringify(rows, null, 2), "utf-8")
}

export function phq9StorageAvailable(): boolean {
  if (hasDb()) return true
  if (process.env.VERCEL) return false
  return true
}

export async function insertPhq9Submission(answers: Phq9Answers, total: number, severity: string): Promise<void> {
  if (hasDb()) {
    const sql = getSql()
    await ensureNeonTable(sql)
    const answersJson = JSON.stringify([...answers])
    await sql`
      INSERT INTO phq9_submission (answers, total, severity)
      VALUES (${answersJson}, ${total}, ${severity})
    `
    return
  }

  if (process.env.VERCEL) {
    throw new Error("DATABASE_URL es obligatorio en Vercel para guardar resultados.")
  }

  const rows = await readDevFile()
  const nextId = rows.length ? Math.max(...rows.map((r) => r.id)) + 1 : 1
  rows.unshift({
    id: nextId,
    created_at: new Date().toISOString(),
    answers: [...answers],
    total,
    severity,
  })
  await writeDevFile(rows)
}

export async function listPhq9Submissions(): Promise<Phq9Row[]> {
  if (hasDb()) {
    const sql = getSql()
    await ensureNeonTable(sql)
    const rows = await sql`
      SELECT id, created_at, answers, total, severity
      FROM phq9_submission
      ORDER BY created_at DESC
      LIMIT 2000
    `
    return (rows as { id: number; created_at: string | Date; answers: string; total: number; severity: string }[]).map(
      (r) => {
        let answers: number[] = []
        try {
          const parsed = JSON.parse(r.answers) as unknown
          answers = Array.isArray(parsed) ? parsed.map(Number) : []
        } catch {
          answers = []
        }
        const created =
          r.created_at instanceof Date ? r.created_at.toISOString() : String(r.created_at)
        return { id: r.id, created_at: created, answers, total: r.total, severity: r.severity }
      },
    )
  }

  return readDevFile()
}
