import { getDefaultSchemaGraph } from "@/lib/schema-org"

/**
 * Emits default Organization + WebSite JSON-LD. Add more `<StructuredData />` or
 * page-level scripts for BreadcrumbList, FAQPage, etc.
 */
export default function StructuredData() {
  const graph = getDefaultSchemaGraph()
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
