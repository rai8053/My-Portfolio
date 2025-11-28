export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'AI/ML' | 'Web3';
  level: number; // 0-100
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum SectionId {
  HERO = 'hero',
  PROJECTS = 'projects',
  SKILLS = 'skills',
  RESUME = 'resume',
  CONTACT = 'contact'
}