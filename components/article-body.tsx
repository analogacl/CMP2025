import type { ReactNode } from "react"

/**
 * Renderiza el formato simple de lib/blog.ts: párrafos, "## "/"### " títulos,
 * "- " listas y "> " citas. Sin dependencias de Markdown.
 */
export default function ArticleBody({ body }: { body: string }) {
  const blocks = body.trim().split(/\n\s*\n/)
  const out: ReactNode[] = []

  blocks.forEach((block, i) => {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean)
    if (lines.every((l) => l.startsWith("- "))) {
      out.push(
        <ul key={i} className="list-disc pl-6 my-5 space-y-2 text-gray-700">
          {lines.map((l, j) => (
            <li key={j}>{l.slice(2)}</li>
          ))}
        </ul>,
      )
    } else if (lines[0].startsWith("### ")) {
      out.push(
        <h3 key={i} className="text-xl font-semibold text-[#262626] mt-8 mb-3">
          {lines[0].slice(4)}
        </h3>,
      )
    } else if (lines[0].startsWith("## ")) {
      out.push(
        <h2 key={i} className="text-2xl font-bold text-[#262626] mt-10 mb-4">
          {lines[0].slice(3)}
        </h2>,
      )
    } else if (lines[0].startsWith("> ")) {
      out.push(
        <blockquote key={i} className="border-l-4 border-[#015233] bg-[#015233]/5 pl-4 pr-4 py-3 my-6 italic text-gray-700">
          {lines.map((l) => l.replace(/^>\s?/, "")).join(" ")}
        </blockquote>,
      )
    } else {
      out.push(
        <p key={i} className="text-gray-700 leading-relaxed my-4">
          {lines.join(" ")}
        </p>,
      )
    }
  })

  return <>{out}</>
}
