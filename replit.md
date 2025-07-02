# Vinil Vale Revestimentos - Landing Page

## Overview

This is a modern React landing page for Vinil Vale Revestimentos, a company specializing in vinyl pool linings, protective covers, and thermal covers. The application is built using a full-stack architecture with React frontend, Express.js backend, and PostgreSQL database with Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight router)
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints with CORS support
- **Development**: Hot module replacement via Vite integration

### Data Storage
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with type-safe queries
- **Schema**: Centralized in shared directory for type consistency
- **Validation**: Zod schemas for runtime validation

## Key Components

### Landing Page Sections
1. **Hero Section**: Eye-catching banner with primary CTA
2. **Benefits Section**: Four key selling points with icons
3. **Testimonials**: Rotating carousel of customer reviews
4. **Suppliers**: Partner brands showcase
5. **Contact Form**: Lead generation with validation
6. **FAQ**: Collapsible frequently asked questions
7. **Navigation**: Sticky header with smooth scrolling
8. **Floating CTA**: Persistent call-to-action button

### Database Schema
- **Leads Table**: Captures potential customer information
  - Contact details (name, email, phone)
  - Service type selection
  - Optional message field
  - Timestamp tracking

### UI Components
- Complete shadcn/ui component library integration
- Custom pool-themed color palette
- Responsive design with mobile-first approach
- Accessibility features with proper ARIA labels

## Data Flow

1. **User Interaction**: Visitors browse landing page sections
2. **Form Submission**: Lead information captured via contact form
3. **Validation**: Client-side validation with Zod schemas
4. **API Request**: Data sent to Express.js backend
5. **Database Storage**: Lead information stored in PostgreSQL
6. **Response Handling**: Success/error feedback via toast notifications

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Components**: Radix UI primitives via shadcn/ui
- **Styling**: Tailwind CSS with class variance authority
- **Icons**: Lucide React icon library

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Development server and build optimization
- **ESBuild**: Backend bundling for production
- **PostCSS**: CSS processing with Autoprefixer

### Database & Backend
- **Drizzle ORM**: Type-safe database operations
- **Neon Database**: Serverless PostgreSQL provider
- **Express.js**: Web server framework
- **Zod**: Schema validation library

## Deployment Strategy

### Development Environment
- Vite development server with HMR
- Express.js backend with auto-restart
- Integrated development experience with Replit

### Production Build
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: ESBuild bundles Express.js server to `dist/index.js`
3. **Database**: Drizzle migrations ensure schema consistency
4. **Environment**: Uses DATABASE_URL environment variable

### Database Management
- **Schema Migrations**: `npm run db:push` applies schema changes
- **Development**: In-memory storage fallback for testing
- **Production**: PostgreSQL with connection pooling

## Changelog
- July 2, 2025: Complete website update with authentic Vinil Vale content
- July 2, 2025: Updated Hero section with real pool photo background
- July 2, 2025: Gallery section now shows real work photos from Vinil Vale projects
- July 2, 2025: Testimonials updated with real customer reviews from Google
- July 2, 2025: Contact information corrected (phone: 13-997305949, email: vinilvale@hotmail.com, location: Registro SP)
- July 2, 2025: FAQ updated with correct service area (Vale do Ribeira + 200km radius)
- July 2, 2025: Removed all references to thermal and protective covers - focus exclusively on vinyl pool linings
- July 2, 2025: Corrected supplier name from "Sipatex" to "Cipatex"
- July 1, 2025: Updated brand colors to Vinil Vale palette (vinyl-blue, vinyl-teal, vinyl-navy, vinyl-orange)
- July 1, 2025: Added new Gallery section with work showcase and navigation integration
- July 1, 2025: Enhanced visual identity with professional color scheme
- June 28, 2025: Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.