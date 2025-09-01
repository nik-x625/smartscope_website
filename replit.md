# SmartScope Landing Page

## Overview

SmartScope is a SaaS platform that streamlines proposal creation through AI-powered automation and intelligent workflows. The application helps businesses create professional statements of work (SoW), accurate cost estimations, and winning proposals using a wizard-based approach with AI assistance. This landing page showcases the platform's features, benefits, and value proposition across multiple industries including consulting, IT services, project management, and creative agencies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI components
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API interactions
- **Theme System**: Custom theme provider with light/dark mode support using CSS custom properties

### Component Structure
- **Modular Design**: Component-based architecture with clear separation between UI components and page components
- **Responsive Layout**: Mobile-first responsive design with optimized layouts for all screen sizes
- **Section-Based Layout**: Landing page divided into distinct sections (hero, features, pricing, testimonials, etc.)
- **Reusable UI Components**: Extensive use of shadcn/ui components for buttons, forms, cards, and interactive elements

### Backend Architecture
- **Server Framework**: Express.js with TypeScript for the REST API
- **Database Layer**: Drizzle ORM with PostgreSQL for data persistence
- **Session Management**: Express sessions with PostgreSQL session store
- **API Design**: RESTful endpoints for contact forms, newsletter subscriptions, and chatbot interactions
- **Development Setup**: Hot reload with Vite development server integration

### Form Handling & User Interactions
- **Contact Forms**: Robust form validation using Zod schemas with server-side validation
- **Newsletter System**: Email subscription management with duplicate prevention
- **Interactive Chatbot**: Multi-step chat interface for user engagement and lead capture
- **Toast Notifications**: User feedback system for form submissions and interactions

### Database Schema
- **Users Table**: User authentication and account management
- **Contacts Table**: Contact form submissions with company information
- **Newsletters Table**: Email subscription management
- **Chat Messages Table**: Chatbot interaction storage with contact details

### Content Management
- **Blog System**: Static blog posts with routing and SEO-friendly URLs
- **Dynamic Content**: Testimonials, pricing plans, and feature highlights
- **Asset Management**: Optimized image handling with responsive loading

## External Dependencies

### Core Dependencies
- **Neon Database**: PostgreSQL hosting service for production database
- **Radix UI**: Headless UI components for accessibility and functionality
- **Lucide React**: Icon library for consistent iconography
- **React Hook Form**: Form state management and validation
- **Date-fns**: Date manipulation and formatting utilities

### Development & Build Tools
- **Vite**: Fast build tool and development server with HMR
- **PostCSS**: CSS processing with Tailwind CSS compilation
- **ESBuild**: Fast JavaScript bundler for production builds
- **TypeScript**: Type safety across the entire application stack

### Email Integration
- **Nodemailer**: Email service integration for contact forms and notifications
- **SMTP Configuration**: Configurable email service provider support (Gmail, custom SMTP)

### Third-Party Services
- **Google Fonts**: Typography with Inter font family
- **Unsplash**: Stock photography for landing page imagery
- **Replit**: Development environment integration with specialized tooling

### Database & ORM
- **Drizzle Kit**: Database migration and schema management
- **Connect-PG-Simple**: PostgreSQL session store for Express sessions
- **Drizzle-Zod**: Schema validation integration between database and API layers