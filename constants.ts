import { Project, Skill } from './types';

export const DEVELOPER_NAME = "Raihan Hazra";
export const DEVELOPER_ROLE = "Python Developer | Backend Engineer";
export const DEVELOPER_BIO = `I am a BTech Electrical Engineering graduate (2025) transitioning into software development. I specialize in Python backend development, REST APIs, automation, and basic AI/LLM integrations, and I deploy projects on VPS/Docker. I build reliable backend systems and turn ideas into deployed applications.`;

// Text version of resume for immediate download functionality
const RESUME_TEXT = `
RAIHAN HAZRA
Software Developer
Location: Kolkata, India
Email: raihanhazra3@gmail.com
LinkedIn: linkedin.com/in/raihanhazra786
GitHub: github.com/rai8053

SUMMARY
I am a motivated Python and Software Developer with a strong grounding in AI/ML, automation, and Web3 development. With hands-on experience in data structures, backend logic, and machine learning workflows, I am dedicated to crafting effective solutions.

SKILLS
- Backend: Python, FastAPI, Flask, Django (Learning), Node.js (Basic)
- Web3: Web3.py, Blockchain Fundamentals, Smart Contract Interaction
- Database: PostgreSQL, SQLite
- AI/ML: Scikit-learn, Pandas, Gemini API Integration
- Tools: Git, Linux, VPS Deployment

EXPERIENCE
AI/ML & Data Science Intern
AI/ML & Data Science Internship
- Worked on ML models, analytics, Python scripting, and technical documentation.

PROJECTS
1. BridgeFlow (Web3 to Web2 Bridge)
   - Tech: Python, FastAPI, WebSockets
   - Connects wallets and Web2 apps with backend-led flow.

2. AnyAnswerKeyMine (Resource Web App)
   - Tech: Python, Backend, Vercel
   - Responsive web app for efficient resource access.

3. BNB Recovery Script
   - Tech: Python, Web3.py
   - Automated ERC-20 transaction signer for BSC blockchain.

4. Breast Cancer Prediction
   - Tech: ML, Scikit-learn
   - Machine learning workflow for medical prediction.

EDUCATION
B.Tech in Electrical Engineering
Aliah University (2021 - 2025)
`;

// Creates a downloadable text file link
export const RESUME_URL = `data:text/plain;charset=utf-8,${encodeURIComponent(RESUME_TEXT.trim())}`;

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'BridgeFlow',
    description: 'A Web3 to Web2 Bridge that connects wallets and Web2 apps with backend-led flow. Features real-time leaderboards, transaction tracking, and secure asset bridging.',
    techStack: ['Python', 'FastAPI', 'WebSockets', 'VPS'],
    imageUrl: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop',
    demoUrl: 'https://bridgeflow-testnet.vercel.app/',
    repoUrl: 'https://github.com/rai8053'
  },
  {
    id: '2',
    title: 'AnyAnswerKeyMine',
    description: 'A responsive web application designed for efficient resource access. Features a clean user interface and optimized backend integration for seamless performance.',
    techStack: ['Python', 'Backend', 'Vercel', 'Web App'],
    imageUrl: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2832&auto=format&fit=crop',
    demoUrl: 'https://anyanswerkeymine.vercel.app/',
    repoUrl: 'https://github.com/rai8053'
  },
  {
    id: '3',
    title: 'BNB Recovery Script',
    description: 'Automated ERC-20 transaction signer for BSC blockchain. A Web3.py based automation script for secure blockchain interactions and fund recovery.',
    techStack: ['Python', 'Web3.py', 'Blockchain', 'Automation'],
    imageUrl: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=2000&auto=format&fit=crop',
    repoUrl: 'https://github.com/rai8053/bnb-recovery'
  },
  {
    id: '4',
    title: 'Breast Cancer Prediction',
    description: 'Machine learning workflow including EDA, preprocessing, and supervised model training. Achieved high accuracy in predicting breast cancer using clinical data.',
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'ML'],
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=2000&auto=format&fit=crop',
    repoUrl: 'https://github.com/rai8053/breast-cancer-prediction'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Python', category: 'Backend', level: 95 },
  { name: 'FastAPI / Flask', category: 'Backend', level: 90 },
  { name: 'PostgreSQL / SQL', category: 'Backend', level: 85 },
  { name: 'Web3 / Blockchain', category: 'Web3', level: 80 },
  { name: 'Linux / VPS', category: 'Tools', level: 85 },
  { name: 'AI Integration', category: 'AI/ML', level: 75 },
  { name: 'JavaScript / React', category: 'Frontend', level: 70 },
  { name: 'Git / GitHub', category: 'Tools', level: 90 },
  { name: 'Solidity (Basic)', category: 'Web3', level: 60 },
];

export const RESUME_SUMMARY = [
  "Raihan Hazra — Python Backend Developer (Kolkata)",
  "Focus: FastAPI, Flask, REST APIs, VPS/Docker deployment",
  "Key projects: BridgeFlow, AnyAnswerKeyMine, BNB Recovery Script",
  "Tools: Git, PostgreSQL, Ubuntu, Web3.py",
  "Seeking: Entry-level backend role or internship at startup"
];

export const EXPERIENCE = [
  {
    role: "AI/ML & Data Science Intern",
    company: "AI/ML & Data Science Internship",
    period: "Internship",
    description: "Focused on AI/ML models, analytics, Python scripting, and technical documentation. Worked on ML models, analytics, Python scripting, and technical documentation."
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech in Electrical Engineering",
    institution: "Aliah University",
    year: "2021 - 2025",
    description: "Transitioned to software development with hands-on Python projects."
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/rai8053",
  linkedin: "https://www.linkedin.com/in/raihanhazra786/",
  kaggle: "https://www.kaggle.com/code/raihanhazra",
  email: "raihanhazra3@gmail.com",
  docker: "https://hub.docker.com/u/raihan444"
};