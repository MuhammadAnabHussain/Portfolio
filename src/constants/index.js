import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  deepLearning,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  SqlServer,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  eVoting,
  music,
  degree_verification_system,
  e_Commerce,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Train & Test ML Models",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Train Machine Learning Models",
    icon: deepLearning,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "SqlServer",
    icon: SqlServer,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "E-voting System using Blockchain",
    icon: eVoting,
    iconBg: "#383E56",
    date: "March 2023 - present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Music app",
    icon: music,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Feb 2023",
    points: [
      "Experience in creating a music app for both iOS and Android with a single codebase.",
      "Mastering complex UI/UX challenges for an intuitive music playback interface.",
      "Integrating and managing audio playback features seamlessly within the app.",
      "Optimizing app performance for smooth audio playback and efficient data handling.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "E-commerce",
    icon: e_Commerce,
    iconBg: "#383E56",
    date: "Aug 2022 - Oct 2022",
    points: [
      "I learned to efficiently manage complex databases for product data, user profiles, and orders.",
      "Emphasizing robust security measures, including encryption, authentication, and protection against web vulnerabilities.",
      "Integrating secure payment gateways like PayPal and Stripe for seamless online transactions.",
      "Optimizing code and server resources for scalability, fast load times, and a smooth shopping experience.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Degree Verification System",
    icon: degree_verification_system,
    iconBg: "#E6DEDD",
    date: "sep 2021 - jan 2022",
    points: [
      "A degree verification system validates the authenticity of academic credentials, ensuring that diplomas and degrees are legitimate.",
      "It maintains a secure database of educational institutions and their degree programs, allowing for quick and accurate verification.",
      "Streamlines the verification process, saving time and effort for employers, institutions, and individuals.",
      "Promotes trust and reliability in educational qualifications, reducing fraud and safeguarding the integrity of academic achievements.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Muhammad proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Muhammad does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Muhammad optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Iballot (e-voting system)",
    description:
      "I specialize in React.js web app development, collaborating with cross-functional teams. My skills include responsive design and cross-browser compatibility, ensuring exceptional user experiences. I actively participate in code reviews, offering constructive feedback for a collaborative development environment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: eVoting,
    source_code_link: "https://github.com/MuhammadAnabHussain/",
  },
  {
    name: "Degree Verfication System",
    description:
      "A degree verification system validates academic credentials, ensuring legitimacy. It maintains a secure database of institutions and programs for swift verification, saving time and effort. This efficiency benefits employers, institutions, and individuals. It builds trust in educational qualifications.",
    tags: [
      {
        name: "ASP.NET Core",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: degree_verification_system,
    source_code_link: "https://github.com/MuhammadAnabHussain/",
  },
  {
    name: "E-commerce",
    description:
      "Building an eCommerce site in PHP improved my database management, security, and payment integration skills. I prioritized robust security with encryption and authentication, while seamlessly integrating payment gateways like PayPal and Stripe. Additionally, I optimized performance for scalability and quick load times, enhancing the user's shopping experience.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "SQL Server",
        color: "green-text-gradient",
      },
      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: e_Commerce,
    source_code_link: "https://github.com/MuhammadAnabHussain/",
  },
];

export { services, technologies, experiences, testimonials, projects };
