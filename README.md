# Malhar Kansara - Personal Portfolio Website

A modern, responsive personal portfolio website built with HTML, CSS, and JavaScript. This project demonstrates advanced JavaScript concepts including tree data structures and hash maps for dynamic content rendering, showcasing technical skills and leadership experience.

## 🌟 Features

### Design & UI
- **Modern, Professional Design**: Clean, minimalist design with a consistent color palette and gradient accents
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle hover effects and transitions for enhanced user experience
- **Google Fonts**: Uses Poppins font for a polished, modern look
- **Interactive Navigation**: Smooth scrolling with active link highlighting
- **Hero Section**: Side-by-side layout with professional profile placeholder
- **Enhanced Visual Elements**: Gradient backgrounds, hover effects, and modern card designs
- **Experience Cards**: Each experience is displayed as a modern card with shadow, border-radius, and hover effect, using the XYZ accomplishment format

### Technical Implementation
- **Tree Data Structure**: Website sections are organized using a tree structure for efficient rendering
- **Hash Maps**: Projects and experience data stored in JavaScript objects for quick access
- **Dynamic Content**: All content is rendered dynamically using JavaScript
- **Modular Code**: Well-organized, maintainable code with clear separation of concerns

### Content Sections
1. **Home**: Hero section with name, tagline, resume view link, and social links
2. **Summary**: Bio highlighting cloud engineering aspirations, technical skills, and soft skills
3. **Projects**: Showcase of three main projects with descriptions and tech stacks
4. **Experience**: Professional experience and leadership roles (XYZ format, card design)
5. **Contact**: Contact information and social links

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Dynamic content rendering and interactivity
- **Google Fonts**: Poppins font family

## 📁 Project Structure

```
Portfolio Website/
├── index.html          # Main HTML file
├── style.css           # CSS styles with modern design
├── main.js            # JavaScript with data structures and rendering logic
├── favicon.ico        # Favicon placeholder
├── assets/
│   └── resume.pdf     # Resume PDF (viewable in new tab)
└── README.md          # Project documentation
```

## 🚀 Data Structures Used

### Tree Structure
The website uses a tree data structure to organize content:

```javascript
const websiteTree = {
  id: 'website',
  type: 'root',
  children: [
    {
      id: 'home',
      type: 'section',
      title: 'Home',
      children: [
        { id: 'hero', type: 'hero', content: 'hero' },
        { id: 'social-links', type: 'social', content: 'social' }
      ]
    },
    // ... other sections
  ]
};
```

### Hash Maps
Data is stored in JavaScript objects (hash maps) for efficient access:

- `personalInfo`: Personal information and contact details
- `projectsData`: Project information with descriptions and tech stacks
- `experienceData`: Professional experience and achievements (XYZ format)
- `technicalSkills`: Array of technical skills including Next.js and Cloud Fundamentals
- `softSkills`: Array of soft skills

## 🎯 Key Features

### For Recruiters
- **Professional Presentation**: Clean, modern design that showcases technical skills
- **Clear Skill Display**: Both technical and soft skills are prominently featured
- **Project Showcase**: Detailed project descriptions with technology stacks
- **Leadership Experience**: Highlights leadership roles and community impact
- **Cloud Engineering Focus**: Emphasizes career goals and technical aspirations
- **Easy Contact**: Multiple ways to get in touch

### Technical Highlights
- **Data Structure Implementation**: Demonstrates understanding of trees and hash maps
- **Dynamic Rendering**: Shows ability to work with complex JavaScript
- **Responsive Design**: Proves front-end development skills
- **Clean Code**: Well-commented, maintainable code structure

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: Full layout with side-by-side content and enhanced visual elements
- **Tablet**: Adjusted grid layouts and spacing
- **Mobile**: Single-column layout with optimized navigation and touch-friendly elements

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Connect your GitHub repository to Netlify
2. Deploy automatically on every push
3. Get a custom domain and SSL certificate

### Local Development
1. Clone the repository
2. Open `index.html` in your browser
3. Or use a local server: `python -m http.server 8000`

## 📝 Content Overview

### Personal Information
- **Name**: Malhar Kansara
- **Tagline**: "Computer Science Student | Passionate about building and learning."
- **Bio**: Highlights 3.96 GPA and cloud engineering aspirations
- **Email**: kansaramalhar22@gmail.com
- **Location**: San Francisco, CA

### Technical Skills
Java, JavaScript, HTML, CSS, Node.js, Express, TypeScript, Python, SQL, Data Structures and Algorithms, Web Development, Full Stack Development, Git & GitHub, SQLite, REST APIs, Next.js, Cloud Fundamentals

### Soft Skills
Leadership, Communication, Team Collaboration, Problem-Solving, Adaptability, Analytical Thinking, Time Management, Customer Service, Attention to Detail, Initiative

### Projects
1. **picKlean** – Community-focused website promoting cleanliness and hygiene
2. **Chatbot with Gemini API** – Intelligent chatbot using Google's Gemini API
3. **ShopEase** – Full-stack e-commerce platform with secure features

### Experience (XYZ Format)
- **Director of Facilities & Operations**, Associated Students Inc (Jun 2025 – May 2026): Improved campus facility operations (X) by increasing service quality ratings by 20% (Y) through process improvements and space planning (Z).
- **Outreach Officer**, ACM SFSU (May 2024 – Apr 2025): Increased student engagement (X) by 30% (Y) by developing partnerships and coordinating events with academic and industry stakeholders (Z).
- **Operations Specialist**, Mashouf Wellness Center (Jan 2025 – Present): Enhanced guest satisfaction (X) as measured by positive feedback and reduced complaints (Y) by maintaining safety, cleanliness, and providing excellent support (Z).

## 🎨 Design Features

### Visual Enhancements
- **Gradient Accents**: Subtle gradient overlays and backgrounds
- **Hover Effects**: Interactive elements with smooth transitions
- **Card Designs**: Modern card layouts with shadows and borders
- **Profile Placeholder**: Professional circular avatar with gradient background
- **Section Headers**: Clear typography with descriptive subtitles
- **Experience Cards**: Modern card design for experience section

### Color Palette
```css
:root {
  --primary-color: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary-color: #64748b;
  --accent-color: #f59e0b;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --bg-primary: #ffffff;
  --bg-secondary: #f8fafc;
  --bg-tertiary: #f1f5f9;
  --border-color: #e2e8f0;
}
```

## 📞 Contact

- **Name**: Malhar Kansara
- **Email**: kansaramalhar22@gmail.com
- **GitHub**: https://github.com/Mlhr2212
- **LinkedIn**: https://www.linkedin.com/in/malhar-kansara
- **Location**: San Francisco, CA

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ using HTML, CSS, and JavaScript**

*Showcasing technical skills, leadership experience, and cloud engineering aspirations* 
