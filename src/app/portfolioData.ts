import {
  Code2,
  Database,
  GitBranch,
  Terminal,
  Palette,
  Server,
  Wrench,
  Mail,
  MapPin,
  Clock,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Heart,
  Music,
  Sparkles,
  BookOpen,
  Chrome,
  Trophy,
  Compass,
  Laptop,
  Instagram,
  MessageCircle
} from 'lucide-react';

export const portfolioData = {
  personal: {
    name: 'Vishant',
    fullName: 'Vishant Giri',
    title: 'Frontend Developer',
    location: 'Kota, Rajasthan, India',
    email: 'Vishantgiri12@gmail.com',
    phone: '+91 78785 86983',
    whatsapp: 'https://wa.me/917878586983',
    resumeUrl: 'Vishant resume 2025.pdf', // Name of the file in the public directory
  },

  socials: [
    { icon: Github, href: 'https://github.com/WIKItills', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/connectwithvishantgiri', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/vishant_giri?igsh=MTFuam8yMWhkdTF1bw==', label: 'Instagram' },
    { icon: MessageCircle, href: 'https://wa.me/917878586983', label: 'WhatsApp' },
    { icon: Mail, href: 'mailto:Vishantgiri12@gmail.com', label: 'Email' }
  ],

  navigation: {
    logoText: 'Vishant',
  },

  hero: {
    badgeText: "Hi, I'm Vishant Giri",
    headingMain: 'Frontend',
    headingSub: 'Developer',
    description: 'Frontend Developer with 1+ year of experience building responsive, scalable, and user-centric web applications. Specializing in writing clean, maintainable code and delivering high-quality user experiences.',
    ctaPrimary: 'View My Work',
    ctaSecondary: 'Get In Touch',
  },

  about: {
    label: 'About Me',
    title: 'Creating Scalable Web Solutions',
    subtitle: 'Passionate about frontend performance, responsive design, and clean user interfaces',
    paragraphs: [
      "I'm a Frontend Developer & Software Engineer with 1+ year of experience building responsive, scalable, and user-centric web applications. I am proficient in building modular UI components, optimizing application performance, and collaborating in agile environments.",
      "I love translating complex layouts (Figma/PSD mockups) into pixel-perfect responsive templates and implementing smooth interactive features that hook users. Passionate about writing clean, maintainable code using React, TypeScript, and modern styling utilities."
    ],
    highlights: [
      { icon: Briefcase, label: 'Current Role', value: 'Software Engineer' },
      { icon: MapPin, label: 'Location', value: 'Kota, Rajasthan' },
      { icon: Code2, label: 'Main Stack', value: 'React / Node.js' },
      { icon: Clock, label: 'Experience', value: '1+ Years' }
    ]
  },

  journey: {
    label: 'Career Journey',
    title: 'Professional Experience',
    subtitle: 'A timeline of my professional growth and key contributions',
    timeline: [
      {
        title: 'Software Engineer',
        company: 'Stonestry OnSite',
        location: 'Kota, Rajasthan',
        period: 'Mar 2026 – Present',
        achievements: [
          'Contributed to the development of enterprise ERP modules using the MERN stack (Production, Pricing, Quality Control, Wooden Crates, FG Store, and Stone Purchase Management).',
          'Designed and optimized scalable REST APIs and React interfaces supporting 200+ active users with centralized real-time data management.',
          'Independently developed the Store Consumables module from scratch, digitizing indent tracking and automating inventory workflows handling 13,500+ monthly item transactions.',
          'Improved procurement efficiency, inventory visibility, and operational workflows by implementing business logic, workflow automation, and performance optimizations.'
        ],
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs', 'TypeScript']
      },
      {
        title: 'Frontend Development Intern',
        company: 'eSaral Ventures Pvt. Ltd.',
        location: 'Kota, Rajasthan',
        period: 'Jan 2025 – Feb 2025',
        achievements: [
          'Built and maintained entire website modules using HTML, CSS, JavaScript, jQuery, and Bootstrap, focusing on scalability and performance.',
          'Converted PSD and Figma design mockups into modular, responsive HTML, CSS, JavaScript, Bootstrap, and jQuery templates.',
          'Collaborated with designers and developers to ensure UI/UX consistency, technical feasibility, and responsive implementation.',
          'Developed on-demand landing pages for marketing campaigns and integrated AJAX and third-party APIs to deliver dynamic user experiences.'
        ],
        technologies: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'Bootstrap', 'AJAX', 'Figma']
      }
    ]
  },

  skills: {
    label: 'Tech Stack',
    title: 'Skills & Technologies',
    subtitle: 'Languages, frameworks, and developer tools that I use to build solutions',
    categories: [
      {
        category: 'Programming Languages',
        skills: [
          { name: 'JavaScript', icon: Code2, level: 'Advanced' },
          { name: 'TypeScript', icon: Code2, level: 'Advanced' },
          { name: 'C++', icon: Code2, level: 'Intermediate' },
          { name: 'C', icon: Code2, level: 'Intermediate' }
        ]
      },
      {
        category: 'Frontend & Backend',
        skills: [
          { name: 'React.js', icon: Laptop, level: 'Advanced' },
          { name: 'HTML5 / CSS3', icon: Palette, level: 'Advanced' },
          { name: 'Tailwind CSS', icon: Palette, level: 'Advanced' },
          { name: 'Bootstrap', icon: Palette, level: 'Advanced' },
          { name: 'jQuery', icon: Code2, level: 'Advanced' },
          { name: 'Node.js', icon: Server, level: 'Intermediate' },
          { name: 'Express.js', icon: Server, level: 'Intermediate' },
          { name: 'Supabase / PostgreSQL', icon: Database, level: 'Intermediate' },
          { name: 'MongoDB / MySQL', icon: Database, level: 'Intermediate' }
        ]
      },
      {
        category: 'Tools & DevOps',
        skills: [
          { name: 'VS Code', icon: Terminal, level: 'Advanced' },
          { name: 'Git & GitHub', icon: GitBranch, level: 'Advanced' },
          { name: 'Chrome DevTools', icon: Terminal, level: 'Advanced' },
          { name: 'AJAX / REST APIs', icon: Wrench, level: 'Advanced' }
        ]
      }
    ]
  },

  projects: {
    label: 'Portfolio',
    title: 'Featured Projects',
    subtitle: 'Selected projects highlighting full stack application structure, utility tools, and clean designs',
    list: [
      {
        title: 'Shemor',
        description: "Developed a scalable full-stack women's ethnic clothing e-commerce website using React, TypeScript, Tailwind CSS, Vite, and Supabase (PostgreSQL). Built reusable and responsive UI catalog components, custom shopping cart modules, client-side routing, and integrated secure user authentication and database operations. Optimized application performance and deployment readiness with Cloudflare Workers/Pages.",
        image: 'https://images.unsplash.com/photo-1608748010899-18f300247112?auto=format&fit=crop&q=80&w=1000',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Supabase', 'PostgreSQL', 'Cloudflare Pages'],
        liveUrl: 'https://shemor.in',
        sourceUrl: 'https://github.com/WIKItills'
      },
      {
        title: 'TO-DO List',
        description: 'A beautiful and functional Todo List web app built with vanilla HTML, CSS, and JavaScript. Features task creation, editing, completion tracking, filtering, statistics, and local storage. Fully responsive with modern design and smooth animations.',
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1000',
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveUrl: 'https://wikitills.github.io/TO-DO-LIST/',
        sourceUrl: 'https://github.com/WIKItills/TO-DO-LIST'
      },
      {
        title: 'Basic-calculator',
        description: 'A modern, dark-themed calculator with smooth, rounded buttons, built using HTML, CSS, and JavaScript. Supports basic arithmetic operations, responsive design, keyboard input, and clean animations for an intuitive and visually appealing user experience.',
        image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=1000',
        tags: ['HTML', 'CSS', 'JavaScript'],
        liveUrl: 'https://wikitills.github.io/Basic-calculator/',
        sourceUrl: 'https://github.com/WIKItills/Basic-calculator'
      }
    ]
  },

  testimonials: {
    show: false,
    label: 'Testimonials',
    title: 'What People Say',
    subtitle: "Feedback from colleagues and clients I've worked with",
    list: []
  },

  contact: {
    label: 'Get In Touch',
    title: "Let's Work Together",
    subtitle: "Have a project in mind? Let's create something amazing together.",
    formSubmitUrl: 'https://formsubmit.co/ajax/connectwithvishantgiri@gmail.com',
    funFactTitle: 'Fun Fact',
    funFactText: "When I'm not coding, you'll find me hiking in the mountains, experimenting with photography, or contributing to open-source projects!",
    info: [
      { icon: Mail, label: 'Email', value: 'Vishantgiri12@gmail.com' },
      { icon: MapPin, label: 'Location', value: 'Kota, Rajasthan, India' },
      { icon: Clock, label: 'Availability', value: 'Open to full-time roles & freelance projects' }
    ]
  },

  footer: {
    copyrightText: 'Vishant Giri. All rights reserved.',
    techStackText: 'Built using React, TypeScript & Tailwind CSS'
  }
};
