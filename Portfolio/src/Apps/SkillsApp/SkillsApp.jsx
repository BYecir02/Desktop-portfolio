import React from "react";
import { FaReact, FaHtml5, FaPython, FaDatabase, FaGitAlt, FaMobileAlt, FaRobot } from "react-icons/fa";

import { SkillsContainer, Title, SkillsGrid, SkillCard, SkillIcon, SkillName } from "./SkillsApp.style";

const SkillsApp = () => {
  const skills = [
    { name: "JavaScript (React, Node.js)", icon: <FaReact />, color: "#61DBFB" },
    { name: "HTML & CSS (Tailwind, Bootstrap)", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "Python (Django, Flask)", icon: <FaPython />, color: "#3776AB" },
    { name: "Bases de données (MySQL, MongoDB, SQLite)", icon: <FaDatabase />, color: "#4DB33D" },
    { name: "Git & GitHub", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Développement mobile (React Native)", icon: <FaMobileAlt />, color: "#0078D7" },
    { name: "Analyse IA (API OpenAI)", icon: <FaRobot />, color: "#8A2BE2" },
  ];

  return (
    <SkillsContainer>
      <Title>Mes Compétences</Title>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon color={skill.color}>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default SkillsApp;