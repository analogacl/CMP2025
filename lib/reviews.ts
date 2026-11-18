/**
 * Resumen de evaluaciones de pacientes (encuestas de satisfacción).
 * Única fuente para el badge y la sección de testimonios: actualizar aquí.
 */
export const REVIEWS_SUMMARY = {
  rating: 4.9,
  total: 266,
} as const

/** 4.9 -> "4,9" (formato es-CL) */
export const formatRating = (rating: number) => rating.toLocaleString("es-CL", { minimumFractionDigits: 1 })
