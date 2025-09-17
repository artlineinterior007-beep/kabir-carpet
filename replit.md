# Overview

Kabir Carpet International is a single-page static website built with React and Vite, showcasing a family-owned carpet business from Mirzapur, India. The project creates an elegant, animated, and highly visual experience for displaying handcrafted carpets without any backend functionality. The website features a complete product catalog loaded from static JSON files, smooth animations powered by Framer Motion, and comprehensive sections covering the company's 40-year heritage. The site is designed for static deployment on Vercel with no server-side functionality, focusing purely on presentation and user engagement through beautiful design and interactive elements.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React + Vite stack with TypeScript for a single-page application (SPA). The component architecture follows a modular approach with reusable UI components built on top of Radix UI primitives and styled with Tailwind CSS. The main App component orchestrates the layout through dedicated section components (Header, Hero, About, Process, Catalog, History, UVP, Contact, Footer) with smooth scroll navigation between sections.

## Styling and Design System
The project implements a sophisticated design system using Tailwind CSS with custom color variables for the Kabir Carpet brand palette (warm beige backgrounds, deep burgundy accents, gold highlights). Typography combines elegant fonts (Playfair Display for headings, Great Vibes for calligraphic accents, Inter for body text) loaded from Google Fonts. The styling system integrates shadcn/ui components for consistent, accessible UI elements with custom theming support.

## Animation and Interactions
Framer Motion handles all animations including hero section Ken Burns effects, staggered component reveals, smooth section transitions, and interactive product modals. The animation system provides smooth scroll behavior for navigation, lazy loading for performance, and responsive hover states throughout the interface.

## Data Management
The application uses a static data approach with product information stored in `/public/data/products.json` and product images in `/public/catalog/`. React Query (TanStack Query) manages client-side data fetching and caching for the product catalog. The product modal system displays detailed product information with image galleries and pre-filled contact integration via mailto links.

## Routing and Navigation
Instead of traditional routing, the application implements smooth scroll navigation between page sections using anchor-based navigation. The sticky header provides navigation links that smoothly scroll to corresponding sections with offset calculations for proper positioning.

## Static Asset Strategy
All content is served statically with product images, data files, and other assets cached by Vercel's CDN. The build process optimizes assets for production deployment with proper cache headers configured in vercel.json for optimal performance.

# External Dependencies

## Core Framework and Build Tools
- **React 18** with TypeScript for the UI framework
- **Vite** for fast development and optimized production builds
- **Tailwind CSS** for utility-first styling and responsive design

## UI Components and Styling
- **Radix UI** primitives for accessible, unstyled components
- **shadcn/ui** component library built on Radix UI
- **Framer Motion** for smooth animations and transitions
- **class-variance-authority** for component variant management
- **clsx** and **tailwind-merge** for conditional styling

## Data Fetching and State Management
- **TanStack React Query** for client-side data fetching and caching
- **React Hook Form** with **Zod** resolvers for form validation (if needed)

## Development and Deployment
- **Vercel** for static hosting and deployment
- **PostCSS** with **Autoprefixer** for CSS processing
- **TypeScript** for type safety and development experience

## Database Preparation (Unused in Current Implementation)
- **Drizzle ORM** with PostgreSQL support configured but not actively used
- **Neon Database** connector available for future dynamic functionality
- Database schema defined but the current static implementation doesn't require it

The application is designed to be easily extensible from a static site to a dynamic one by activating the prepared database layer and converting static JSON data to database-driven content management.