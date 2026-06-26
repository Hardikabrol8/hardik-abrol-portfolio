import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiReact,
  SiFastapi,
  SiFlask,
  SiMysql,
  SiPandas,
  SiNumpy,
  SiGit,
  SiGithub,
  SiHuggingface,
  SiPytorch,
  SiScikitlearn,
  SiJupyter,
  SiStreamlit,
  SiLangchain,
} from "react-icons/si";
import { FaAws, FaDatabase, FaBrain } from "react-icons/fa";
import { TbSql } from "react-icons/tb";

export const skillGroups = [
  {
    id: "languages",
    label: "Programming Languages",
    prompt: "$ ls languages/",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "SQL", icon: TbSql },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    prompt: "$ ls frontend/",
    skills: [
      { name: "React", icon: SiReact },
      { name: "HTML5", icon: SiHtml5 },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    prompt: "$ ls backend/",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask },
    ],
  },
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    prompt: "$ ls ai_ml/",
    skills: [
      { name: "Machine Learning", icon: FaBrain },
      { name: "Deep Learning", icon: FaBrain },
      { name: "LangChain", icon: SiLangchain },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "PyTorch", icon: SiPytorch },
      { name: "Scikit-learn", icon: SiScikitlearn },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    prompt: "$ ls databases/",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "PL/SQL", icon: FaDatabase },
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks & Libraries",
    prompt: "$ ls frameworks/",
    skills: [
      { name: "Pandas", icon: SiPandas },
      { name: "NumPy", icon: SiNumpy },
      { name: "Streamlit", icon: SiStreamlit },
    ],
  },
  {
    id: "tools",
    label: "Developer Tools",
    prompt: "$ ls tools/",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Jupyter Notebook", icon: SiJupyter },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    prompt: "$ ls cloud/",
    skills: [{ name: "AWS", icon: FaAws }],
  },
  {
    id: "vcs",
    label: "Version Control",
    prompt: "$ ls vcs/",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
    ],
  },
];
