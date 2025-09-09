# Pixels Past Website

A modular, lore-driven website built with HTML, CSS, TypeScript, PHP, and SQL. Designed to evoke retro aesthetics and immersive branding, it includes a custom admin dashboard powered by our Business Management tool, dynamic theme switching, and SumUp API integration.

---

## Project Overview

- **Frontend**: HTML, CSS, TypeScript  
- **Backend**: PHP, SQL  
- **Admin Dashboard**: Custom Business Management tool  
- **Themes**: Easily switchable via UI or config  
- **API Integration**: SumUp  
- **Contributor**: Harry (C#, HTML, CSS)

---

## Folder Structure

PixelsPast/
├── .vscode/             # VS Code workspace config (extensions, formatting, theme)
├── README.md            # Project overview and setup guide
├── LICENSE              # License info
├── tsconfig.json        # TypeScript compiler config
├── prettier.config.js   # Prettier formatting rules
├── eslint.config.js     # ESLint rules for TS/JS
│
├── public/              # Web-accessible root (served by web server)
│   ├── index.html       # Entry point
│   ├── js/              # Compiled TypeScript output
│   ├── css/             # Compiled theme styles
│   ├── assets/          # Fonts, images, icons
│   └── themes/          # Active theme assets (CSS, config, optional JS)
│
├── src/                 # Source code (not directly exposed to browser)
│   ├── ts/              # TypeScript modules (theme loader, UI logic)
│   ├── core/            # Shared logic, utilities, config
│   ├── php/             # PHP modules (auth, dashboard, API handlers)
│   ├── sql/             # SQL schema and seed data
│   └── lib/             # Reusable libraries or third-party integrations
│
├── api/                 # Public-facing API endpoints (e.g. SumUp)
│   └── sumup.php
│
├── admin/               # Admin dashboard (Business Manager tool)
│   ├── index.php
│   ├── modules/         # Inventory, analytics, orders
│   └── assets/          # Admin-specific styles/scripts
│
├── doc/                 # Contributor guides, architecture diagrams, onboarding
│   ├── coding-practices.md
│   ├── theme-system.md
│   └── business-manager-layout.png
│
├── res/                 # Raw creative assets (SVGs, mockups, palettes)
│
├── bin/                 # Build output or CLI tools (optional)
│
└── notion/              # (Optional) Synced Notion exports or Kanban snapshots

---

## Development Setup

### 1. Clone & Open in VS Code

```bash
git clone https://github.com/GrantWesson/PixelsPast.git
```

### 2. Recommended Extensions

- Correia.github-plus-theme (GitHub+Gruvbox Theme)
- PKief.material-icon-theme (Material Icons Theme)
- esbenp.prettier-vscode
- dbaeumer.vscode-eslint
- bmewburn.vscode-intelephense-client

### 3. Local Environment

- Node.js
- PHP
- MySQL

### 4. Format & Lint on Save

Prettier and ESLint are preconfigured in .vscode/settings.json, formatting rules are defined in prettier.config.js.

---

## Theme Switching

Themes are stored in /public/themes/ and loaded dynamically based on:

[User Visit]
     ↓
[Check URL Parameter: ?theme=xyz]
     ↓
[If valid theme → Load theme from /themes/xyz]
     ↓
[Else → Check user preference in localStorage]
     ↓
[If found → Load preferred theme]
     ↓
[Else → Load default theme (e.g. 'retro')]
     ↓
[Apply theme CSS + assets dynamically]

Each theme includes:

- theme.css
- Optional theme.js
- config.json with metadata

---

## Admin Dashboard

Accessible via /admin includes:

- Business Management modules
- Analytics
- Inventory
- Orders

---

## API Integration

- SumUp API
- Auth via secure keys
- Endpoints documented in /api/sumup.php

---

## Domain & Hosting

- Domain transferred from IONOS → Cloudflare
- SSL enabled via Cloudflare
- "www." subdomain active

---

## Contributor Notes

Harry

- Strengths: HTML, CSS, WORDPRESS
- Learning: JS, TS, PHP, SQL
- PRs will be reviewed thoroughly with inline feedback
- Encouraged to ask questions and document logic

---

## Project Management

- Kanban board in Notion
- Columns: Backlog, In Progress, Review, Complete
- Access granted to Harry

---

## Coding Practices Guide

### Core Principles

- Semantic clarity
- Modularity
- Accessibility
- Lore-driven design
- Empathy in collaboration

### HTML

- Use semantic tags
- Nest logically
- Use aria-* for accessibility
- Unique IDs, class-based styling
- Labelled forms with fieldsets

### CSS

- Modular classes (BEM or utility-first)
- Flat selectors
- Variables for colours, spacing, fonts
- Group styles by component/theme
- Use rem/em for scalable sizing

### TypeScript

- Use interface or type
- Prefer const/let
- Avoid any, use explicit types
- Modularise logic
- Safe DOM selectors and listeners

### PHP

- Separate logic from presentation
- Sanitize input
- Use prepared statements
- Organise into modules
- Comment complex logic

### SQL

- Lowercase keywords
- Descriptive table/column names
- Use foreign keys and indexes
- Keep schema in /src/sql/
- Document relationships

---

## Formatter & Linter

- Prettier: Custom config
- ESLint: TypeScript rules
- Configured in .vscode/settings.json

---

## Learning Resources

- PHP Basics → PHP Manual
- SQL Queries → SQLBolt
- TypeScript → TypeScript Handbook
- CSS Layouts → CSS Tricks Flexbox Guide
- Accessibility → WebAIM

---

## License

- Mozilla Public License Version 2.0

---
