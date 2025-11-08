import Link from 'next/link'
import { Project } from '@/types'
import { ExternalLink, Github } from 'lucide-react'

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const {
    project_name,
    description,
    featured_image,
    technologies,
    live_url,
    github_url,
  } = project.metadata

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {featured_image && (
        <Link href={`/projects/${project.slug}`}>
          <img
            src={`${featured_image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={project_name}
            className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
          />
        </Link>
      )}
      
      <div className="p-6">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
            {project_name}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        {technologies && (
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.split(',').slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
              >
                {tech.trim()}
              </span>
            ))}
          </div>
        )}
        
        <div className="flex gap-3">
          {live_url && (
            <a
              href={live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:underline"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Site</span>
            </a>
          )}
          {github_url && (
            <a
              href={github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-700 hover:underline"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}