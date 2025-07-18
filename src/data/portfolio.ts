// Personal Information
export const personalInfo = {
  firstName: "Philippe",
  firstNameAbv: "Phil",
  lastName: "Nikolov",
  title: "Software Engineer",
  email: "philippe.nikolov@outlook.com",
  location: "Montreal, QC",
  bio: "I build exceptional digital experiences with modern technologies. Focused on creating intuitive, accessible, and performant web applications.",
  avatarInitials: "PN",
  avatarImage: "/images/profile-picture.jpg",
  resumeUrl: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/philniko",
    linkedin: "https://www.linkedin.com/in/philippenikolov/",
  }
};

// Navigation Links
export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];

// Experience Data
export const experiences = [
  {
    id: "exp1",
    title: "Software Engineer",
    company: "Datex",
    period: "May 2024 - May 2025",
    location: "Montreal, Canada",
    description: "Developed a scalable Warehouse Management System (WMS) application-building platform using cutting-edge technologies.",
    fullDescription: `Played a pivotal role in developing a comprehensive Warehouse Management System (WMS) application-building platform, demonstrating full-stack expertise and advanced problem-solving skills.
    
    Key Responsibilities and Achievements:
    • Spearheaded the development of a custom infinite and virtual scrolling grid, optimizing performance for handling large datasets efficiently
    • Engineered a complex SQL migration script with advanced paging techniques, successfully transferring 10,000+ rows while minimizing system downtime
    • Utilized .NET technologies to enhance application performance and scalability
    • Collaborated closely with cross-functional teams including Product Design, UX, and QA to deliver high-quality software releases
    • Implemented innovative solutions to improve user experience and system functionality
    • Gained deep expertise in enterprise-level software development methodologies`,
    skills: [".NET", "C#", "SQL", "Angular", "TypeScript", "Handlebars", "Agile", "Full-Stack Development", "DevOps"]
  },
  {
    id: "exp2",
    title: "Software Engineering Intern",
    company: "Datex",
    period: "Sep 2023 - Dec 2023",
    location: "Montreal, Canada",
    description: "Contributed to the development of a sophisticated Warehouse Management System application-building platform.",
    fullDescription: `Delivered impactful contributions to the development of a cutting-edge Warehouse Management System (WMS) application-building platform, showcasing strong front-end development skills and innovative problem-solving.
    
    Key Responsibilities and Achievements:
    • Developed a custom icon picker component to enhance software usability and user interface
    • Worked extensively with Angular to create intuitive and responsive web applications
    • Operated effectively in an Agile development environment, participating in feature design, implementation, and testing
    • Demonstrated strong collaboration skills within a dynamic product development team
    • Gained comprehensive exposure to enterprise software development practices and methodologies
    • Contributed to improving the overall user experience of the WMS platform`,
    skills: ["Angular", "TypeScript", "Handlebars", "Front-End Development", "UI/UX", "Agile Methodologies", "Web Development", "DevOps"]
  }
];

// Projects Data
export const projects = [
  {
    id: "proj1",
    title: "PickUp",
    description: "A map-based social media application for organizing and joining sports meetups in your area, similar to Snapmap but focused on sports events.",
    fullDescription: `PickUp is a cross-platform mobile application that connects sports enthusiasts through location-based event discovery. Users can create, join, and manage sports meetups in their area through an intuitive map interface, making it easy to find pickup games and organize sporting events.

    Key Features:
    • Interactive map interface showing nearby sports events
    • Real-time location sharing for active events
    • Event creation with sport type, skill level, and participant limits
    • User profiles with sports preferences and skill ratings
    • In-app messaging for event coordination
    • Push notifications for nearby events and updates
    • Authentication and user management with Supabase
    • Cross-platform compatibility for iOS and Android
    • Geolocation services with customizable search radius
    • Event filtering by sport type, time, and skill level`,
    image: "/images/projects/pickup.png",
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "React Native Maps", "Push Notifications API"],
    // demoLink: "https://example.com/sportmeet",
    githubLink: "https://github.com/philniko/pickup",
    currentlyWorkingOn: true
  },
  {
    id: "proj2",
    title: "Smart Education Events System",
    description: "An event organization platform with event management and attendance, along with payment processing.",
    fullDescription: `This e-commerce platform provides a complete solution for online stores. It features a responsive design, product catalog with filtering and search, shopping cart functionality, secure checkout with multiple payment options, user authentication, and an admin dashboard for managing products and orders.

    Key Features:
    • User authentication and profile management
    • Product catalog with categories, filtering, and search
    • Checkout process with shipping options
    • Payment processing using Stripe
    • Admin dashboard for product and order management
• Shopping cart with persistent storage
    • Order tracking and history for customers
    • Responsive design that works across all devices`,
    image: "/images/projects/sees-project.jpg",
    technologies: ["NextJS", "React", "Django", "SQL", "Stripe API"],
    demoLink: "https://youtu.be/0VI2L93K3ro",
    githubLink: "https://github.com/wokidoo/SOEN-343-SEES",
    currentlyWorkingOn: false
  },
  {
    id: "proj3",
    title: "Mauve Films Website",
    description: "A sleek, modern website built for Mauve Films to showcase their creative portfolio and studio services.",
    fullDescription: `The Mauve Films website is a modern, responsive web platform built to reflect the studio's creative vision and film expertise. Designed with a minimalist aesthetic and smooth transitions, the site highlights the team’s work and services through immersive visuals and intuitive navigation.

  Key Features:
  • Responsive design for all screen sizes
  • Smooth page transitions and animations
  • Project showcase with embedded video reels
  • Custom sections for services, team, and contact
  • Built using modern frontend tooling (Vite, React, Tailwind)
  • SEO-optimized with clean markup and metadata
  • Deployed and performance-optimized for fast load times`,
    image: "/images/projects/mauve-films.png",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    // githubLink: "https://github.com/philniko/mauvefilms", // Replace with real repo if public
    demoLink: "https://mauve-films.com",
    currentlyWorkingOn: false
  },
  {
    id: "proj4",
    title: "Retro Pomodoro",
    description: "A minimalist, black and white Pomodoro timer application with a retro aesthetic. RetroPomodoro helps you maintain focus and productivity using the Pomodoro Technique with a stylish, distraction-free interface.",
    fullDescription: `A minimalist, black and white Pomodoro timer application with a retro aesthetic. RetroPomodoro helps you maintain focus and productivity using the Pomodoro Technique with a stylish, distraction-free interface.

    Key Features:
    • Minimalist black/white interface with CRT screen
    • Cross-Platform (macOS, windows, linux)
    • Analog + Digital display
    • Start and end time display
    • Work and break modes with customizable durations
    • Desktop notifications`,
    image: "/images/projects/retropomodoro-project.jpg",
    technologies: ["JavaScript", "HTML", "CSS", "Electron", "Canvas API"],
    // demoLink: "https://example.com/task-app",
    githubLink: "https://github.com/philniko/retropomodoro",
    currentlyWorkingOn: false
  },
  {
    id: "proj5",
    title: "Portfolio Website",
    description: "A responsive portfolio website built with modern technologies showcasing projects and skills.",
    fullDescription: `A modern, responsive portfolio website designed to showcase my projects, skills, and professional experience. The site features a clean, intuitive interface with smooth animations and transitions, optimized performance, and accessibility features.

    Key Features:
    • Responsive design that adapts to all screen sizes
    • Dark/light mode toggle
    • Work experience showcade
    • Project showcase
    • Skills section with categorized badges
    • Contact form with validation and email-sending API
    • Performance optimized with lazy loading
    • SEO-friendly structure and metadata,
    • Deployed with Vercel`,
    image: "/images/projects/portfolio-project.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Shadcn", "Vite", "Vercel"],
    githubLink: "https://github.com/philniko/portfolio",
    currentlyWorkingOn: false
  },
];

// Skills Data
export const skillsData = {
  "Frontend": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "React Native",
    "Next.js",
    "Angular",
    "Tailwind CSS",
  ],
  "Backend": [
    "Node.js",
    "Express",
    "Django",
    "REST API",
    ".NET",
    "Entity Framework",
    "C#",
    "Java",
    "Python",
    "C",
  ],
  "Database": [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "SQLite",
    "Firebase",
    "Supabase",
  ],
  "DevOps & Tools": [
    "Git",
    "GitHub",
    "Docker",
    "Vercel",
    "CI/CD",
    "Cypress",
    "Handlebars",
    "Jest",
    "Vite",
    "Expo",
    "Vscode",
    "Neovim"
  ],
  "Design": [
    "Figma",
    "Photoshop",
    "Illustrator",
  ]
};

// Footer Information
export const footerInfo = {
  copyright: `© ${new Date().getFullYear()} Philippe Nikolov. All rights reserved.`,
};
