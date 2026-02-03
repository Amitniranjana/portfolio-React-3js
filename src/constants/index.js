export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Amit was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Amit’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Amit. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Amit was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Ramlakhan Builders - Construction Company Website',
    desc: ' Ramlakhan Builders is a modern, high-performance website designed to showcase construction services. It features a highly interactive and visually appealing landing page with smooth animations, ensuring an engaging user experience.',
    subdesc:
      'Built with React.js, JavaScript, GSAP, and Locomotive Scroll, this website delivers fast load times, seamless scrolling effects, and a responsive UI for enhanced usability across devices.',
    href: 'https://ramlakhanbuilders.com/',
    hreff: 'https://youtu.be/NQAbzueeHV0?feature=shared',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },

      {
        id:3,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'SmartHR - Employee Management System',
    desc: 'A robust task management system where admins and managers assign tasks, track progress, and monitor performance. Employees can accept, complete, or fail tasks and view task statistics via a dedicated dashboard, with insights into project status for better decision-making.',
    subdesc:
      'Tech Stack: React.js, Context API, LocalStorage. Developed a role-based authentication system with secure login and personalized dashboards.',
    href: 'https://amitniranjana-employee-management-system-react-js.vercel.app/',
    hreff: 'https://youtu.be/-7wjLhwXfIo?feature=shared',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },

    ],
  },
  {
    title: 'MindEase - AI Mental Health Support Bot',
    desc: 'An AI-powered mental health support bot offering personalized emotional assistance, mood tracking, and guided self-help resources in a safe and accessible space.',
    subdesc:
      'The bot utilizes conversational AI and sentiment analysis to interact with users and provide personalized suggestions. It is built with React.js, Tailwind CSS, TypeScript, and Framer Motion.',
    hreff: 'https://youtu.be/BrEq4S2NOGA?feature=shared',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Smart bridge',
    pos: 'Web Developer',
    duration: '20 Jan - 10 March 2025',
    title: " As part of my internship, I have contributed to the development of Social X, a social media platform built using the MERN stack. key features such as real-time messaging, JWT-based user authentication, interactive posts (likes, comments), and notifications. Additionally, I have integrated WebSockets to enable real-time updates, enhancing user engagement and platform responsiveness",
    icon: '/assets/framerr.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'ATMECS Global Gen AI Hackathon',
    pos: ' Web Developer',
    duration: '2024',
    title: "I was selected for the ATMECS Global Gen AI Hackathon, where I worked on an AI Mental Health Support Bot. This AI-powered bot provides personalized emotional assistance, mood tracking, and guided self-help resources using conversational AI and sentiment analysis. Built with React.js, Tailwind CSS, TypeScript, and Framer Motion, it ensures a safe and accessible space for mental health support.",
    icon: '/assets/figma.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Startup Project',
    pos: 'Web Developer',
    duration: '10 April - 20 June 2024',
    title: "I built an e-commerce website for my brother's construction business, Ramlakhan Builders, using React.js, JavaScript, GSAP, and Locomotive Scroll. It features smooth animations, an interactive landing page, and a responsive UI for an engaging user experience, enabling seamless order placement via an attached Google Form.",
    icon: '/assets/notion.png',
    animation: 'salute',
  },
];
