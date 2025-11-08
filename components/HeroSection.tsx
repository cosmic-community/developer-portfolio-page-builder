import Link from 'next/link'
import { HeroSettings } from '@/types'

interface HeroSectionProps {
  settings: Partial<HeroSettings>;
}

export default function HeroSection({ settings }: HeroSectionProps) {
  const {
    headline = 'Welcome',
    subheadline = 'Discover amazing content',
    ctaText = 'Get Started',
    ctaLink = '#',
    backgroundImage,
  } = settings

  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center text-white"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{headline}</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100">{subheadline}</p>
        <Link
          href={ctaLink}
          className="inline-block px-8 py-4 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  )
}