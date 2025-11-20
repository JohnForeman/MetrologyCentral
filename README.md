# Metrology Central

**Metrology Central** is a knowledge-sharing site focused on dimensional metrology, quality systems, measurement technologies, and best practices used across manufacturing. This site serves as a public blog and resource hub for engineers, inspectors, technicians, and professionals working with CMMs, GD&T, MBD/QIF workflows, and production quality systems.

The site is published using **GitHub Pages** and maintained directly from this repository.

---

## 🧭 Site Purpose

This project aims to:

- Share practical, experience-based insights from real manufacturing environments.
- Document lessons learned in dimensional metrology and inspection automation.
- Provide guidance for engineers and programmers implementing digital quality workflows.
- Showcase emerging technologies including AI-assisted inspection, model-based definition, and data-driven quality systems.

Content will include articles, diagrams, reference material, and links to related projects.

---

## 🌐 Live Site

Once deployed, the site will be available at:

**https://metrologycentral.com**  
*(custom domain pointing to GitHub Pages)*

---

## 🛠 Technology & Structure

- Hosted on **GitHub Pages**
- Built with **Jekyll** static site generator
- Uses **Minima** theme with custom styling
- Public repository
- Custom domain with HTTPS enabled

## 📦 Setup & Development

This site uses Jekyll for GitHub Pages. To set up locally:

### Prerequisites

- Ruby (2.7 or higher)
- Bundler gem

### Installation

1. Install Ruby dependencies:
```bash
bundle install
```

2. Build and serve the site locally:
```bash
bundle exec jekyll serve
```

3. Open your browser to `http://localhost:4000`

The site will automatically reload when you make changes to files.

### Project Structure

```
.
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page layouts (default, home, post)
├── _posts/              # Blog posts (YYYY-MM-DD-title.md)
├── assets/
│   └── css/
│       └── main.css     # Custom styles
├── about.md             # About page
├── blog.md              # Blog listing page
├── index.html           # Home page
└── Gemfile              # Ruby dependencies
```

## 🚀 Deployment

### GitHub Pages

The site is automatically deployed to GitHub Pages when you push to the `main` branch.

1. Push your changes to the `main` branch:
```bash
git add .
git commit -m "Your commit message"
git push origin main
```

2. GitHub Pages will automatically build and deploy your site.

3. Your site will be available at:
   - `https://YOUR_USERNAME.github.io/MetrologyCentral/` (default)
   - `https://metrologycentral.com` (if custom domain is configured)

### Enabling GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose the `main` branch and `/ (root)` folder
5. Click **Save**

### Custom Domain Setup

To use the custom domain `metrologycentral.com`:

1. Create a `CNAME` file in the root directory with your domain:
```
metrologycentral.com
```

2. Configure your DNS records:
   - Type: `CNAME`
   - Name: `@` (or leave blank)
   - Value: `YOUR_USERNAME.github.io`
   - Or use `A` records pointing to GitHub Pages IP addresses

3. In GitHub repository settings, go to **Pages** and add your custom domain

## ✍️ Writing Blog Posts

Create new posts in the `_posts/` directory using the naming convention:
- Format: `YYYY-MM-DD-title.md`
- Example: `2025-01-15-welcome-to-metrology-central.md`

Each post should start with front matter:
```yaml
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
categories: [category1, category2]
author: Author Name
---
```

## 🔧 Configuration

Edit `_config.yml` to customize:
- Site title and description
- Navigation links
- Theme settings
- Plugins

## 📝 License

This project is open source and available for use as a knowledge-sharing resource.

