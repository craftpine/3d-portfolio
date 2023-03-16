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
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  bunbu,
  vsii,
  jamja,
  kizukai,
  mynavi
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
    title: "Freelancer",
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "BUNBU company limited",
    icon: bunbu,
    iconBg: "#383E56",
    date: "Dec 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "VietSoftware International ",
    icon: vsii,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Dec 2020",
    points: [
      "Architected front end module and built reusable components with React and Angular",
      "Worked with back-end engineers to optimize existing API calls",
      "Working directly with clients to develop technical solutions for business cases",
      "Used debugging tools such as Firebug and IE Dev tools to investigate the issues and fix the bugs",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Webplus SJC",
    icon: shopify,
    iconBg: "#383E56",
    date: "Sep 2018 - Aug 2019",
    points: [
      "Building websites from a mock-up that is responsive and usable using HTML, CSS, JS (Jquery)",
      "Managing older HTML, CSS, and JS code and providing guidance and troubleshooting support to clients.",
      "Monitoring website performance and fixing front-end related issues",
      "Designed CSS templates for use on all pages on the website working with CSS background, positioning, text, border, margin, padding, and table",
      "Applied optimization techniques to reduce page size and load time to enhance user experience using sprites",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "JAMJA CORP",
    icon: jamja,
    iconBg: "#E6DEDD",
    date: "Jun 2018 - Aug 2019",
    points: [
      "Implemented websites, and landing pages from concept through deployment using React JS Leaning and adding web-pack, BEM, and SASS to an existing project",
      "Develop responsive interface using Bootstrap and used SASS for CSS",
      "Used various technologies, including JavaScript to make code repairs and optimize corporate website",
      "Analyzed requirements and designed, developed, and implemented software applications for multiple websites",
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
    name: "Kizukai",
    description:
      "This app supports for distributed data collection, instant visualization of customer status",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: kizukai,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mynavi",
    description:
      "The client works on recruitment. With the desire to create communities to have many people interact so that customers can have information as well as post job postings.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "socketio",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: mynavi,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
