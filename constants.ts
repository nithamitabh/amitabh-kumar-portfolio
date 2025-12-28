import { Project, Experience, Publication, SkillCategory } from './types';

export const PERSONAL_INFO = {
  name: "Amitabh Kumar",
  role: "MERN Stack Developer | GenAI & ML Engineer",
  location: "Varanasi, Uttar Pradesh, India",
  email: "21dec004@nith.ac.in",
  phone: "+91-9555936735",
  availability: "Available immediately for Training-cum-job & Fresher roles",
  github: "https://github.com/amitabh-kumar", // Placeholder based on CV context
  linkedin: "https://linkedin.com/in/amitabh-kumar-392671231/",
  website: "", 
};

export const SUMMARY = `Dual Degree (B.Tech + M.Tech) student in Electronics & Communication Engineering at NIT Hamirpur (2026). Specializing in GenAI, RAG Systems, and Wireless Communication. Proven experience with LLMs at Infosys, Backend Systems at Tublian, and Open Source contributions at Dhiway.`;

export const EXPERIENCE: Experience[] = [
  {
    role: "Gen AI Intern",
    company: "Infosys (Springboard)",
    period: "Aug 2025 – Nov 2025",
    description: [
      "Developed an AI-driven GDPR Compliance Assistant using LLM fine-tuning + RAG for clause detection and missing-policy identification.",
      "Implemented nightly regulatory web-scraping scheduler with automated email + Slack alerts using SMTP + webhooks.",
      "Collaborated with devs on Git/GitHub through feature branching and reviews."
    ]
  },
  {
    role: "Telecom Intern",
    company: "BSNL (Bharat Sanchar Nigam Ltd.)",
    period: "Jun 2025 – Jul 2025",
    description: [
      "Explored national telecom infra including exchanges, fiber grid, and regional routing systems."
    ]
  },
  {
    role: "Open Source Contributor",
    company: "Dhiway (Gov4Tech OS)",
    period: "Jun 2024 – Sep 2024",
    description: [
      "Developed Python SDK over Rust blockchain protocol with secure HTTP endpoints and DB integration.",
      "Contributed to large-scale backend infrastructure with focus on security and scalability."
    ]
  },
  {
    role: "SDE Intern – LLMs, Backend Systems",
    company: "Tublian",
    period: "May 2024 – Jun 2024",
    description: [
      "Built scalable microservice-based chatbot with REST APIs and asynchronous pipelines for Edtech platform.",
      "Integrated vector DB + streaming stack; focused on performance optimization and reliability."
    ]
  }
];

export const EDUCATION = [
  {
    degree: "Masters of Technology (Dual Degree – BTech + MTech)",
    institution: "National Institute of Technology, Hamirpur",
    specialization: "Electronics & Communication Engineering",
    year: "2024–2026"
  },
  {
    degree: "Bachelor of Technology (Dual Degree – BTech + MTech)",
    institution: "National Institute of Technology, Hamirpur",
    specialization: "Electronics & Communication Engineering",
    year: "2021–2025"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "Channel Estimation for Multi-User Massive MIMO using Federated Learning",
    publisher: "Research Work",
    domain: "Deep Learning, MATLAB, Python"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Swara AI Chatbot",
    techStack: ["LangChain", "Pinecone", "Streamlit", "Golang"],
    description: "Integrated Kafka queues for async message processing and reliable inference. Optimized LLM latency and managed secure API layer with NoSQL storage.",
    key_achievement: "Optimized LLM latency and managed secure API layer with NoSQL storage.",
    links: {
      github: "https://github.com/amitabh-kumar/swara-ai", // Placeholder
      live: "#" 
    }
  },
  {
    title: "Placement & Coding Platform Clones",
    techStack: ["MEAN", "Next.js", "Docker", "PostgreSQL", "REST APIs"],
    description: "Designed scalable backend architecture using microservices and Docker for Edtech use case. Developed authentication and coding dashboard.",
    key_achievement: "Deployed pipeline with CI/CD and implemented scalable microservices architecture.",
    links: {
        github: "https://github.com/amitabh-kumar/placement-platform", // Placeholder
        live: "#"
    }
  },
  {
    title: "Channel Estimation for Massive MIMO",
    techStack: ["Deep Learning", "MATLAB", "Python", "Federated Learning"],
    description: "Proposed Federated Learning-based CSI feedback method for 6G Massive MIMO to improve signal accuracy.",
    key_achievement: "Proposed FL-based CSI feedback method; results published.",
    links: {
        github: "https://github.com/amitabh-kumar/mimo-fl", // Placeholder
    }
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Core",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "Rust", "Golang"]
  },
  {
    category: "AI/ML & GenAI",
    skills: ["LLMs", "RAG", "LangChain", "Federated Learning"]
  },
  {
    category: "Web & Backend",
    skills: ["Node.js", "Express", "FastAPI", "Next.js", "Streamlit", "REST APIs"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Kubernetes", "Git/GitHub", "Linux", "CI/CD", "Webhooks", "SMTP Integration"]
  }
];

export const OPEN_SOURCE = [
  {
    event: "HacktoberFest 2025",
    role: "Top Ranker",
    details: "Contributed in Next and React Projects, achieved top ranks."
  },
  {
    event: "Problem Solving",
    role: "1900+ LeetCode",
    details: "Solved 500+ problems, Top 50 SQL problems. Active on GFG, InterviewBit, and CP contests."
  },
  {
    event: "Hackathons",
    role: "Active Participant",
    details: "SIH (Web Lead), MIT IQuHACK, MLH GHW, ETHIndia, Electrothon."
  }
];