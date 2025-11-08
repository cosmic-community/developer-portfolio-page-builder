import Link from 'next/link'
import { getComponents } from '@/lib/cosmic'
import { Component } from '@/types'
import { Box, Plus } from 'lucide-react'

export default async function AdminComponentsPage() {
  const components = await getComponents() as Component[]

  const componentTypeColors: Record<string, string> = {
    hero: 'bg-blue-100 text-blue-800',
    features: 'bg-purple-100 text-purple-800',
    portfolio: 'bg-green-100 text-green-800',
    contact: 'bg-orange-100 text-orange-800',
    cta: 'bg-pink-100 text-pink-800',
    testimonials: 'bg-yellow-100 text-yellow-800',
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link href="/admin" className="text-gray-500 hover:text-gray-700">
                ← Back
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Components</h1>
            </div>
            <Link
              href="/admin/components/new"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              <Plus className="w-5 h-5" />
              Create Component
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {components.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <Box className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 mb-4">No components yet</p>
            <Link
              href="/admin/components/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              <Plus className="w-5 h-5" />
              Create Your First Component
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component) => {
              const componentType = component.metadata.component_type?.key || 'default'
              const colorClass = componentTypeColors[componentType] || 'bg-gray-100 text-gray-800'

              return (
                <div key={component.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {component.metadata.preview_image && (
                    <img
                      src={`${component.metadata.preview_image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
                      alt={component.metadata.name}
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {component.metadata.name}
                      </h3>
                      <span className={`px-2 py-1 rounded text-xs ${colorClass}`}>
                        {component.metadata.component_type?.value || 'Unknown'}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Used in page builder
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}