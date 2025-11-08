import Link from 'next/link'
import { getProjects } from '@/lib/cosmic'
import { Project } from '@/types'
import { Briefcase, Plus } from 'lucide-react'

export default async function AdminProjectsPage() {
  const projects = await getProjects() as Project[]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Link href="/admin" className="text-gray-500 hover:text-gray-700">
                ← Back
              </Link>
              <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
            </div>
            <Link
              href="/admin/projects/new"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              <Plus className="w-5 h-5" />
              Add Project
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {projects.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-lg shadow">
            <Briefcase className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-500 mb-4">No projects yet</p>
            <Link
              href="/admin/projects/new"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90"
            >
              <Plus className="w-5 h-5" />
              Add Your First Project
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                {project.metadata.featured_image && (
                  <img
                    src={`${project.metadata.featured_image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
                    alt={project.metadata.project_name}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.metadata.project_name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {project.metadata.description}
                  </p>
                  {project.metadata.featured && (
                    <span className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded mb-4">
                      Featured
                    </span>
                  )}
                  <div className="flex gap-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex-1 text-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/90"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  )
}