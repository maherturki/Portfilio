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
  linkedin,
  ml,
  mlk,
  mlm,
  cloud,
  oracle,
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
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "AI Developer",
    icon: web,
  },
  {
    title: "Machine Learning Engineer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Cloud Developer",
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
    title: "AI Developer Intern",
    company_name: "OwlCom",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2024 – August 2024",
    points: [
      "Designed and implemented an AI-powered recruitment platform featuring resume analysis and candidate matching.",
      "Developed modular solutions using Python, Streamlit, and LangChain with integrated MySQL database management.",
      "Leveraged LLMs for intelligent candidate profiling and GitHub API for skill analysis.",
      "Delivered a scalable system enabling efficient hiring processes.",
    ],
  },
  {
    title: "AI & Web Development Intern",
    company_name: "HorizonLux",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2023 - August 2023",
    points: [
      "Developed an AI-powered e-learning platform, AIcademy, integrating interactive learning modules.",
      "Utilized React.js and Django for the front-end and back-end development.",
      "Deployed machine learning algorithms for personalized learning experiences using TensorFlow and Keras.",
      "Ensured smooth deployment on AWS with a focus on scalability and user experience.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "BIS",
    icon: shopify,
    iconBg: "#383E56",
    date: "February 2021 - June 2021",
    points: [
      "Developed an end-to-end system for real-time animal health monitoring using Python and Django.",
      "Integrated React front-end and Dockerized back-end services for robust performance.",
      "Designed efficient database models with MySQL for farm management optimization.",
      "Conducted extensive testing and validation to ensure platform accuracy and reliability.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Owlcom",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "June 2020 - August 2020",
    points: [
      "Developed an e-commerce website using Django, HTML5, CSS3, and JavaScript.",
      "Implemented a user-friendly interface with a focus on accessibility and responsiveness.",
      "Optimized server-side performance for faster loading times.",
      "Collaborated with cross-functional teams to align the project with business goals.",
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
      "I've never met a wb developer who truly cares about their clients' success like Rick does.",
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

const certifications = [
  
  {
    name: "Machine Learning Specialization",
    description: "Skills: Supervised, Advanced, and Unsupervised Learning, Reinforcement Learning",
    organization: "DeepLearning.AI",
    date: "Aug 2024",
    tags: [
      {
        name: "Supervised Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Reinforcement Learning",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: mlm,
    certificate_link: "https://www.coursera.org/account/accomplishments/specialization/6DD60XH14WOT", // Replace with actual certificate link
  },
  {
    name: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
    description: "Skills: AI, Generative AI, LLMs, ETL, Data Visualization, Data Analysis",
    organization: "Oracle",
    date: "Jul 2024",
    tags: [
      {
        name: "Generative AI",
        color: "blue-text-gradient",
      },
      {
        name: "Data Visualization",
        color: "green-text-gradient",
      },
      {
        name: "ETL",
        color: "pink-text-gradient",
      },
    ],
    image: oracle, // Replace with actual image path
    certificate_link: "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC5207776&trackId=OCI24AICFA&key=dc50458db50d7f493a5ab401729463c1bb2bee14", // Replace with actual certificate link
  },
  {
    name: "Preparing Your Career in Generative AI",
    description: "This certification highlights my understanding of key concepts in Generative AI, Artificial Intelligence, and Computer Ethics.",
    organization: "LinkedIn Learning in collaboration with Microsoft",
    date: "Issued Jan 2025",
    tags: [
      {
        name: "Artificial Intelligence",
        color: "blue-text-gradient",
      },
      {
        name: "Generative AI",
        color: "green-text-gradient",
      },
      {
        name: "Microsoft",
        color: "pink-text-gradient",
      },
      {
        name: "LinkedIn Learning",
        color: "purple-text-gradient",
      },
    ],
    image: linkedin, // Replace with actual image path
    certificate_link: "https://www.linkedin.com/learning/certificates/069570fec55a23882760e2e2980a73955e4d4e4330e4c76727d4c4cc4a91005e", // Replace with actual certificate link
  },
  {
    name: "Artificial Intelligence Fundamentals",
    description: "Skills: Computer Vision, NLP, Deep Learning, Multimodal AI, RAG",
    organization: "IBM",
    date: "Sep 2024",
    tags: [
      {
        name: "AI",
        color: "blue-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "green-text-gradient",
      },
      {
        name: "NLP",
        color: "pink-text-gradient",
      },
    ],
    image: ml, // Replace with actual image path
    certificate_link: "https://www.credly.com/badges/ff3f08fb-fd1e-48b2-bdb0-b61bb3bf2ab9/linked_in_profile", // Replace with actual certificate link
  },
  {
    name: "IBM Machine Learning Specialist - Associate",
    description: "Skills: Models, Evaluation, Deployment, Machine Learning",
    organization: "IBM",
    date: "Aug 2024",
    tags: [
      {
        name: "Machine Learning",
        color: "blue-text-gradient",
      },
      {
        name: "ML Models",
        color: "green-text-gradient",
      },
      {
        name: "Evaluation",
        color: "pink-text-gradient",
      },
    ],
    image: mlk, // Replace with actual image path
    certificate_link: "https://www.credly.com/badges/9244edd5-15d5-4fb9-b8db-305ff4ed6381/linked_in_profile", // Replace with actual certificate link
  },
  {
    name: "Cloud Computing Fundamentals",
    description: "Skills: Cloud Computing, Migration, Infrastructure, IaaS, PaaS, SaaS",
    organization: "IBM",
    date: "Sep 2024",
    tags: [
      {
        name: "Cloud Computing",
        color: "blue-text-gradient",
      },
      {
        name: "IaaS",
        color: "green-text-gradient",
      },
      {
        name: "SaaS",
        color: "pink-text-gradient",
      },
    ],
    image: cloud, // Replace with actual image path
    certificate_link: "https://www.credly.com/badges/a2c22954-bcc6-488a-9945-10d0feffae81/linked_in_profile", // Replace with actual certificate link
  },
];




const projects = [
  {
    name: "EcoAct",
    description:
      "Web-based platform that connects ecological actors in Tunisia, providing personalized recommendations and trash detection functionalities to promote sustainability and environmental awareness.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "AI",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/maherturki",
  },
  {
    name: "Therapy Bot",
    description:
      "AI-powered chatbot designed for therapy sessions, utilizing natural language processing and computer vision to provide emotional support and mental health assistance.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "nlp",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/maherturki",
  },
  {
    name: "3D AI Teacher",
    description:
      "AI-powered virtual teacher in a 3D environment using React Three Fiber and Three.js for visuals, Azure Speech SDK for speech recognition, and Azure OpenAI for dynamic interactions.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "AzureSpeechSDK",
        color: "green-text-gradient",
      },
      {
        name: "AzureOpenAI",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/maherturki",
  },
];

export { services, technologies, experiences, testimonials, projects, certifications };
