// app/projects/[slug]/page.tsx
import { getProject, getProjects } from '@/lib/cosmic'
import { Project } from '@/types'
import Navigation from '@/components/Navigation'
import { ExternalLink, Github, Calendar, User } from 'lucide-react'
import { format } from 'date-fns'
import Link from 'next/link'

export async function generateStaticParams() {
  const projects = await getProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProject(slug) as Project | null
  
  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.metadata.project_name} | Developer Portfolio`,
    description: project.metadata.description,
  }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = await getProject(slug) as Project | null

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-center text-gray-500">Project not found</p>
        </main>
      </div>
    )
  }

  const {
    project_name,
    description,
    featured_image,
    technologies,
    live_url,
    github_url,
    client,
    completion_date,
  } = project.metadata

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link 
          href="/projects"
          className="text-primary hover:underline mb-8 inline-block"
        >
          ← Back to Projects
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {featured_image && (
            <img
              src={`${featured_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
              alt={project_name}
              className="w-full h-96 object-cover"
            />
          )}

          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{project_name}</h1>
            
            <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
              {client && (
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{client}</span>
                </div>
              )}
              {completion_date && (
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{format(new Date(completion_date), 'MMMM yyyy')}</span>
                </div>
              )}
            </div>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">{description}</p>

            {technologies && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-3">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {technologies.split(',').map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 pt-6 border-t">
              {live_url && (
                <a
                  href={live_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Live Site</span>
                </a>
              )}
              {github_url && (
                <a
                  href={github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              )}
            </div>
          </div>
        </article>
      </main>
    </div>
  )
}