import {
  backend,
  certArtificialIntelligence,
  certCloudComputing,
  certMachineLearningAssociate,
  certMachineLearningSpecialization,
  certOracleAiFoundations,
  creator,
  github,
  linkedin,
  mobile,
  web,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/maherturki",
    icon: github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/maher-turki/",
    icon: linkedin,
  },
];

export const services = [
  { title: "Enterprise AI Applications", icon: web },
  { title: "Agentic Workflows", icon: creator },
  { title: "Python Backends & APIs", icon: backend },
  { title: "Azure AI Solutions", icon: mobile },
];

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Fluent" },
  { name: "English", level: "Fluent" },
];

export const skillGroups = [
  {
    name: "Programming",
    skills: ["Python", "C#", "JavaScript", "TypeScript", "SQL"],
  },
  {
    name: "AI & Generative AI",
    skills: [
      "LLM Applications",
      "Generative AI",
      "Agentic AI",
      "RAG",
      "Prompt Engineering",
      "LangChain",
      "LangGraph",
      "Embeddings",
      "Semantic Search",
      "GPT-4",
      "Mistral",
    ],
  },
  {
    name: "Backend & Frontend",
    skills: ["FastAPI", "REST APIs", "React.js", "Next.js", "Node.js"],
  },
  {
    name: "Cloud & Infrastructure",
    skills: [
      "Microsoft Azure",
      "Azure AI Foundry",
      "Azure Blob Storage",
      "Azure Event Grid",
      "Azure Storage Queues",
      "Azure Logic Apps",
      "Azure Key Vault",
      "Azure App Service",
      "Docker",
    ],
  },
  {
    name: "Databases & Tools",
    skills: ["PostgreSQL", "SQL Server", "Git", "GitHub", "GitHub Actions"],
  },
];

export const experiences = [
  {
    title: "AI Engineer",
    company_name: "MoonSide Consulting & Services",
    company_initials: "MS",
    iconBg: "#915EFF",
    date: "July 2025 – Present",
    summary:
      "Working on enterprise AI applications and software modernization projects in a financial-services environment.",
    points: [
      "Develop AI-powered applications using Python, FastAPI, and modern LLM technologies.",
      "Implement intelligent document-processing and automation workflows.",
      "Work with LangChain and LangGraph to build and orchestrate agentic AI workflows.",
      "Integrate AI services and cloud infrastructure using Microsoft Azure.",
      "Develop backend services and REST APIs for enterprise applications.",
      "Contribute to frontend development using React.js and Next.js when required.",
    ],
  },
  {
    title: "AI Engineer Intern",
    company_name: "MoonSide Consulting & Services",
    company_initials: "MS",
    iconBg: "#915EFF",
    date: "February 2025 – June 2025",
    summary:
      "Worked on an AI-powered code assistant project, exploring LLM applications and intelligent code analysis.",
    points: [
      "Developed AI-powered capabilities for code analysis and assistance.",
      "Worked with Python and LLM-based application development.",
      "Explored retrieval and intelligent search approaches for technical information.",
    ],
  },
];

export const education = [
  {
    degree: "Engineering Degree in Computer Science — Software Engineering",
    institution: "ISAMM",
    date: "September 2025",
  },
  {
    degree: "National Bachelor's Degree in Computer Science — Information Technology",
    institution: "ISET Kelibia",
    date: "June 2022",
  },
];

export const certifications = [
  {
    name: "IBM Artificial Intelligence Fundamentals",
    organization: "IBM",
    date: "Sep 2024",
    image: certArtificialIntelligence,
    certificate_link:
      "https://www.credly.com/badges/ff3f08fb-fd1e-48b2-bdb0-b61bb3bf2ab9/linked_in_profile",
  },
  {
    name: "IBM Cloud Computing Fundamentals",
    organization: "IBM",
    date: "Sep 2024",
    image: certCloudComputing,
    certificate_link:
      "https://www.credly.com/badges/a2c22954-bcc6-488a-9945-10d0feffae81/linked_in_profile",
  },
  {
    name: "IBM Machine Learning Specialist — Associate",
    organization: "IBM",
    date: "Aug 2024",
    image: certMachineLearningAssociate,
    certificate_link:
      "https://www.credly.com/badges/9244edd5-15d5-4fb9-b8db-305ff4ed6381/linked_in_profile",
  },
  {
    name: "Oracle Cloud Infrastructure 2024 Certified AI Foundations Associate",
    organization: "Oracle",
    date: "Jul 2024",
    image: certOracleAiFoundations,
    note:
      "The certificate image lists validity through 24 August 2026; please confirm its current status.",
    certificate_link:
      "https://brm-certview.oracle.com/ords/certview/ecertificate?ssn=OC5207776&trackId=OCI24AICFA&key=dc50458db50d7f493a5ab401729463c1bb2bee14",
  },
  {
    name: "Machine Learning Specialization",
    organization: "DeepLearning.AI",
    date: "Aug 2024",
    image: certMachineLearningSpecialization,
    certificate_link:
      "https://www.coursera.org/account/accomplishments/specialization/6DD60XH14WOT",
  },
  {
    name: "Advanced Learning Algorithms",
    organization: "DeepLearning.AI",
  },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    organization: "DeepLearning.AI",
  },
  {
    name: "Introduction to Python",
    organization: "DataCamp",
  },
];

export const projects = [
  {
    name: "Intelligent Invoice Automation",
    category: "Document Automation",
    status: "In development",
    description:
      "An enterprise invoice-processing platform designed to automate invoice ingestion, extraction, validation, and processing.",
    technologies: [
      "Python",
      "FastAPI",
      "Next.js",
      "React.js",
      "LangChain",
      "LangGraph",
      "Azure AI Foundry",
      "Mistral Large 3",
      "Azure Blob Storage",
      "Azure Event Grid",
      "Azure Storage Queues",
      "PostgreSQL",
    ],
    details: [
      {
        heading: "Architecture",
        items: [
          "Processes PDF and XML invoices; XML documents are parsed directly and PDF content extraction is handled by the backend.",
          "Mistral AI extraction is optional.",
          "Background processing is separated from the main API.",
          "Azure Blob Storage stores invoice documents; Azure Event Grid and Storage Queues support asynchronous processing.",
          "PostgreSQL stores structured invoice information.",
        ],
      },
      {
        heading: "My contributions",
        items: [
          "Implemented LangGraph-based orchestration and workflow logic.",
          "Developed the FastAPI background worker.",
          "Integrated Azure Storage Queues for asynchronous processing.",
          "Implemented selected frontend pages and components using Next.js and React.js.",
          "Contributed to backend development and invoice-processing workflows.",
        ],
      },
    ],
  },
  {
    name: "MorgenFund: Enterprise AI Assistants",
    category: "Enterprise AI Assistants",
    description:
      "An enterprise AI assistant solution enabling natural-language interaction with confidential source code and technical documentation.",
    technologies: [
      "Python",
      "FastAPI",
      "RAG",
      "Embeddings",
      "Semantic Search",
      "GPT-4",
      "Azure AI",
    ],
    details: [
      {
        heading: "Focus",
        items: [
          "Intelligent retrieval and contextual understanding of enterprise technical information.",
          "AI-powered natural-language interaction with confidential source code and technical documentation.",
        ],
      },
    ],
  },
  {
    name: "E-Fax Automation",
    category: "Enterprise Automation",
    status: "Delivered to production",
    description:
      "An enterprise email-to-fax automation solution independently delivered to production.",
    technologies: [
      "Azure Logic Apps",
      "Microsoft Graph API",
      "Sipgate Fax API",
      "Azure Key Vault",
      "Managed Identity",
    ],
    details: [
      {
        heading: "My contributions",
        items: [
          "Automated email processing and fax submission.",
          "Integrated Microsoft Graph API and Sipgate Fax API.",
          "Implemented recipient validation and message handling.",
          "Implemented fax delivery-status polling.",
          "Managed successful and failed delivery workflows.",
          "Used Azure Managed Identity and Key Vault for secure integration.",
        ],
      },
    ],
  },
  {
    name: "Intelligent Contract Analysis Assistant",
    category: "AI & Document Analysis",
    description:
      "An AI-powered contract analysis assistant developed during my internship to extract relevant contract information, analyze documents, and generate structured summaries.",
    technologies: [
      "Python",
      "FastAPI",
      "GPT-4",
      "Azure AI Document Intelligence",
      "Prompt Engineering",
    ],
    details: [
      {
        heading: "Focus",
        items: [
          "Extracts relevant information from contracts.",
          "Analyzes contract documents and generates structured summaries.",
        ],
      },
    ],
  },
];
