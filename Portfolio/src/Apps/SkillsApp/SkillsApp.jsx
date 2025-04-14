import React from "react";
import styled from "@emotion/styled";
import { FaReact, FaHtml5, FaPython, FaDatabase, FaGitAlt, FaMobileAlt, FaRobot } from "react-icons/fa";

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.appContent};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color};
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${({ color }) => color};
  margin-bottom: 10px;
`;

const SkillName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color};
  margin: 0;
  text-align: center;
`;

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