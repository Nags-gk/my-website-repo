# My Website Portfolio

## Project Overview

**My Website Portfolio** is a personal portfolio website project built with HTML, CSS, and JavaScript. It showcases a professional online presence with a clean, responsive design and includes a dashboard for extended functionality. The project is deployed on GitHub Pages and demonstrates modern web development practices including responsive design, accessibility standards, and Material-UI integration.

## Project Concept

This is a full-stack portfolio project designed to:
- Display professional information and skills
- Showcase projects and accomplishments
- Provide a dashboard for user interactions
- Demonstrate responsive web design across all devices
- Integrate Material-UI components for enhanced UI/UX

## Tech Stack

### Frontend Technologies
- **HTML5**: Semantic markup for structured content
- **CSS3**: Advanced styling with CSS Grid, Flexbox, and CSS variables
- **JavaScript**: Client-side interactivity
- **Material-UI (MUI)**: React-based UI component library
- **React**: For dynamic components (mui.js uses React)
- **Emotion**: CSS-in-JS library for styled components

### Dependencies
```json
{
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "@mui/material": "^7.3.2"
}
```

### Deployment
- **GitHub Pages**: Live hosting for the portfolio

## Project Structure

```
my-website-repo/
├── index.html                 # Main portfolio page
├── dashboard.html             # Dashboard page with grid layout
├── style.css                  # Main stylesheet (241 lines, 5.92 KB)
├── dashboard.css              # Dashboard-specific styles
├── mui.js                     # React component for login form using MUI
├── mypicture.jpg              # Profile picture
├── package.json               # Project metadata and dependencies
├── package-lock.json          # Dependency lock file
├── .vscode/                   # VS Code configuration
└── node_modules/              # Installed packages
```

## Key Features

### 1. **Responsive Portfolio Page (index.html)**
- Professional header with navigation bar
- About section with profile picture and bio
- Skills listing (React, TypeScript, Node.js, CSS, Git, testing, CI/CD)
- Professional summary and interests
- Contact section with email link
- Fixed footer with copyright information
- Sticky header for easy navigation

### 2. **Advanced Styling (style.css)**
- CSS Custom Variables for maintainable theming
- CSS Grid layout system for page structure
- Flexbox for component alignment
- Professional color scheme:
  - Accent: #4da8ff (Light blue)
  - Text: #1f2937 (Dark gray)
  - Card Background: #ffffff (White)
  - Footer: #6b6b6b (Medium gray)
- 2 Responsive breakpoints:
  - **Tablet (max-width: 1000px)**: Adjusts to single content column
  - **Mobile (max-width: 640px)**: Full single-column layout with stacked navigation
- Professional typography with 'Segoe UI' font family
- Smooth animations and transitions (0.18s ease)

### 3. **Dashboard Page (dashboard.html)**
- Two-column grid layout (sidebar + main content)
- Responsive hamburger-style layout on mobile
- Dark sidebar (#35424a) with navigation links
- Main content area with welcome message
- Fixed footer across the page
- Mobile-first responsive design

### 4. **Material-UI Integration (mui.js)**
- React-based login form component
- Features:
  - Username and password input fields
  - Form validation (button disabled until both fields filled)
  - Material-UI TextField and Button components
  - Emotion styling with sx prop for responsive layouts
  - Professional form styling with shadows and spacing

## Installation & Setup

### Prerequisites
- Node.js and npm installed
- Git for version control
- Modern web browser

### Step 1: Clone the Repository
```bash
git clone https://github.com/Nags-gk/my-website-repo.git
cd my-website-repo
```

### Step 2: Install Dependencies
```bash
npm install
```

This installs:
- `@mui/material`: Material-UI component library
- `@emotion/react`: Emotion core for CSS-in-JS
- `@emotion/styled`: Emotion styled component library

### Step 3: Create React App (for mui.js)
```bash
npx create-react-app my-website-repo
```

### Step 4: Run the Project Locally

**For static HTML/CSS/JS:**
- Open `index.html` or `dashboard.html` directly in your browser
- OR use a local server:
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**For React components (mui.js):**
```bash
npm start
```

## File Descriptions

### index.html (79 lines, 2.59 KB)
The main portfolio page featuring:
- DOCTYPE and semantic HTML structure
- Link to style.css for styling
- Header with brand name "MyPortfolio"
- Navigation menu with links to About, Projects, Contact, and Dashboard
- About section with profile image and professional summary
- Projects section placeholder
- Contact section with email link
- Footer with copyright info

**Key Sections:**
- `<header class="site-header">`: Sticky navigation bar
- `<main class="container site-grid">`: Main content using CSS Grid
- `.about-card`: Professional card component for About section
- `<footer>`: Fixed footer at bottom

### dashboard.html (74 lines, 2.22 KB)
A separate dashboard page with:
- Embedded CSS for dashboard-specific styling
- CSS Grid layout defining areas: sidebar, main, footer
- Left sidebar (#35424a background) with navigation
- Main content area for widgets or information
- Dark footer (#222 background)
- Mobile responsive (single column on screens < 700px)

### style.css (241 lines, 5.92 KB)
Comprehensive stylesheet featuring:
- **CSS Variables** (`:root`): Theme colors and spacing
- **Reset & Base Styles**: Universal box-sizing, font settings
- **Header Styling**: Light blue background (#A8D0E6), sticky positioning
- **Navigation**: Flexbox-based navbar with hover effects
- **Page Grid**: Three-column layout (sidebar, content-left, content-right)
- **Cards**: Professional white cards with shadows
- **Profile Section**: Circular profile picture with border
- **Footer**: Fixed bottom position with dark background
- **Responsive Breakpoints**:
  - Two-column layout at 1000px
  - Single-column layout at 640px
- **Accessibility**: Proper font smoothing, semantic color contrast

### dashboard.css (4 months old)
Dashboard-specific styles for grid layout and components.

### mui.js (54 lines, 1.22 KB)
React component using Material-UI:
- Imports: React hooks (useState), MUI components (TextField, Button, Box)
- LoginForm component with:
  - Username state management
  - Password state management
  - Form validation (isDisabled flag)
  - MUI Box component with sx prop styling
  - Two TextField inputs (outlined variant, fullWidth)
  - Login Button with disabled state
- Installation instructions in comments

### mypicture.jpg
Profile photograph displayed in the About section.

### package.json (7 lines, 127 bytes)
Project metadata with dependencies:
- Lists three Material-UI packages
- Specifies exact versions for consistency

## Usage Guide

### Viewing the Portfolio
1. **Live Website**: Visit the GitHub Pages deployment (if configured)
2. **Local Development**: 
   - Open `index.html` directly in browser
   - Or use a local server for dynamic features

### Navigating Pages
- **Portfolio**: `index.html` - Main page with About, Projects, Contact
- **Dashboard**: `dashboard.html` - Separate dashboard interface
- **Navigation**: Use the navbar links to jump between sections
- **Back to Profile**: Dashboard sidebar has link back to index.html

### Customization

**Edit Profile Information:**
- Open `index.html`
- Update text in `.about-card` sections
- Add your own profile picture (replace mypicture.jpg)
- Update email link in contact section

**Modify Colors:**
- Edit CSS variables in `style.css` (`:root` section)
- Change accent color (#4da8ff), backgrounds, text colors

**Add Skills:**
- Edit the `.skills` list in index.html
- Add new list items with your technologies

**Update Projects:**
- Replace placeholder text in `#projects` section
- Add project cards with descriptions

## Responsive Design Details

### Desktop (1000px+)
- Three-column grid layout
- Full navigation menu
- Side-by-side content columns

### Tablet (641px - 1000px)
- Two-column layout (sidebar + single content)
- Navigation remains visible
- Adjusted spacing and margins

### Mobile (< 640px)
- Single-column layout
- Navigation items wrap
- Header adjusts to vertical alignment
- Full-width cards and content
- Simplified footer layout
- Touch-friendly spacing

## Performance Optimization

- **CSS Variables**: Reduced file size, easier maintenance
- **Mobile-First Design**: Progressive enhancement for larger screens
- **Semantic HTML**: Better accessibility and SEO
- **Minimal Dependencies**: Only Material-UI essentials included
- **Fixed Layouts**: Prevents layout shifts and repaints

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)
- Supports ES6+ JavaScript

## Deployment

### GitHub Pages
1. Ensure repo has GitHub Pages enabled
2. Static files (HTML, CSS, JS) are automatically served
3. Visit: `https://username.github.io/my-website-repo/`

### Custom Domain
1. Add CNAME file to repo root
2. Configure custom domain in GitHub settings
3. Update DNS records with GitHub's IP addresses

## Development Workflow

1. **Create Branch**: `git checkout -b feature/your-feature`
2. **Make Changes**: Edit HTML/CSS/JS files
3. **Test Locally**: Open in browser or use local server
4. **Commit**: `git commit -am 'Description of changes'`
5. **Push**: `git push origin feature/your-feature`
6. **Create Pull Request**: On GitHub
7. **Merge**: After review, merge to main branch

## Future Enhancements

- [ ] Add blog section
- [ ] Implement contact form with backend
- [ ] Add project filtering and search
- [ ] Integrate social media links
- [ ] Add dark mode toggle
- [ ] Create admin dashboard
- [ ] Implement analytics tracking
- [ ] Add animation library (AOS, Framer Motion)
- [ ] Build project detail pages
- [ ] Create testimonials section

## Troubleshooting

### MUI Components Not Displaying
- Ensure `node_modules` is installed: `npm install`
- Check that React and Emotion are properly imported
- Verify webpack/build process is running

### Responsive Design Issues
- Check browser zoom level is at 100%
- Clear browser cache (Ctrl+Shift+Delete)
- Test in incognito/private mode
- Use browser DevTools responsive design mode

### CSS Not Applying
- Verify CSS file path in HTML: `href="style.css"`
- Check for CSS typos or syntax errors
- Ensure CSS is in correct location
- Hard refresh browser (Cmd+Shift+R)

### Images Not Loading
- Confirm image file exists: `mypicture.jpg`
- Check image path in HTML: `src="mypicture.jpg"`
- Verify image format is supported (JPG, PNG, WebP)
- Check file permissions

## Code Standards

- **HTML**: Semantic elements, proper nesting, accessibility attributes
- **CSS**: BEM naming convention for classes, organized sections, mobile-first
- **JavaScript**: ES6+ syntax, proper error handling, clean code
- **Commits**: Descriptive messages, one feature per commit

## Contributing

1. Fork the repository
2. Create feature branch
3. Make improvements
4. Test thoroughly
5. Submit pull request with description
6. Address any review feedback

## License

This project is open source and available under the MIT License. See LICENSE file for details.

## Contact

- **Email**: nagarajgk50@email.com
- **Portfolio**: https://github.com/Nags-gk/my-website-repo
- **GitHub**: https://github.com/Nags-gk

## About the Developer

**Nagaraj GK** is a Masters student in Software Engineering at San Jose State University with 2+ years of experience building full-stack web applications. Passionate about creating maintainable, accessible interfaces and reliable backend services.

### Skills
- Frontend: React, TypeScript, JavaScript, CSS (Flexbox, Grid), responsive design
- Backend: Node.js, Express, REST APIs
- DevOps: Git, CI/CD pipelines, cloud deployment
- Testing: Unit testing, automated testing
- Tools: VS Code, Docker, GitHub

## Changelog

### Version 1.0.0 (Current)
- Initial portfolio setup
- Responsive design implementation
- Dashboard page with grid layout
- Material-UI login component
- GitHub Pages deployment
- Multiple responsive breakpoints

### Previous Updates
- 4 months ago: Dashboard page changes
- 3 months ago: Index changes and responsive breakpoints
- 3 months ago: New updates to dependencies

## Support

For issues, questions, or suggestions:
1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include screenshots or error messages
4. Specify your browser and OS
5. Provide steps to reproduce the problem

---

**Last Updated**: October 2025  
**Maintained By**: Nagaraj GK  
**Repository**: https://github.com/Nags-gk/my-website-repo
