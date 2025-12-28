export interface Project {
  title: string;
  techStack: string[];
  description: string;
  key_achievement: string;
  links: {
    github?: string;
    live?: string;
  };
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Publication {
  title: string;
  publisher: string;
  domain: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}