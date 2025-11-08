// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Component type literals
export type ComponentType = 'hero' | 'features' | 'testimonials' | 'contact' | 'cta' | 'portfolio';

// Component settings interfaces
export interface HeroSettings {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface FeaturesSettings {
  heading: string;
  features: FeatureItem[];
}

export interface ContactField {
  name: string;
  label: string;
  type: string;
  required: boolean;
}

export interface ContactSettings {
  heading: string;
  subheading: string;
  fields: ContactField[];
  submitText: string;
}

// Content block for page composition
export interface ContentBlock {
  id: string;
  component: ComponentType;
  order: number;
}

// Page object type
export interface Page extends CosmicObject {
  type: 'pages';
  metadata: {
    title: string;
    seo_description?: string;
    content_blocks?: ContentBlock[];
  };
}

// Component object type
export interface Component extends CosmicObject {
  type: 'components';
  metadata: {
    name: string;
    component_type: {
      key: ComponentType;
      value: string;
    };
    settings?: HeroSettings | FeaturesSettings | ContactSettings | Record<string, any>;
    preview_image?: {
      url: string;
      imgix_url: string;
    };
  };
}

// Project object type
export interface Project extends CosmicObject {
  type: 'projects';
  metadata: {
    project_name: string;
    description: string;
    featured_image?: {
      url: string;
      imgix_url: string;
    };
    technologies?: string;
    live_url?: string;
    github_url?: string;
    client?: string;
    completion_date?: string;
    featured?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards
export function isPage(obj: CosmicObject): obj is Page {
  return obj.type === 'pages';
}

export function isComponent(obj: CosmicObject): obj is Component {
  return obj.type === 'components';
}

export function isProject(obj: CosmicObject): obj is Project {
  return obj.type === 'projects';
}