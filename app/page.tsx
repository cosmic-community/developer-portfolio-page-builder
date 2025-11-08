import { getPage, getComponents } from '@/lib/cosmic'
import { Page, Component, ContentBlock } from '@/types'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import FeaturesSection from '@/components/FeaturesSection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactSection from '@/components/ContactSection'

export default async function HomePage() {
  const page = await getPage('home') as Page | null
  const allComponents = await getComponents() as Component[]

  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Home page not found. Please create one in the admin panel.</p>
      </div>
    )
  }

  const contentBlocks = page.metadata?.content_blocks || []

  // Sort content blocks by order
  const sortedBlocks = [...contentBlocks].sort((a, b) => a.order - b.order)

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {sortedBlocks.map((block: ContentBlock) => {
          // Find the corresponding component
          const component = allComponents.find(c => 
            c.metadata?.component_type?.key === block.component
          )

          if (!component) return null

          const settings = component.metadata?.settings || {}

          // Render the appropriate component based on type
          switch (block.component) {
            case 'hero':
              return <HeroSection key={block.id} settings={settings} />
            case 'features':
              return <FeaturesSection key={block.id} settings={settings} />
            case 'portfolio':
              return <PortfolioSection key={block.id} />
            case 'contact':
              return <ContactSection key={block.id} settings={settings} />
            default:
              return null
          }
        })}
      </main>
    </div>
  )
}