import React from "react";
import styled from "@emotion/styled";

const TerminalContainer = styled.div`
  background-color: #1e1e1e;
  color: #00ff00;
  font-family: "Courier New", Courier, monospace;
  padding: 20px;
  border-radius: 10px;
  height: 100%;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  font-size: 0.8rem;
  border: 2px solid #00ff00;
`;

const LogLine = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  border-left: 3px solid #00ff00;
  transition: background-color 0.3s, transform 0.2s;

  &:before {
    content: "$ ";
    color: #00ff00;
    font-weight: bold;
  }

  &:hover {
    background-color: rgba(0, 255, 0, 0.1);
    transform: translateX(5px);
  }
`;

const Highlight = styled.span`
  color: #ffcc00;
  font-weight: bold;
`;

const Institution = styled.span`
  color: #ffffff;
`;

const Period = styled.span`
  color: #00bfff;
`;

const Description = styled.span`
  color: #cccccc;
`;

const EducationApp = () => {
  const education = [
    {
      title: "Cycle Ingénieur",
      institution: "Institut Supérieur de l’Electronique et du Numérique (ISEN)",
      period: "Depuis 2023",
      description: "Lille, France",
    },
    {
      title: "Cycle Préparatoire",
      institution: "Cour Préparatoire Sainte Marie - Stella (CPMS)",
      period: "2021 - 2023",
      description: "Cotonou, Bénin",
    },
    {
      title: "Baccalauréat Scientifique D",
      institution: "Complexe scolaire Le Rocher",
      period: "2021",
      description: "Cotonou, Bénin",
    },
  ];

  return (
    <TerminalContainer>
      {education.map((item, index) => (
        <LogLine key={index}>
          <Highlight>{item.title}</Highlight> -{" "}
          <Institution>{item.institution}</Institution> -{" "}
          <Period>({item.period})</Period> -{" "}
          <Description>{item.description}</Description>
        </LogLine>
      ))}
    </TerminalContainer>
  );
};

export default EducationApp;