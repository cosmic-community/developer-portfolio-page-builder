import Link from 'next/link'
import { getPages, getComponents, getProjects } from '@/lib/cosmic'
import { FileText, Box, Briefcase } from 'lucide-react'

export const metadata = {
  title: 'Admin Dashboard | Developer Portfolio',
  description: 'Manage your portfolio content',
}

export default async function AdminDashboard() {
  const pages = await getPages()
  const components = await getComponents()
  const projects = await getProjects()

  const stats = [
    {
      name: 'Pages',
      count: pages.length,
      icon: FileText,
      href: '/admin/pages',
      color: 'bg-blue-500',
    },
    {
      name: 'Components',
      count: components.length,
      icon: Box,
      href: '/admin/components',
      color: 'bg-purple-500',
    },
    {
      name: 'Projects',
      count: projects.length,
      icon: Briefcase,
      href: '/admin/projects',
      color: 'bg-green-500',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <Link
              href="/"
              className="text-primary hover:underline"
            >
              View Site →
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Link
                key={stat.name}
                href={stat.href}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-3xl font-bold text-gray-900">{stat.count}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-700">{stat.name}</h3>
              </Link>
            )
          })}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/admin/pages/builder"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
            >
              <p className="font-semibold text-gray-700">Build a Page</p>
              <p className="text-sm text-gray-500 mt-1">Use the drag-and-drop builder</p>
            </Link>
            <Link
              href="/admin/projects/new"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
            >
              <p className="font-semibold text-gray-700">Add a Project</p>
              <p className="text-sm text-gray-500 mt-1">Showcase your latest work</p>
            </Link>
            <Link
              href="/admin/components/new"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
            >
              <p className="font-semibold text-gray-700">Create Component</p>
              <p className="text-sm text-gray-500 mt-1">Build reusable page sections</p>
            </Link>
            <Link
              href="/"
              className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors text-center"
            >
              <p className="font-semibold text-gray-700">Preview Site</p>
              <p className="text-sm text-gray-500 mt-1">See your live website</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}