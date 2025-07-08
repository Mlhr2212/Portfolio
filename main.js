// Portfolio Website - Dynamic Content Rendering with Tree and Hash Map Data Structures

// ============================================================================
// TREE DATA STRUCTURE - Represents the website hierarchy
// Root = Website, Children = Sections, Sub-children = Elements within sections
// ============================================================================
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
    {
      id: 'summary',
      type: 'section',
      title: 'Summary',
      children: [
        { id: 'bio', type: 'bio', content: 'bio' },
        { id: 'skills', type: 'skills', content: 'skills' }
      ]
    },
    {
      id: 'projects',
      type: 'section',
      title: 'Projects',
      children: [
        { id: 'projects-grid', type: 'projects-grid', content: 'projects' }
      ]
    },
    {
      id: 'experience',
      type: 'section',
      title: 'Experience',
      children: [
        { id: 'experience-list', type: 'experience-list', content: 'experience' }
      ]
    },
    {
      id: 'contact',
      type: 'section',
      title: 'Contact',
      children: [
        { id: 'contact-info', type: 'contact-info', content: 'contact-info' }
      ]
    }
  ]
};

// ============================================================================
// HASH MAPS - Store data for quick access and efficient rendering
// ============================================================================

// Hash map for personal information
const personalInfo = {
  name: 'Malhar Kansara',
  tagline: 'Computer Science Student | Passionate about building and learning.',
  bio: 'Highly motivated Computer Science student at San Francisco State University with a GPA of 3.96. Passionate about building impactful software tools and leading community-driven projects. I\'m actively developing my skills to become a Cloud Engineer, with a focus on scalable, secure, and innovative systems.',
  resume: 'MalharKansara_Resume_CS.pdf',
  github: 'https://github.com/Mlhr2212',
  linkedin: 'https://www.linkedin.com/in/malhar-kansara',
  email: 'kansaramalhar22@gmail.com'
};

// Hash map for technical skills
const technicalSkills = [
  'Java', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express', 
  'TypeScript', 'Python', 'SQL', 'Data Structures and Algorithms', 
  'Web Development', 'Full Stack Development', 'Git & GitHub', 
  'SQLite', 'Next.js', 'Cloud Fundamentals'
];

// Hash map for soft skills
const softSkills = [
  'Leadership', 'Communication', 'Team Collaboration', 'Problem-Solving', 
  'Adaptability', 'Analytical Thinking', 'Time Management', 'Customer Service', 
  'Attention to Detail', 'Initiative'
];

// Hash map for projects data
const projectsData = {
  'picklean': {
    id: 'picklean',
    title: 'picKlean',
    description: 'A community-focused website promoting cleanliness and hygiene.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Mlhr2212/picklean',
    live: '#',
    image: '📱'
  },
  'chatbot': {
    id: 'chatbot',
    title: 'Chatbot with Gemini API',
    description: 'Intelligent chatbot built using Gemini API.',
    techStack: ['Node.js', 'Express', 'JavaScript'],
    github: 'https://github.com/Mlhr2212/chat-bot-WIP',
    live: '#',
    image: '🤖'
  },
  'shopease': {
    id: 'shopease',
    title: 'ShopEase',
    description: 'Full-stack e-commerce platform with secure login, cart management, and payment.',
    techStack: ['Node.js', 'Express', 'SQLite'],
    github: 'https://github.com/daicikd/shopEase',
    live: '#',
    image: '🛒'
  }
};

// Hash map for experience data
const experienceData = {
  'director': {
    id: 'director',
    title: 'Director of Facilities & Operations',
    company: 'Associated Students Inc',
    date: 'Jun 2025 – May 2026',
    description: `Led and optimized campus facility operations, improving student space utilization and service quality.
Implemented new digital booking systems and managed maintenance projects, fostering a more accessible and welcoming environment.`,
    bullets: []
  },
  'outreach': {
    id: 'outreach',
    title: 'Outreach Officer',
    company: 'ACM SFSU',
    date: 'May 2024 – Apr 2025',
    description: `Organized workshops and industry speaker events to grow chapter engagement and technical skills.
Strengthened community partnerships and increased student membership through targeted outreach initiatives.`,
    bullets: []
  },
  'operations': {
    id: 'operations',
    title: 'Operations Specialist',
    company: 'Mashouf Wellness Center',
    date: 'Jan 2025 – Present',
    description: `Streamlined daily operations and enhanced guest experiences by improving check-in processes and coordinating facility services.
Contributed to a positive and inclusive recreational environment for students and staff.`,
    bullets: []
  },
  'gta': {
    id: 'gta',
    title: 'Graduate Teaching Associate',
    company: 'SF State',
    date: 'Aug 2024 – Dec 2024',
    description: `Supported undergraduate calculus courses through lecture assistance and personalized mentoring.
Facilitated labs and discussion sections, helping students strengthen foundational math skills and achieve academic success.`,
    bullets: []
  }
};

// ============================================================================
// TREE TRAVERSAL AND RENDERING FUNCTIONS
// ============================================================================

/**
 * Traverses the website tree and renders each section dynamically
 * This demonstrates the use of tree data structure for website organization
 */
function renderWebsite() {
  console.log('🌳 Rendering website using tree data structure...');
  
  // Traverse the tree and render each section
  websiteTree.children.forEach(section => {
    renderSection(section);
  });
  
  console.log('✅ Website rendered successfully using tree traversal');
}

/**
 * Renders a section by traversing its children and accessing hash map data
 * @param {Object} section - Section node from the tree
 */
function renderSection(section) {
  const sectionElement = document.getElementById(section.id);
  if (!sectionElement) return;
  
  console.log(`📄 Rendering section: ${section.title}`);
  
  // Create section header
  const header = createSectionHeader(section.title);
  sectionElement.appendChild(header);
  
  // Traverse section children and render content
  section.children.forEach(child => {
    renderSectionChild(child, sectionElement);
  });
}

/**
 * Renders individual elements within a section using hash map data
 * @param {Object} child - Child node from the tree
 * @param {HTMLElement} parentElement - Parent section element
 */
function renderSectionChild(child, parentElement) {
  console.log(`🔧 Rendering child: ${child.id} (${child.type})`);
  
  switch (child.type) {
    case 'hero':
      renderHero(parentElement);
      break;
    case 'social':
      renderSocialLinks(parentElement);
      break;
    case 'bio':
      renderBio(parentElement);
      break;
    case 'skills':
      renderSkills(parentElement);
      break;
    case 'projects-grid':
      renderProjectsGrid(parentElement);
      break;
    case 'experience-list':
      renderExperienceList(parentElement);
      break;
    case 'contact-info':
      renderContactInfo(parentElement);
      break;
  }
}

// ============================================================================
// SECTION RENDERING FUNCTIONS
// ============================================================================

function createSectionHeader(title) {
  if (title === 'Contact' || title === 'Home') return document.createElement('div');
  const header = document.createElement('div');
  header.className = 'section-header';
  const h2 = document.createElement('h2');
  h2.textContent = title;
  const p = document.createElement('p');
  switch (title) {
    case 'Summary':
      p.textContent = 'Learn more about my background, skills, and passion for technology and cloud engineering.';
      break;
    case 'Projects':
      p.textContent = 'Explore my latest projects and technical implementations.';
      break;
    case 'Experience':
      p.textContent = 'My professional journey and leadership experiences.';
      break;
  }
  header.appendChild(h2);
  header.appendChild(p);
  return header;
}

function renderHero(parentElement) {
  const hero = document.createElement('div');
  hero.className = 'hero';
  hero.innerHTML = `
    <div class="hero-content">
      <div class="hero-text">
        <h1>${personalInfo.name}</h1>
        <p class="tagline">${personalInfo.tagline}</p>
        <div class="hero-buttons">
          <a href="MalharKansara_Resume_CS.pdf" target="_blank" rel="noopener" class="btn btn-primary">
            📄 View Resume
          </a>
          <a href="#contact" class="btn btn-secondary">
            💬 Get In Touch
          </a>
        </div>
      </div>
      <div class="hero-image">
        <div class="profile-placeholder">
          <span>👨‍💻</span>
        </div>
      </div>
    </div>
  `;
  parentElement.appendChild(hero);
}

function renderSocialLinks(parentElement) {
  const socialLinks = document.createElement('div');
  socialLinks.className = 'social-links';
  
  socialLinks.innerHTML = `
    <a href="${personalInfo.github}" target="_blank" title="GitHub">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    </a>
    <a href="${personalInfo.linkedin}" target="_blank" title="LinkedIn">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    </a>
  `;
  
  parentElement.appendChild(socialLinks);
}

function renderBio(parentElement) {
  const bio = document.createElement('div');
  bio.className = 'bio';
  
  bio.innerHTML = `
    <h2>About Me</h2>
    <p>${personalInfo.bio}</p>
  `;
  
  parentElement.appendChild(bio);
}

function renderSkills(parentElement) {
  const skills = document.createElement('div');
  skills.className = 'skills';
  
  // Technical Skills
  const technicalSkillsDiv = document.createElement('div');
  technicalSkillsDiv.className = 'skills-category';
  technicalSkillsDiv.innerHTML = `
    <h3>💻 Technical Skills</h3>
    <div class="skills-grid">
      ${technicalSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
    </div>
  `;
  
  // Soft Skills
  const softSkillsDiv = document.createElement('div');
  softSkillsDiv.className = 'skills-category';
  softSkillsDiv.innerHTML = `
    <h3>🤝 Soft Skills</h3>
    <div class="skills-grid">
      ${softSkills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
    </div>
  `;
  
  skills.appendChild(technicalSkillsDiv);
  skills.appendChild(softSkillsDiv);
  parentElement.appendChild(skills);
}

function renderProjectsGrid(parentElement) {
  const projectsGrid = document.createElement('div');
  projectsGrid.className = 'projects-grid';
  
  // Iterate through projects hash map to render each project
  Object.values(projectsData).forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
      <div class="project-image">${project.image}</div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-tech">
          ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" class="btn btn-primary">GitHub</a>
          <a href="${project.live}" target="_blank" class="btn btn-secondary">Live Demo</a>
        </div>
      </div>
    `;
    
    projectsGrid.appendChild(projectCard);
  });
  
  // Add note about upcoming projects
  const upcomingNote = document.createElement('div');
  upcomingNote.className = 'upcoming-projects';
  upcomingNote.innerHTML = `
    <div class="upcoming-note">
      <p><strong>Note:</strong> More cloud projects and other interesting projects will be up soon!</p>
    </div>
  `;
  
  projectsGrid.appendChild(upcomingNote);
  parentElement.appendChild(projectsGrid);
}

function renderExperienceList(parentElement) {
  const experienceList = document.createElement('div');
  experienceList.className = 'experience-list';

  // Iterate through experience hash map to render each experience as a card
  Object.values(experienceData).forEach(experience => {
    const experienceItem = document.createElement('div');
    experienceItem.className = 'experience-card';
    experienceItem.innerHTML = `
      <div class="experience-header">
        <div>
          <div class="experience-title">${experience.title}</div>
          <div class="experience-company">${experience.company}</div>
        </div>
        <span class="experience-date">${experience.date}</span>
      </div>
      <p class="experience-description">${experience.description}</p>
    `;
    experienceList.appendChild(experienceItem);
  });

  parentElement.appendChild(experienceList);
}

function renderContactInfo(parentElement) {
  const contactInfo = document.createElement('div');
  contactInfo.className = 'contact-info';
  
  contactInfo.innerHTML = `
    <h2>Get In Touch</h2>
    <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
    <div class="contact-details">
      <div class="contact-item">
        <span>📧</span>
        <a href="mailto:${personalInfo.email}">${personalInfo.email}</a>
      </div>
      <div class="contact-item">
        <span>📍</span>
        <span>San Francisco, CA</span>
      </div>
      <div class="contact-item">
        <span>🎓</span>
        <span>San Francisco State University</span>
      </div>
      <div class="contact-item">
        <span>💼</span>
        <a href="${personalInfo.github}" target="_blank">GitHub Profile</a>
      </div>
      <div class="contact-item">
        <span>🔗</span>
        <a href="${personalInfo.linkedin}" target="_blank">LinkedIn Profile</a>
      </div>
    </div>
  `;
  
  parentElement.appendChild(contactInfo);
}

// ============================================================================
// NAVIGATION AND INTERACTIVITY
// ============================================================================

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      e.preventDefault();
      targetSection.scrollIntoView({ behavior: 'smooth' });
      
      // Update active link
      document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Active link highlighting based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================================================
// INITIALIZATION
// ============================================================================

// Initialize the website when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Initializing portfolio website...');
  console.log('🌳 Using tree data structure for website organization');
  console.log('🗂️ Using hash maps for efficient data access');
  
  renderWebsite();
  
  console.log('✨ Portfolio website ready!');
});

// ============================================================================
// DATA STRUCTURE DEMONSTRATION
// ============================================================================

// Function to demonstrate tree traversal
function demonstrateTreeTraversal() {
  console.log('🌳 Tree Structure Demonstration:');
  
  function traverseTree(node, level = 0) {
    const indent = '  '.repeat(level);
    console.log(`${indent}${node.type}: ${node.id}`);
    
    if (node.children) {
      node.children.forEach(child => traverseTree(child, level + 1));
    }
  }
  
  traverseTree(websiteTree);
}

// Function to demonstrate hash map access
function demonstrateHashMaps() {
  console.log('🗂️ Hash Map Access Demonstration:');
  console.log('Personal Info:', personalInfo);
  console.log('Projects Count:', Object.keys(projectsData).length);
  console.log('Experience Count:', Object.keys(experienceData).length);
  console.log('Technical Skills Count:', technicalSkills.length);
  console.log('Soft Skills Count:', softSkills.length);
}

// Uncomment to see data structure demonstrations in console
// demonstrateTreeTraversal();
// demonstrateHashMaps(); 