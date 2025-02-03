import React from "react";
import "./skills.css";
import {
  FaCss3Alt,
  FaDocker,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import {
  SiAmazoncognito,
  SiApachekafka,
  SiFastapi,
  SiGrafana,
  SiJest,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiRedux,
  SiStorybook,
  SiSvelte,
  SiTailwindcss,
  SiVitest,
} from "react-icons/si";
import { CgMicrosoft } from "react-icons/cg";

export const Skills = () => {
  const skills = {
    frontend: [
      { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "Tailwind/Bootstrap", icon: <SiTailwindcss color="#06B6D4" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "React.js", icon: <FaReact color="#61DAFB" /> },
      { name: "Redux Toolkit", icon: <SiRedux color="#764ABC" /> },
      { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
      { name: "Svelte Kit", icon: <SiSvelte color="#FF3E00" /> },
      { name: "MicroFrontend", icon: <FaReact color="#61DAFB" /> },
    ],
    backend: [
      { name: "FastAPI", icon: <SiFastapi color="#009688" /> },
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "Express.js", icon: <FaNodeJs color="#000000" /> },
      { name: "Kafka", icon: <SiApachekafka color="#231F20" /> },
      { name: "Microservices", icon: <FaNodeJs color="#68A063" /> },
    ],
    database: [
      { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
      { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    ],
    unitTesting: [
      { name: "Vitest", icon: <SiVitest color="#6E9F00" /> },
      { name: "React Testing Library", icon: <SiJest color="#C21325" /> },
      { name: "Jest", icon: <SiJest color="#C21325" /> },
      { name: "MSW", icon: <SiVitest color="#6E9F00" /> },
      { name: "Playwright", icon: "" },
    ],
    devops: [
      { name: "Azure App Service", icon: "" },
      {
        name: "Azure API Management",
        icon: "",
      },
      { name: "AWS Cognito", icon: <SiAmazoncognito color="#232F3E" /> },
      {
        name: "Application Insight",
        icon: "",
      },
      { name: "Grafana", icon: <SiGrafana color="#F46800" /> },
      { name: "CI/CD", icon: <FaDocker color="#2496ED" /> },
      { name: "Docker", icon: <FaDocker color="#2496ED" /> },
    ],
    tools: [
      { name: "Eraser.io", icon: <CgMicrosoft color="#0078D4" /> },
      { name: "Storybook", icon: <SiStorybook color="#FF4785" /> },
      { name: "MS Office", icon: <CgMicrosoft color="#0078D4" /> },
    ],
  };

  return (
    <div className="container" id="skils">
      <div className="title-header">
        <h3 className="title">Skills</h3>
        <p className="subtitle">
          Technologies and frameworks I specialize in for building scalable
          applications.
        </p>
      </div>
      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h4 className="category-title">
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h4>
          <div className="row">
            {items.map((skill, index) => (
              <div
                key={index}
                className="col-6 col-md-4 col-lg-3 mb-3 d-flex align-items-center"
              >
                <div className="skill-card box-shadow">
                  <span className="icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
