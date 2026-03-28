import {
  Award,
  Cloud,
  Code2,
  Figma,
  Github,
  Layers3,
  Smartphone,
  TerminalSquare,
  Trophy,
} from 'lucide-react';

export const personalInfo = {
  name: 'Shivam Gill',
  role: 'Full Stack Developer / Android Developer',
  tagline: 'Building scalable apps & solving real-world problems',
  email: 'shivamgill9646@gmail.com',
  phone: '+91 9646199835',
  linkedin: 'https://www.linkedin.com/in/shivamgill9322/',
  github: 'https://github.com/shivamgill9322',
  location: 'Punjab, India',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const heroRoles = [
  'Full Stack Developer',
  'Android Developer',
  'Problem Solver',
  'Product Builder',
];

export const aboutCards = [
  {
    title: 'Experience',
    description: 'Hands-on experience shipping mobile and web experiences with a focus on polished product delivery.',
    icon: Layers3,
  },
  {
    title: 'Focus',
    description: 'Scalable application architecture, intuitive interfaces, performant frontends, and dependable APIs.',
    icon: Code2,
  },
  {
    title: 'Passion',
    description: 'Turning practical problems into fast, elegant software people genuinely enjoy using.',
    icon: Trophy,
  },
];

export const skills = [
  {
    category: 'Languages',
    icon: TerminalSquare,
    items: ['JavaScript', 'TypeScript', 'Java', 'Kotlin', 'SQL', 'HTML', 'CSS'],
  },
  {
    category: 'Frameworks',
    icon: Code2,
    items: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'Android SDK', 'Firebase'],
  },
  {
    category: 'Tools',
    icon: Figma,
    items: ['Git', 'GitHub', 'Postman', 'VS Code', 'Android Studio', 'Figma'],
  },
  {
    category: 'Cloud',
    icon: Cloud,
    items: ['Vercel', 'Netlify', 'Firebase', 'MongoDB Atlas', 'Render'],
  },
];

export const projects = [
  {
    title: 'Car Rental System',
    description:
      'A modern booking workflow for vehicle discovery, availability management, reservation tracking, and streamlined admin operations.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/shivamgill9322',
    image: '/project-car-rental.svg',
    accent: 'from-sky-500/30 via-cyan-400/10 to-transparent',
  },
  {
    title: 'Pac-Man Android Game',
    description:
      'A playful Android arcade experience with responsive controls, score tracking, smooth animations, and mobile-first gameplay tuning.',
    stack: ['Java', 'Android', 'Canvas', 'SQLite'],
    githubUrl: 'https://github.com/shivamgill9322',
    image: '/project-pacman.svg',
    accent: 'from-fuchsia-500/30 via-violet-400/10 to-transparent',
  },
  {
    title: 'Amazon Sales Dashboard',
    description:
      'A data-rich analytics dashboard surfacing sales performance, category insights, and KPI trends for quicker business decisions.',
    stack: ['React', 'Charts', 'Tailwind', 'REST API'],
    githubUrl: 'https://github.com/shivamgill9322',
    image: '/project-amazon-dashboard.svg',
    accent: 'from-emerald-500/25 via-sky-400/10 to-transparent',
  },
];

export const achievements = [
  {
    title: '1K+ Users App Impact',
    description: 'Built and shipped apps that reached over 1,000 users with a strong focus on utility, responsiveness, and iteration.',
    icon: Smartphone,
  },
  {
    title: 'LeetCode Streak Discipline',
    description: 'Maintained a consistent problem-solving streak to sharpen data structures, algorithms, and interview readiness.',
    icon: Award,
  },
];

export const certifications = [
  'Full Stack Web Development',
  'Android App Development',
  'Data Analytics & Dashboarding',
  'Cloud Deployment Essentials',
];

export const education = [
  {
    year: '2021 - 2025',
    title: 'Bachelor of Technology',
    subtitle: 'Computer Science / Related Engineering Discipline',
    description: 'Built a foundation in software engineering, problem-solving, application development, and modern development practices.',
  },
  {
    year: '2019 - 2021',
    title: 'Senior Secondary Education',
    subtitle: 'Science Stream',
    description: 'Strengthened analytical thinking and established the academic base for engineering and software development.',
  },
];
