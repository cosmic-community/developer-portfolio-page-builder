import Link from 'next/link'

export default function NewProjectPlaceholder() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link href="/admin/projects" className="text-gray-500 hover:text-gray-700">
                ← Back to Projects
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Add New Project</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Project Form
          </h2>
          <p className="text-gray-600 mb-6">
            A full project creation form would be implemented here with React Hook Form.
            This form would allow you to:
          </p>
          <ul className="mb-8 space-y-2 text-gray-700">
            <li>• Enter project details (name, description, client)</li>
            <li>• Upload featured images</li>
            <li>• Add technologies used</li>
            <li>• Include live and GitHub URLs</li>
            <li>• Set completion date</li>
            <li>• Mark as featured</li>
          </ul>
          <p className="text-sm text-gray-500 mb-4">
            For now, projects can be created directly in your Cosmic dashboard.
          </p>
          <Link
            href={`https://app.cosmicjs.com/${process.env.COSMIC_BUCKET_SLUG}/objects/projects`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
          >
            Open Cosmic Dashboard
          </Link>
        </div>
      </main>
    </div>
  )
}