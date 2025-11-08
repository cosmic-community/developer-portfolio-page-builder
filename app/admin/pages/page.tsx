import Link from 'next/link'
import { getPages } from '@/lib/cosmic'
import { Page } from '@/types'
import { FileText, Plus } from 'lucide-react'

export default async function AdminPagesPage() {
  const pages = await getPages() as Page[]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link href="/admin" className="text-gray-500 hover:text-gray-700">
                ← Back
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Pages</h1>
            </div>
            <Link
              href="/admin/pages/builder"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              <Plus className="w-5 h-5" />
              Build New Page
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {pages.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <FileText className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 mb-4">No pages yet</p>
            <Link
              href="/admin/pages/builder"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              <Plus className="w-5 h-5" />
              Create Your First Page
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pages.map((page) => (
              <div key={page.id} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{page.metadata.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {page.metadata.content_blocks?.length || 0} components
                </p>
                <div className="flex gap-2">
                  <Link
                    href={`/admin/pages/builder?page=${page.slug}`}
                    className="flex-1 text-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                  >
                    Edit
                  </Link>
                  <Link
                    href={`/${page.slug === 'home' ? '' : page.slug}`}
                    className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50"
                  >
                    View
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}