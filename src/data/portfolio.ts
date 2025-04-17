// Personal Information
export const personalInfo = {
  name: "Philippe Nikolov",
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
    title: "Senior Developer",
    company: "Tech Company Inc.",
    period: "Jan 2022 - Present",
    location: "San Francisco, CA",
    description: "Led development of key features for the company's main product. Mentored junior developers and improved deployment processes.",
    fullDescription: `Led development of key features for the company's main product. Mentored junior developers and improved deployment processes.
    
    Key Responsibilities:
    • Led a team of 5 developers to implement new features and maintain existing systems
    • Reduced build times by 40% by optimizing webpack configuration
    • Implemented CI/CD pipeline resulting in more reliable deployments
    • Conducted technical interviews and onboarded new team members
    • Collaborated with product managers to refine requirements and plan sprints`,
    skills: ["React", "TypeScript", "Node.js", "AWS", "Docker", "CI/CD"]
  },
  {
    id: "exp2",
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "Mar 2020 - Dec 2021",
    location: "Austin, TX",
    description: "Developed responsive web applications for various clients. Improved site performance and implemented modern UI patterns.",
    fullDescription: `Developed responsive web applications for various clients. Improved site performance and implemented modern UI patterns.
    
    Key Responsibilities:
    • Built responsive web applications for 10+ clients using modern web technologies
    • Improved site performance scores by an average of 25 points on Lighthouse
    • Implemented design systems for consistent UI/UX across multiple projects
    • Collaborated with designers to ensure faithful implementation of designs
    • Maintained and updated legacy applications while improving their codebase`,
    skills: ["JavaScript", "CSS", "Vue.js", "SCSS", "Webpack", "Jest"]
  },
  {
    id: "exp3",
    title: "Junior Developer",
    company: "Startup XYZ",
    period: "Jun 2018 - Feb 2020",
    location: "Remote",
    description: "Assisted in building the company's web application from scratch. Learned various technologies and best practices.",
    fullDescription: `Assisted in building the company's web application from scratch. Learned various technologies and best practices.
    
    Key Responsibilities:
    • Contributed to building the MVP of the company's main web application
    • Implemented UI components according to design specifications
    • Fixed bugs and improved application performance
    • Participated in code reviews and adopted best practices
    • Learned and applied new technologies on the job`,
    skills: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "Git"]
  }
];

// Projects Data
export const projects = [
  {
    id: "proj1",
    title: "Smart Education Events System",
    description: "A full-featured e-commerce platform with product management, shopping cart, and payment processing.",
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
    githubLink: "https://github.com/wokidoo/SOEN-343-SEES"
  },
  {
    id: "proj2",
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
    demoLink: "https://example.com/portfolio",
    githubLink: "https://github.com/philniko/portfolio"
  },
  {
    id: "proj3",
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
    demoLink: "https://example.com/task-app",
    githubLink: "https://github.com/philniko/retropomodoro"
  },
  {
    id: "proj4",
    title: "Weather Dashboard",
    description: "A weather dashboard that shows current conditions and forecasts for any location.",
    fullDescription: `A weather dashboard application that provides current weather conditions and forecasts for any location worldwide.Users can search for cities, view detailed weather information, and save favorite locations for quick access.The app uses the OpenWeather API to fetch accurate weather data.

    Key Features:
    • Location search with autocomplete
    • Current weather conditions display
    • 5 - day forecast with hourly breakdowns
    • Interactive weather maps
    • Historical weather data charts
    • Unit conversion(Celsius / Fahrenheit)
    • Favorite locations storage
    • Weather alerts and notifications
    • Responsive design for all devices`,
    image: "/weather-project.jpg",
    technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeather API", "Chart.js", "LocalStorage", "Geolocation API"],
    demoLink: "https://example.com/weather",
    githubLink: "https://github.com/yourusername/weather-dashboard"
  }
];

// Skills Data
export const skillsData = {
  "Frontend": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Vue.js",
    "Angular",
    "Tailwind CSS",
    "SASS/SCSS",
    "Framer Motion"
  ],
  "Backend": [
    "Node.js",
    "Express",
    "Django",
    "Flask",
    "GraphQL",
    "REST API",
    "PHP",
    "Java",
    "Spring Boot"
  ],
  "Database": [
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Firebase",
    "Supabase"
  ],
  "DevOps & Tools": [
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "Vercel",
    "Netlify",
    "CI/CD",
    "Jest",
    "Webpack",
    "Vite"
  ],
  "Design": [
    "Figma",
    "Adobe XD",
    "Photoshop",
    "Illustrator",
    "UI/UX",
    "Responsive Design"
  ]
};

// Footer Information
export const footerInfo = {
  copyright: `© ${new Date().getFullYear()} Philippe Nikolov.All rights reserved.`
};
