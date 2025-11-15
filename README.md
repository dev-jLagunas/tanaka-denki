Tanaka Denki System Services Website

A modern, fully rebuilt website for a family-run solar maintenance company in Ishikawa, Japan.
The previous WordPress site was outdated, visually inconsistent, and difficult for customers to navigate.
This new version focuses on trust, clarity, mobile usability, and long-term maintainability.

Overview

This project is a full redesign and rebuild of the original Tanaka Denki Service website.
The goal was to modernize the interface, organize information more clearly, and improve the company’s professional image.
The site was designed and developed using the design thinking framework, with an emphasis on:

clarity and hierarchy

simplicity for non-technical users

long-term scalability

reliability and trustworthiness for customers

The final product replaces an old, unstructured WordPress layout with a clean, modern Nuxt 4 architecture and a fully dynamic blog system powered by Contentful.

Live Site

https://tanaka-denki.netlify.app/

(Temporary domain — will migrate to Sakura Internet later.)

Tech Stack

Nuxt 4 — full SSR-capable Vue framework

Vue 3 — component-based architecture

Tailwind CSS 4 — modern utility-first styling

Pinia — state management

Netlify — hosting + deployment

Supabase Auth — email/password authentication

Contentful — headless blog CMS

AOS (Animate on Scroll) — subtle UI polish

Key Features
🎨 Modern UI & UX

Fully responsive, mobile-first interface

Clean visual hierarchy

Professional, trustworthy aesthetic

Japanese-language design and content throughout

📰 Dynamic Blog System

Contentful CMS integration

Blog index + detail views

Automatic routing via slug/ID

Homepage preview showing the latest three posts

🔐 Admin Login System

Supabase email/password authentication

Protected /admin route

Redirect logic for logged-in and logged-out states

🛠 Future Mini-CMS (In Progress)

Foundation already built for modifying small on-site fields such as:

company timeline

phone/fax numbers

certifications

address

homepage content blocks

These will connect to a Supabase database later.

🌐 SEO & Performance

OG tags + basic meta setup

Fast deployment on Netlify

Scalable Nuxt architecture

✨ Additional Touches

AOS scroll animations

Modular, reusable components

Clean folder structure and organized architecture

Project Goals

This rebuild solves several issues from the old site:

cluttered and outdated design

inconsistent styling

lack of clear hierarchy

no UX foundations

low trust and reliability for new customers

poor mobile support

no simple way to add new blog content

By restructuring the information architecture and improving the presentation, the site now communicates professionalism and credibility, which should translate into increased customer inquiries via phone and email.

Installation & Development

# install dependencies

npm install

# run development server

npm run dev

# build for production

npm run build

(Project does not include environment variable instructions, as this repository is not intended for external configuration.)

Deployment

Deployed on Netlify via connected GitHub repository.
Production build handled automatically on push.

Screenshots

Add your screenshots here later.

/screenshots
├── homepage.png
├── services.png
├── blog-list.png
├── blog-detail.png
└── admin-panel.png

License

MIT License
(You can change this anytime if needed.)
