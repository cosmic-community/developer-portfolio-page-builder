import { getFeaturedProjects } from '@/lib/cosmic'
import { Project } from '@/types'
import ProjectCard from './ProjectCard'
import Link from 'next/link'

export default async function PortfolioSection() {
  const projects = await getFeaturedProjects() as Project[]

  if (projects.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Check out some of my recent work</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  )
}