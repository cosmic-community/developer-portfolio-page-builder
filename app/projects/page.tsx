import { getProjects } from '@/lib/cosmic'
import { Project } from '@/types'
import Navigation from '@/components/Navigation'
import ProjectCard from '@/components/ProjectCard'

export const metadata = {
  title: 'Projects | Developer Portfolio',
  description: 'Browse my portfolio of web development projects',
}

export default async function ProjectsPage() {
  const projects = await getProjects() as Project[]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of web applications and projects I've built
          </p>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No projects found. Add some in the admin panel!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}