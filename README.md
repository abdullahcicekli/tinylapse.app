# 🚀 TinyLapse - Marketing Website

A modern, SEO-optimized marketing website for **TinyLapse** - a baby growth timelapse app for iPhone. Built with Vite, React, TypeScript, Tailwind CSS, and Lucide Icons.

![TinyLapse](https://img.shields.io/badge/Version-1.0.0-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-blue)
![Vite](https://img.shields.io/badge/Vite-5.0.0-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.0-cyan)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Development](#development)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [SEO & Performance](#seo--performance)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)

---

## 🌟 Overview

TinyLapse is a beautiful, responsive marketing website designed to showcase the TinyLapse baby growth timelapse app. The site features:

- 🎨 Modern dark theme with lime green accents
- 📱 Fully responsive design (mobile-first)
- ⚡ Lightning-fast performance with Vite
- 🔍 SEO optimized with meta tags and structured data
- ♿ Accessible (WCAG AA compliant)
- 🎯 Smooth animations and transitions
- 📧 Contact form integration
- 📄 FAQ accordion
- 🔐 Privacy Policy & Terms pages
- 🌍 Multi-language support (English, Turkish, Spanish, German)

---

## ✨ Features

### Pages
- **Home** - Hero, Features, How It Works, Use Cases, Testimonials, CTA
- **FAQ** - Frequently Asked Questions with accordion
- **Contact** - Contact form with validation
- **Privacy Policy** - Comprehensive privacy information
- **Terms & Conditions** - Legal terms
- **404** - Custom not found page

### Components
- **Header** - Fixed navigation with mobile menu and language selector
- **Footer** - Multi-column footer with links
- **Hero** - Eye-catching hero section with CTAs
- **Features** - 9 feature cards with icons
- **AppScreenshots** - Interactive screenshot carousel with drag & drop
- **HowItWorks** - 4-step timeline
- **UseCases** - 6 use case cards
- **Testimonials** - Customer reviews
- **CTA** - Call-to-action sections
- **FAQAccordion** - Expandable Q&A
- **ContactForm** - Form with validation
- **SEO** - Dynamic meta tags and structured data

---

## 🌍 Internationalization

The website supports multiple languages with a seamless language switching experience:

### Supported Languages
- 🇬🇧 **English** - Default language
- 🇹🇷 **Turkish** (Türkçe)
- 🇪🇸 **Spanish** (Español)
- 🇩🇪 **German** (Deutsch)

### Features
- Language selector in header navigation
- Persistent language preference (localStorage)
- Fully translated content across all pages
- Type-safe translations with TypeScript
- Easy to add new languages

### Adding a New Language

1. Create a new translation file in `src/locales/` (e.g., `fr.ts` for French)
2. Copy the structure from `en.ts` and translate all strings
3. Add the new locale to `src/locales/index.ts`
4. Update the language selector in `Header.tsx`

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| [React](https://react.dev/) | 18.2.0 | UI Framework |
| [TypeScript](https://www.typescriptlang.org/) | 5.2.2 | Type Safety |
| [Vite](https://vitejs.dev/) | 5.0.0 | Build Tool |
| [Tailwind CSS](https://tailwindcss.com/) | 3.3.0 | Styling |
| [React Router](https://reactrouter.com/) | 6.20.0 | Routing |
| [Lucide React](https://lucide.dev/) | 0.300.0 | Icons |

---

## 📁 Project Structure

```
tinylapse-vite/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Hero.tsx            # Hero section
│   │   ├── Features.tsx        # Features grid
│   │   ├── AppScreenshots.tsx  # Screenshot carousel
│   │   ├── HowItWorks.tsx      # Timeline steps
│   │   ├── UseCases.tsx        # Use case cards
│   │   ├── Testimonials.tsx    # Customer reviews
│   │   ├── CTA.tsx             # Call-to-action
│   │   ├── FAQAccordion.tsx    # FAQ component
│   │   ├── ContactForm.tsx     # Contact form
│   │   └── SEO.tsx             # SEO meta tags
│   ├── pages/
│   │   ├── Home.tsx            # Homepage
│   │   ├── FAQ.tsx             # FAQ page
│   │   ├── Contact.tsx         # Contact page
│   │   ├── Privacy.tsx         # Privacy policy
│   │   ├── Terms.tsx           # Terms & conditions
│   │   └── NotFound.tsx        # 404 page
│   ├── contexts/
│   │   └── LanguageContext.tsx # Language state management
│   ├── hooks/
│   │   └── useLanguage.ts      # Language hook
│   ├── locales/
│   │   ├── en.ts               # English translations
│   │   ├── tr.ts               # Turkish translations
│   │   ├── es.ts               # Spanish translations
│   │   ├── de.ts               # German translations
│   │   ├── types.ts            # Translation types
│   │   └── index.ts            # Locale exports
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   ├── router.tsx              # Route configuration
│   └── index.css               # Global styles
├── public/
│   ├── manifest.json           # PWA manifest
│   ├── robots.txt              # SEO robots file
│   ├── sitemap.xml             # SEO sitemap
│   └── IMAGES_README.md        # Image specifications
├── index.html                  # HTML template
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind config
├── postcss.config.js           # PostCSS config
├── vite.config.ts              # Vite config
└── README.md                   # This file
```

---

## 📦 Installation

### Prerequisites

- **Node.js** 16.0 or higher
- **npm** or **yarn** package manager

### Steps

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/tinylapse-vite.git
cd tinylapse-vite
```

2. **Install dependencies:**
```bash
npm install
```

or with yarn:
```bash
yarn install
```

3. **Verify installation:**
```bash
npm run dev
```

The site should now be running at `http://localhost:5173`

---

## 🚀 Development

### Start Development Server

```bash
npm run dev
```

This will start the Vite development server with hot module replacement (HMR).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

### Development Tips

- **Auto-reload**: Changes are automatically reflected in the browser
- **TypeScript**: Type checking runs in the background
- **Tailwind**: JIT compiler generates CSS on-demand
- **Linting**: Follow TypeScript strict mode for best practices

---

## 🏗️ Building for Production

### Build Command

```bash
npm run build
```

This will:
1. Run TypeScript compiler (`tsc`)
2. Build optimized production bundle
3. Output to `dist/` directory

### Build Output

```
dist/
├── assets/
│   ├── index-[hash].js    # Minified JavaScript
│   └── index-[hash].css   # Minified CSS
├── images/                # Optimized images
├── manifest.json
├── robots.txt
├── sitemap.xml
└── index.html
```

### Preview Production Build

```bash
npm run preview
```

View the production build at `http://localhost:4173`

---

## 🌐 Deployment

The built `dist/` folder can be deployed to any static hosting service:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
# Set base in vite.config.ts to '/repo-name/'
npm run build
# Deploy dist/ folder to gh-pages branch
```

### Cloudflare Pages
1. Connect your repository
2. Set build command: `npm run build`
3. Set output directory: `dist`

---

## 🔍 SEO & Performance

### SEO Features

✅ Dynamic meta tags for each page  
✅ Open Graph tags for social sharing  
✅ Twitter Card support  
✅ Structured data (JSON-LD schema)  
✅ Canonical URLs  
✅ Sitemap.xml  
✅ Robots.txt  
✅ Semantic HTML  

### Performance Optimizations

✅ Code splitting with React Router  
✅ Lazy loading images (coming soon)  
✅ Optimized bundle size  
✅ Vite's fast HMR  
✅ Tailwind CSS purging  
✅ Modern ES modules  

### Expected Lighthouse Scores

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

---

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  accent: '#C6F54D',        // Lime green
  'accent-dark': '#B0E040', // Darker lime
}
```

### Fonts

Edit `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['-apple-system', 'BlinkMacSystemFont', ...],
}
```

### Content

- **Hero text**: Edit `src/components/Hero.tsx`
- **Features**: Edit `src/components/Features.tsx`
- **FAQ**: Edit `src/components/FAQAccordion.tsx`
- **Testimonials**: Edit `src/components/Testimonials.tsx`

### Images

See `public/IMAGES_README.md` for required images and specifications.

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation works (desktop & mobile)
- [ ] Mobile menu opens/closes
- [ ] All links work correctly
- [ ] Forms validate properly
- [ ] Responsive on all screen sizes
- [ ] No console errors
- [ ] SEO meta tags present
- [ ] Social share preview works

---

## 📱 Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)
- ✅ iOS Safari 14+
- ✅ Chrome Android

---

## 🐛 Troubleshooting

### Port already in use
```bash
# Change port in vite.config.ts or kill process
kill -9 $(lsof -ti:5173)
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### TypeScript errors
```bash
# Update TypeScript
npm install typescript@latest --save-dev
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is proprietary software. All rights reserved © 2024 TinyLapse.

---

## 📞 Contact

- **Website**: [https://tinylapse.app](https://tinylapse.app)
- **Email**: support@tinylapse.app
- **Instagram**: [@tinylapse.app](https://instagram.com/tinylapse.app)

---

## 🙏 Acknowledgments

- Design inspiration from Apple product pages
- Icons by [Lucide](https://lucide.dev/)
- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

**Built with ❤️ for parents capturing precious memories.**

