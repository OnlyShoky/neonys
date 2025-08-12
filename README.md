# Neonys Angular Project

A modern Angular 17+ application converted from static HTML, featuring Hero Agents for digital automation.

## 🚀 Features

- **Angular 17+ with Standalone Components**: Modern Angular architecture
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Responsive Design**: Mobile-first responsive layout
- **Component Architecture**: Well-structured feature-based components
- **TypeScript**: Full type safety and modern JavaScript features
- **Internationalization Ready**: Translation service for multi-language support
- **Professional Folder Structure**: Organized by features, shared components, and core services

## 📁 Project Structure

```
src/
├── app/
│   ├── core/
│   │   └── services/           # Core application services
│   │       ├── translation.ts  # Translation service
│   │       └── scroll.ts       # Smooth scrolling service
│   ├── features/               # Feature modules
│   │   ├── navigation/         # Navigation component
│   │   ├── hero/              # Hero section
│   │   ├── about/             # About section
│   │   ├── agents/            # Hero agents showcase
│   │   ├── how-it-works/      # Process explanation
│   │   └── contact/           # Contact form and footer
│   ├── shared/                # Shared components
│   │   └── components/
│   │       ├── agent-card/    # Reusable agent card
│   │       └── language-selector/ # Language switcher
│   ├── app.ts                 # Main app component
│   └── app.html               # Main app template
├── styles.scss               # Global styles with Tailwind
└── index.html                # Main HTML file
```

## 🛠️ Technologies Used

- **Angular 17+**: Latest Angular with standalone components
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **SCSS**: Enhanced CSS with variables and mixins
- **Font Awesome**: Icon library
- **Google Fonts**: Space Grotesk typography

## 🎨 Design Features

- **Gradient Text Effects**: Purple to blue gradients
- **Hover Animations**: Interactive card hover effects
- **Floating Animations**: CSS keyframe animations
- **Professional Color Scheme**: Purple (#6b8cff, #a66bff) theme
- **Responsive Grid Layouts**: Mobile-first design approach

## 🏗️ Architecture Highlights

### Component Structure
- **Standalone Components**: No NgModules required
- **Feature-based Organization**: Each section is a separate feature
- **Shared Components**: Reusable UI components
- **Service Injection**: Modern Angular dependency injection

### Services
- **TranslationService**: Handles multi-language support
- **ScrollService**: Smooth scrolling navigation
- **Type Safety**: Full TypeScript interfaces

### Best Practices
- **Single Responsibility**: Each component has one purpose
- **Dependency Injection**: Services injected via inject() function
- **Input/Output**: Proper component communication
- **Form Handling**: Angular reactive forms
- **Error Handling**: Graceful error management

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Angular CLI

### Installation
```bash
npm install
```

### Development Server
```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`

### Build
```bash
npm run build
# or
ng build
```

### Production Build
```bash
ng build --configuration production
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is for demonstration purposes.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

Built with ❤️ using Angular 17+ and modern web technologies.
