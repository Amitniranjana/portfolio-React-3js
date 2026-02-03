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
    title: 'AI-Powered Interview Generation System',
    desc: '• Built an AI-driven platform that collects user info and generates customized interviews. • Integrated Google Gemini API & Vapi Workflow for real-time question generation. • Added authentication, Firebase, and feedback features for personalized improvement ',
    subdesc:
      'Built with | Next js ,Tailwind css ,Firebase , Vapi , Google gemini | this website delivers fast load times, seamless scrolling effects, and a responsive UI for enhanced usability across devices.',
    href: 'https://ai-mock-interview-seven-sable.vercel.app/sign-in',
    hreff: 'https://www.linkedin.com/posts/amit-niranjan-76063125a_ai-artificialintelligence-interviewpreparation-activity-7389269012469305344-qVxQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_PJfgBmslSPbZrfshhH462JYYU5eCSv08',
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
  title: 'Mystery Message - Anonymous Feedback Platform',
    desc: 'An AI-powered mental health support bot offering personalized emotional assistance, mood tracking, and guided self-help resources in a safe and accessible space.',
    subdesc:
      '• Architected an anonymous feedback platform enabling unique public links, leveraging MongoDB Aggregation Pipelines for efficient data filtering and management. • Implemented secure OTP-based authentication via NextAuth and Resend, while ensuring strict type safety and input validation using Zod.',
       href: 'https://mystery-message-psi-three.vercel.app/',
    hreff: 'https://github.com/Amitniranjana/anonymousMessage',

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
    name: 'Livana Eco',
    pos: 'backend developer intern',
    duration: '1 Nov 2025 - Present...',
    title: " • Developed high-performance backend modules using Rust and Axum, focusing on type safety and concurrency. • Streamlined deployment workflows by containerizing Rust microservices using Docker. ",
    icon: '/assets/framer.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'ShammTech IT Solutions ',
    pos: ' Full Stack Developer Intern',
    duration: 'july 2025 - sep 2025',
    title: " Implemented real-time communication features for a Video Conferencing Platform using WebRTC/Socket.io ensuring low latency data transfer",
    icon: '/assets/react.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'SmartInternz ',
    pos: 'Full Stack Developer Intern ',
    duration: 'Jan 2025  -  sep 2025',
    title: "• Developed SocialX using the MERN stack, implementing secure JWT authentication, real-time posts, and dynamic news feeds. • Designed a fully responsive UI with React and Redux, ensuring optimized performance across mobile and desktop devices. ",
    icon: '/assets/notion.png',
    animation: 'salute',
  },
];
