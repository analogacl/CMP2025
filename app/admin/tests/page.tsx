import Link from "next/link"
import { redirect } from "next/navigation"
import { isAdminAuthenticated, isAdminPasswordConfigured } from "@/lib/admin-session"
import { listPhq9Submissions, phq9StorageAvailable } from "@/lib/phq9-store"
import { getSqlitePath } from "@/lib/sqlite"
import { Button } from "@/components/ui/button"
import { logoutAdmin } from "@/app/admin/actions"

export const dynamic = "force-dynamic"

export default async function AdminTestsPage() {
  if (!isAdminPasswordConfigured()) {
    return (
      <div className="container max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-[#262626] mb-4">Admin no configurado</h1>
        <p className="text-gray-600 mb-4">
          Define la variable de entorno <code className="bg-gray-100 px-1 rounded">ADMIN_PASSWORD</code> en Vercel
          (o en <code className="bg-gray-100 px-1 rounded">.env.local</code> en desarrollo).
        </p>
        <Link href="/" className="text-[#015233] hover:underline">
          Volver al inicio
        </Link>
      </div>
    )
  }

  if (!(await isAdminAuthenticated())) {
    redirect("/admin/login")
  }

  const rows = listPhq9Submissions()
  const storageOk = phq9StorageAvailable()

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#262626]">Resultados PHQ-9</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Solo puntuación y respuestas anónimas. Máximo 2000 registros mostrados.
          </p>
        </div>
        <form action={logoutAdmin}>
          <Button type="submit" variant="outline">
            Cerrar sesión
          </Button>
        </form>
      </div>

      {!storageOk && (
        <div className="mb-6 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 space-y-2">
          <p>
            No se puede escribir la base de datos SQLite en esta máquina (intento en la carpeta del archivo de base
            de datos). Los resultados del PHQ-9 no se guardarán hasta que haya una ruta escribible.
          </p>
          <p>
            Por defecto el archivo es <code className="font-mono break-all">{getSqlitePath()}</code>. Puedes fijar
            otra ruta con la variable de entorno <code className="font-mono">SQLITE_PATH</code>.
          </p>
          <p className="text-amber-950/90">
            En <strong>Vercel</strong> el código del deploy suele ser solo lectura: muchas veces hace falta definir{" "}
            <code className="font-mono">SQLITE_PATH=/tmp/cmp2025.sqlite</code> (los datos pueden perderse al redeploy o
            entre instancias). Para algo estable sin terceros, lo habitual es un <strong>VPS</strong> o{" "}
            <strong>Docker</strong> con volumen y ejecutar <code className="font-mono">next start</code> ahí.
          </p>
        </div>
      )}

      {rows.length === 0 ? (
        <p className="text-gray-600">Aún no hay resultados.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-50 text-gray-700 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 font-semibold">#</th>
                <th className="px-4 py-3 font-semibold">Fecha (hora Chile)</th>
                <th className="px-4 py-3 font-semibold">Total</th>
                <th className="px-4 py-3 font-semibold">Severidad</th>
                <th className="px-4 py-3 font-semibold">Q1–Q9</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50/80">
                  <td className="px-4 py-3 font-mono text-gray-600">{r.id}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {new Date(r.created_at).toLocaleString("es-CL", {
                      timeZone: "America/Santiago",
                      dateStyle: "short",
                      timeStyle: "short",
                    })}
                  </td>
                  <td className="px-4 py-3 font-medium">{r.total}</td>
                  <td className="px-4 py-3">{r.severity}</td>
                  <td className="px-4 py-3 font-mono text-xs text-gray-700">{r.answers.join(",")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-8 text-sm text-muted-foreground">
        <Link href="/tests/phq-9" className="text-[#015233] hover:underline">
          Ver test público PHQ-9
        </Link>
      </p>
    </div>
  )
}
