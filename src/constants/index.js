import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import federalIcon from "../assets/federal_logo.png";
import federalLook from "../assets/federalLook.png";
import srmHos from "../assets/srmHos.png";
import Edash from "../assets/Edash.png";
import aiProduct from "../assets/aiProduct.png";

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
    title: ".Net Developer",
    icon: creator,
  },
  {
    title: "WordPress  Developer",
    icon: mobile,
  },
  {
    title: "React & Redux Developer",
    icon: web,
  },

  {
    title: "MERN Stack Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

// const experiences = [
//   {
//     title: ".Net Developer",
//     company_name: "SRM TECHNOLOGIES",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "Feb 2022 - July 2022",
//     points: [
//       "Developed and maintained web applications using ASP.NET Core.",
//       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//       "Implementing responsive design and ensuring cross-browser compatibility.",
//       "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
//   },
//   {
//     title: "Word-Press Designing",
//     company_name: "SRM TECHNOLOGIES",
//     icon: starbucks,
//     iconBg: "#E6DEDD",
//     date: "Aug 2022 - Jan 2023",
//     points: [
//       "Developed and maintained WordPress-based web designs.",
//       "Collaborated with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
//       "Implemented responsive design principles and ensured cross-browser compatibility.",
//       "Participated in code reviews, offering constructive feedback to enhance code quality.",
//     ],
//   },
//   {
//     title: "Web Designing",
//     company_name: "SRM TECHNOLOGIES",
//     icon: starbucks,
//     iconBg: "#383E56",
//     date: "Feb 2023 - Present",
//     points: [
//       "Developing and maintaining web applications using HTML, CSS, JavaScript, and jQuery to leverage modern web technologies.",
//       "Collaborating with cross-functional teams, including designers, product managers, and other developers, to ensure the delivery of high-quality products.",
//       "Implementing responsive design principles and ensuring cross-browser compatibility to optimize the user experience.",
//       "Actively participating in code reviews and offering constructive feedback to enhance the overall quality of the codebase.",
//     ],
//   },
//   // {
//   //   title: "Full stack Developer",
//   //   company_name: "Meta",
//   //   icon: meta,
//   //   iconBg: "#E6DEDD",
//   //   date: "Jan 2023 - Present",
//   //   points: [
//   //     "Developing and maintaining web applications using React.js and other related technologies.",
//   //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//   //     "Implementing responsive design and ensuring cross-browser compatibility.",
//   //     "Participating in code reviews and providing constructive feedback to other developers.",
//   //   ],
//   // },
// ];

const experiences = [
  {
    title: "React Developer",
    company_name: "SRM Technologies",
    icon: federalIcon,
    iconBg: "white",
    date: "Feb 2022 - Present",
    points: [
      "Developed and maintained React.js applications with dynamic data rendering and routing.",
      "Built an election results dashboard using D3.js for interactive data visualization.",
      "Integrated external news APIs and displayed key insights using CodeMirror and custom tooltips.",
      "Used TailwindCSS and ShadCN/UI for responsive and modern UI components.",
    ],
  },
  {
    title: "UI Developer",
    company_name: "SRM Technologies",
    icon: starbucks,
    iconBg: "#9da4c3",
    date: "Oct 2023 - Feb 2024",
    points: [
      "Designed and developed responsive websites using HTML, CSS, JavaScript, Bootstrap, and jQuery.",
      "Created dashboards and landing pages tailored for internal college systems.",
      "Optimized user interface performance and ensured cross-browser compatibility.",
      "Collaborated with backend teams to integrate forms, data tables, and login systems.",
    ],
  },
  {
    title: "Web Designer / WordPress Developer",
    company_name: "SRM Technologies",
    icon: starbucks, // if you have a different icon for this
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Sep 2023",
    points: [
      "Developed custom WordPress themes and managed content-heavy websites.",
      "Ensured mobile-first design and handled on-page SEO improvements.",
      "Participated in team planning meetings and improved turnaround on project delivery.",
      "Handled updates, maintenance, and bug fixing for multiple client sites.",
    ],
  },
  {
    title: ".NET Developer Full Stack",
    company_name: "SRM Technologies",
    icon: starbucks,
    iconBg: "white",
    date: "Feb 2022 - July 2022",
    points: [
      "Built and maintained ASP.NET Core applications under senior developer supervision.",
      "Worked on database integration and form validation.",
      "Contributed to internal tools for college administrative systems.",
      "Gained experience in MVC architecture and Razor views.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "The Federal Website",
    description:
      "A comprehensive news platform delivering trending, political, and regional updates. Contributed to UI enhancements using Bootstrap and JavaScript, ensuring responsive, accessible layouts across all devices.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Bootstrap", color: "violet-gradient" },
    ],
    image: federalLook,
    source_code_link: "https://thefederal.com/",
  },
  {
    name: "SRM Global Hospital",
    description:
      "Designed and developed a responsive hospital website showcasing departments, services, and facilities. Focused on clean UI, mobile responsiveness, and quick navigation using Bootstrap and modern CSS techniques.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "Bootstrap", color: "orange-text-gradient" },
    ],
    image: srmHos,
    source_code_link: "https://srmglobalhospitals.com/",
  },
  {
    name: "The Federal Election Dashboard",
    description:
      "Interactive dashboard visualizing 2024 Indian election results using React and D3.js. Includes dynamic state-wise updates, data filtering, and engaging visual storytelling backed by real-time data.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Bootstrap", color: "green-text-gradient" },
      { name: "D3.js", color: "pink-text-gradient" },
      { name: "JavaScript", color: "orange-text-gradient" },
    ],
    image: Edash,
    source_code_link: "https://thefederal.com/category/elections-2024/",
  },
  {
    name: "The Federal AI Product",
    description:
      "Built an AI-enhanced interface using React and CodeMirror to format JSON data and generate UPSC/SSLC exam questions from news articles using GPT integration. Includes export to JSON, CSV, and clipboard features.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "Redux", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
      { name: "Node JS & Express", color: "orange-text-gradient" },
      { name: "MongoDB", color: "orange-text-gradient" },
    ],
    image: aiProduct,
    source_code_link: "https://products.thefederal.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
