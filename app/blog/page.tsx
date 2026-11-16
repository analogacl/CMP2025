import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { buildPageMetadata } from "@/lib/seo"
import { blogPosts, formatPostDate } from "@/lib/blog"
import JsonLd from "@/components/json-ld"
import { getBreadcrumbSchema } from "@/lib/schema-org"

export const metadata: Metadata = buildPageMetadata({
  title: "Blog de salud mental",
  description:
    "Artículos de salud mental escritos por nuestro equipo: depresión, depresión posparto, ansiedad, salud mental en personas mayores y cuándo pedir ayuda.",
  path: "/blog",
  keywords: ["blog salud mental", "depresión", "ansiedad", "depresión posparto", "psiquiatría"],
})

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => b.datePublished.localeCompare(a.datePublished))

  return (
    <div className="min-h-screen bg-gray-50">
      <JsonLd data={getBreadcrumbSchema([{ name: "Blog", path: "/blog" }])} />
      <section className="bg-white border-b border-gray-100 py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#262626] mb-4">Blog de salud mental</h1>
          <p className="text-lg text-gray-600">
            Información para entender lo que te pasa y saber cuándo pedir ayuda, escrita por nuestro equipo de
            psicólogos y psiquiatras.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl grid gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <p className="text-sm text-gray-500 mb-2">
                {post.author.name} · {formatPostDate(post.datePublished)}
              </p>
              <h2 className="text-2xl font-bold text-[#262626] mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#015233]">
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="inline-flex items-center text-[#015233] font-semibold">
                Leer artículo <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
