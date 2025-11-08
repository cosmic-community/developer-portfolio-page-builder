import Link from 'next/link'

export default function PageBuilderPlaceholder() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link href="/admin/pages" className="text-gray-500 hover:text-gray-700">
                ← Back to Pages
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Page Builder</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Drag-and-Drop Page Builder
          </h2>
          <p className="text-gray-600 mb-6">
            The interactive page builder interface would be implemented here with React Beautiful DnD.
            This would allow you to:
          </p>
          <ul className="text-left max-w-md mx-auto mb-8 space-y-2 text-gray-700">
            <li>• Drag components from the sidebar</li>
            <li>• Arrange them in any order</li>
            <li>• Configure component settings</li>
            <li>• Preview changes in real-time</li>
            <li>• Save page configurations to Cosmic</li>
          </ul>
          <p className="text-sm text-gray-500">
            For now, pages can be managed directly in your Cosmic dashboard by editing the content_blocks metadata field.
          </p>
        </div>
      </main>
    </div>
  )
}