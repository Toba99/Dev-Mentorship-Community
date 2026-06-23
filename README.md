# Dev Mentorship Community

A premium, production-ready website for Dev Mentorship Community - a structured mentorship organization focused on helping developers accelerate their growth and career.

## 🚀 Features

- **Modern Design**: Inspired by Stripe, Linear, Vercel, Notion, and Apple
- **Dark Mode**: Beautiful dark theme with glassmorphism effects
- **Responsive**: Mobile-first design that works on all devices
- **Animations**: Subtle Framer Motion animations for smooth interactions
- **Form Validation**: React Hook Form with Zod validation
- **Type Safety**: Full TypeScript implementation
- **SEO Optimized**: Complete metadata and Open Graph tags

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)
- **React Hook Form** + **Zod** (form validation)
- **Lucide React** (icons)

## 📁 Project Structure

```
DEV-MEN/
├── app/
│   ├── about/          # About page
│   ├── apply/          # Application form page
│   ├── contact/        # Contact page
│   ├── mentor/         # Mentor information page
│   ├── globals.css     # Global styles
│   ├── layout.tsx       # Root layout
│   ├── not-found.tsx   # 404 page
│   └── page.tsx        # Home page
├── components/
│   ├── AnimatedCounter.tsx
│   ├── CTASection.tsx
│   ├── FeatureCard.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── SectionWrapper.tsx
├── lib/
│   └── utils.ts        # Utility functions
└── package.json
```

## 🎨 Design System

### Colors
- **Background**: Deep charcoal (#0B0F19)
- **Accent**: Electric blue to violet gradient
- **Cards**: Glassmorphism with backdrop blur

### Typography
- **Font**: Inter (Google Fonts)
- **Hero**: 48-64px bold
- **Section Headers**: 32-40px
- **Body**: 16-18px

## 🚦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3001](http://localhost:3001)

## 📝 Pages

- **Home** (`/`) - Hero, features, how it works, roadmap, social proof
- **About** (`/about`) - Community information, mission, vision, values
- **Apply** (`/apply`) - Comprehensive application form with validation
- **Mentor** (`/mentor`) - Information for potential mentors
- **Contact** (`/contact`) - Contact form

## 🔧 Development

### Build for Production
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

## 📦 Key Dependencies

- `next`: ^14.2.0
- `react`: ^18.3.0
- `framer-motion`: ^11.0.0
- `react-hook-form`: ^7.50.0
- `zod`: ^3.22.0
- `tailwindcss`: ^3.4.0

## 🎯 Production Ready Features

- ✅ Server-side rendering
- ✅ Form validation
- ✅ Responsive design
- ✅ SEO metadata
- ✅ Accessibility (ARIA labels, semantic HTML)
- ✅ Error handling (404 page)
- ✅ Loading states
- ✅ Type safety

## 📄 License

Private project for Dev Mentorship Community.

## 🤝 Contributing

This is a private project. For questions or suggestions, please contact the development team.

## Netlify

https://dev-mentorship-community.netlify.app/
