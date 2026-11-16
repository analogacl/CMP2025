import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { buildPageMetadata } from "@/lib/seo"
import { blogPosts, formatPostDate, getBlogPost } from "@/lib/blog"
import ArticleBody from "@/components/article-body"
import JsonLd from "@/components/json-ld"
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/schema-org"

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}
  return buildPageMetadata({
    title: post.seoTitle,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogType: "article",
  })
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  return (
    <div className="bg-white">
      <JsonLd
        data={getArticleSchema({
          slug: post.slug,
          title: post.title,
          description: post.description,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          author: post.author,
        })}
      />
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />

      <article className="container mx-auto px-4 py-12 max-w-3xl">
        <nav aria-label="Ruta de navegación" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#015233]">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#015233]">Blog</Link>
        </nav>

        <h1 className="text-3xl md:text-4xl font-bold text-[#262626] leading-tight mb-4">{post.title}</h1>

        <div className="text-sm text-gray-600 border-b border-gray-100 pb-6 mb-6">
          {post.author.type === "team" ? (
            <p>
              Por{" "}
              <Link href={`/equipo/${post.author.slug}`} className="font-semibold text-[#015233] hover:underline">
                {post.author.name}
              </Link>
              . {post.author.credentials}.
            </p>
          ) : (
            <p>
              Por <span className="font-semibold text-[#262626]">{post.author.name}</span>.
            </p>
          )}
          <p className="mt-1">
            Publicado originalmente el {formatPostDate(post.datePublished)} en el blog de Centro Médico Phillips.
          </p>
        </div>

        <ArticleBody body={post.body} />

        <aside className="mt-10 rounded-lg border border-red-100 bg-red-50 p-5 text-sm text-gray-700">
          <p className="font-semibold text-[#262626] mb-1">Si estás en crisis</p>
          <p>
            Si tienes pensamientos de hacerte daño, llama a la Línea de Prevención del Suicidio{" "}
            <a href="tel:*4141" className="font-semibold text-[#015233]">*4141</a> (gratuita, 24 horas) o acude al
            servicio de urgencia más cercano.
          </p>
        </aside>

        <p className="mt-6 text-sm text-gray-500">
          Este artículo es informativo y no reemplaza una evaluación profesional.
        </p>

        {post.sources?.length ? (
          <section className="mt-8">
            <h2 className="text-lg font-semibold text-[#262626] mb-2">Referencias</h2>
            <ul className="text-sm text-gray-600 space-y-2">
              {post.sources.map((source) => (
                <li key={source.label}>
                  {source.url ? (
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="underline">
                      {source.label}
                    </a>
                  ) : (
                    source.label
                  )}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="mt-10 rounded-xl bg-[#015233]/5 p-6">
          <h2 className="text-xl font-bold text-[#262626] mb-3">¿Quieres hablar con un profesional?</h2>
          <p className="text-gray-700 mb-4">
            Nuestro equipo de psicólogos y psiquiatras atiende de forma presencial en Santiago y online, con FONASA,
            ISAPRE o particular.
          </p>
          <Link
            href="/reserva"
            className="inline-block bg-[#015233] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#015233]/90"
          >
            Reserva tu hora
          </Link>
          <ul className="mt-6 space-y-2">
            {post.related.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#015233] font-medium hover:underline">
                  {item.label} →
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  )
}
