# Portfolio Website

A modern, responsive portfolio website built with React, JavaScript, and TailwindCSS.

## Features

- 🎨 Modern and visually appealing design
- 📱 Fully responsive across all devices
- ⚡ Fast and optimized with Vite
- 🎭 Smooth animations and transitions
- 🎯 Easy to customize with resume data
- 🚀 Ready for GitHub Pages deployment

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Portfolio.git
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Update your resume data:
   - Edit `src/data/resumeData.js` with your information
   - Add your photo to the `public` folder as `photo.jpg`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Customization

### Update Resume Data

Edit `src/data/resumeData.js` to update:
- Personal information
- Work experience
- Projects
- Skills
- Education
- Certifications

### Add Your Photo

Place your photo in the `public` folder and name it `photo.jpg`, or update the path in `src/data/resumeData.js`.

### Customize Colors

Edit `tailwind.config.js` to change the color scheme.

## Deployment to GitHub Pages

1. Update the `base` in `vite.config.js` to match your repository name:
```javascript
base: '/your-repo-name/',
```

2. Build and deploy:
```bash
npm run build
npm run deploy
```

3. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Select `gh-pages` branch as the source
   - Your site will be live at `https://yourusername.github.io/your-repo-name/`

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Technologies Used

- **React** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Lucide React** - Icons
- **gh-pages** - GitHub Pages deployment

## License

MIT License - feel free to use this template for your own portfolio!

## Author

Krish Patil

---

Made with ❤️ using React and TailwindCSS
