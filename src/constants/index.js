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
    title: "Web Designing",
    icon: web,
  },
  {
    title: "WordPress  Developer",
    icon: mobile,
  },
  {
    title: "React Developer",
    icon: backend,
  },
  {
    title: ".Net Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
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

const experiences = [
  {
    title: ".Net Developer",
    company_name: "SRM TECHNOLOGIES",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2022 - July 2022",
    points: [
      "Developed and maintained web applications using ASP.NET Core.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Word-Press Designing",
    company_name: "SRM TECHNOLOGIES",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Jan 2023",
    points: [
      "Developed and maintained WordPress-based web designs.",
      "Collaborated with cross-functional teams, including designers, product managers, and other developers, to create high-quality products.",
      "Implemented responsive design principles and ensured cross-browser compatibility.",
      "Participated in code reviews, offering constructive feedback to enhance code quality.",
    ],
  },
  {
    title: "Web Designing",
    company_name: "SRM TECHNOLOGIES",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2023 - Present",
    points: [
      "Developing and maintaining web applications using HTML, CSS, JavaScript, and jQuery to leverage modern web technologies.",
      "Collaborating with cross-functional teams, including designers, product managers, and other developers, to ensure the delivery of high-quality products.",
      "Implementing responsive design principles and ensuring cross-browser compatibility to optimize the user experience.",
      "Actively participating in code reviews and offering constructive feedback to enhance the overall quality of the codebase.",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "The Federal",
    description:
      "web-based platform designed to revolutionize the way you access news and information. Our platform offers users a seamless experience, allowing them to explore, engage with, and manage news content from diverse sources all in one place.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    // image: carrent,
    source_code_link: "https://thefederal.com/",
  },
  {
    name: "SRM GLOBAL HOSPITAL",
    description:
      "web-based platform designed to revolutionize the way you access news and information. Our platform offers users a seamless experience, allowing them to explore, engage with, and manage news content from diverse sources all in one place.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    // image: jobit,
    source_code_link: "https://srmglobalhospitals.com/",
  },
  {
    name: "Election Work",
    description:
      "web-based platform designed to revolutionize the way you access news and information. Our platform offers users a seamless experience, allowing them to explore, engage with, and manage news content from diverse sources all in one place.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    // image: tripguide,
    source_code_link: "https://thefederal.com/category/elections-2024/",
  },
];

export { services, technologies, experiences, testimonials, projects };
