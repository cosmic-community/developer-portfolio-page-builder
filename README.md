# Developer Portfolio Page Builder

![App Preview](https://imgix.cosmicjs.com/4d1089e0-bcd9-11f0-b049-c1460c42eb3b-photo-1498050108023-c5249f4df085-1762630192953.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, full-featured portfolio website with an integrated drag-and-drop page builder. Showcase your projects beautifully while managing content effortlessly through an intuitive admin backend.

## ✨ Features

- 🎨 **Drag-and-Drop Page Builder** - Intuitive admin interface for building pages without code
- 🧩 **Component Library** - Pre-built, customizable components (hero, features, portfolio, contact forms)
- 💼 **Project Portfolio Management** - Complete CRUD operations for showcasing your work
- 📱 **Fully Responsive** - Beautiful design that works on all devices
- ⚡ **Real-Time Preview** - See changes instantly as you build
- 🎯 **Dynamic Routing** - Pages and projects dynamically generated from Cosmic content
- 🔒 **Admin Authentication** - Secure backend for content management
- 📊 **SEO Optimized** - Proper meta tags and semantic HTML

## 🎯 Clone this Project

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=690f99b3fb7423bbdde4e973&clone_repository=690f9b8efb7423bbdde4e99f)

## 📝 Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a website for a web developer that includes an admin backend that enables drag and drop page building."

### Code Generation Prompt

> Based on the content model I created for "Create a website for a web developer that includes an admin backend that enables drag and drop page building.", now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Cosmic CMS** - Headless CMS for content management
- **React Beautiful DnD** - Drag-and-drop functionality
- **React Hook Form** - Form management
- **Lucide React** - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun runtime
- A Cosmic account with the provided content model

### Installation

1. Clone this repository:
```bash
git clone <repository-url>
cd developer-portfolio-builder
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

4. Run the development server:
```bash
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

6. Access the admin panel at [http://localhost:3000/admin](http://localhost:3000/admin)

## 📚 Cosmic SDK Examples

### Fetching Pages with Components

```typescript
import { cosmic } from '@/lib/cosmic'

// Get a page with all its component configurations
const response = await cosmic.objects
  .findOne({
    type: 'pages',
    slug: 'home'
  })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)

const page = response.object
```

### Creating a New Project

```typescript
import { cosmic } from '@/lib/cosmic'

const newProject = await cosmic.objects.insertOne({
  type: 'projects',
  title: 'My New Project',
  metadata: {
    project_name: 'My New Project',
    description: 'Project description here',
    technologies: 'Next.js, React, TypeScript',
    live_url: 'https://example.com',
    github_url: 'https://github.com/username/project',
    completion_date: '2024-01-15',
    featured: true
  }
})
```

### Updating Page Components

```typescript
import { cosmic } from '@/lib/cosmic'

// Update the content blocks for a page
await cosmic.objects.updateOne('page-id-here', {
  metadata: {
    content_blocks: [
      { id: 'hero-1', component: 'hero', order: 1 },
      { id: 'features-1', component: 'features', order: 2 },
      { id: 'portfolio-1', component: 'portfolio', order: 3 }
    ]
  }
})
```

## 🔌 Cosmic CMS Integration

This application uses Cosmic CMS for all content management. The integration includes:

- **Dynamic Pages** - Pages are rendered based on `content_blocks` metadata, allowing flexible page composition
- **Component System** - Reusable components with configurable settings stored as JSON
- **Project Management** - Full portfolio management with images, links, and metadata
- **Real-Time Updates** - Content changes reflect immediately on the frontend

### Content Structure

**Pages Object Type:**
- Title, SEO description
- Content blocks array (references to components with order)

**Components Object Type:**
- Component name and type (hero, features, portfolio, contact, CTA)
- Settings stored as JSON for flexibility
- Preview images for admin interface

**Projects Object Type:**
- Project details (name, description, technologies)
- Featured images with Imgix optimization
- Live URLs, GitHub links, client information
- Completion dates and featured status

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables:
   - `COSMIC_BUCKET_SLUG`
   - `COSMIC_READ_KEY`
   - `COSMIC_WRITE_KEY`
4. Deploy!

### Netlify

1. Connect your Git repository
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Deploy!

### Environment Variables

Make sure to set these environment variables in your hosting platform:

- `COSMIC_BUCKET_SLUG` - Your Cosmic bucket slug
- `COSMIC_READ_KEY` - Your Cosmic read key
- `COSMIC_WRITE_KEY` - Your Cosmic write key

## 📖 Usage

### Public Site

- **Home Page** - Dynamic page built from content blocks (hero, features, portfolio, contact)
- **About Page** - Customizable about section with features and contact form
- **Projects** - Browse all portfolio projects with filtering
- **Individual Projects** - Detailed project pages with all information

### Admin Panel

- **Dashboard** - Overview of pages, components, and projects
- **Page Builder** - Drag-and-drop interface for arranging components on pages
- **Component Manager** - Create and edit reusable components
- **Project Manager** - Full CRUD for portfolio projects
- **Preview Mode** - See changes in real-time before publishing

<!-- README_END -->