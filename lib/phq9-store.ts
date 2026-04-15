import type { Phq9Answers } from "@/lib/phq9"
import { getPhq9Db, isSqliteWritable } from "@/lib/sqlite"

export type Phq9Row = {
  id: number
  created_at: string
  answers: number[]
  total: number
  severity: string
}

export function phq9StorageAvailable(): boolean {
  return isSqliteWritable()
}

export function insertPhq9Submission(answers: Phq9Answers, total: number, severity: string): void {
  const created = new Date().toISOString()
  const answersJson = JSON.stringify([...answers])
  getPhq9Db()
    .prepare(
      "INSERT INTO phq9_submission (created_at, answers, total, severity) VALUES (@created, @answers, @total, @severity)",
    )
    .run({ created, answers: answersJson, total, severity })
}

export function listPhq9Submissions(): Phq9Row[] {
  const rows = getPhq9Db()
    .prepare(
      "SELECT id, created_at, answers, total, severity FROM phq9_submission ORDER BY datetime(created_at) DESC LIMIT 2000",
    )
    .all() as { id: number; created_at: string; answers: string; total: number; severity: string }[]

  return rows.map((r) => {
    let answers: number[] = []
    try {
      const parsed = JSON.parse(r.answers) as unknown
      answers = Array.isArray(parsed) ? parsed.map(Number) : []
    } catch {
      answers = []
    }
    return {
      id: r.id,
      created_at: r.created_at,
      answers,
      total: r.total,
      severity: r.severity,
    }
  })
}
