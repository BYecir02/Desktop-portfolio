import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import matchcv from "../../assets/images/matchcv.png";
import {
    ProjectContainer,
    NavigationBar,
    NavigationIcon,
    ProjectTitleInNav,
    ProjectGrid,
    ProjectCard,
    ProjectImage,
    ProjectInfo,
    ProjectName,
    ProjectPeriod,
    ProjectDetails,
    ProjectDescription,
    GitHubLink,
  } from "./ProjectApp.style";


// Composant principal
const ProjectApp = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Liste des projets
  const projects = [
    {
      id: 1,
      name: "MatchCV",
      description:
        "MatchCV est une plateforme qui simplifie et optimise la recherche d’emploi ou d’alternance...",
      details: `
        - Frontend : React, Tailwind CSS
        - Backend : Django (Python)
        - Base de données : SQLite
        - Analyse IA : API OpenAI (ChatGPT)
        - Export PDF : jsPDF
      `,
      period: "En cours",
      type: "Développement Web",
      github: "https://github.com/username/matchcv",
      image: matchcv,
    },
    {
      id: 2,
      name: "Projet 2",
      description: "Description du projet 2",
      details: "Détails complets du projet 2...",
      period: "Avril 2023 - Juin 2023",
      type: "Application Mobile",
      github: "https://github.com/username/projet2",
      image: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      name: "Projet 3",
      description: "Description du projet 3",
      details: "Détails complets du projet 3...",
      period: "Juillet 2023 - Septembre 2023",
      type: "Logiciel Desktop",
      github: "https://github.com/username/projet3",
      image: "https://via.placeholder.com/300x200",
    },
  ];

  return (
    <ProjectContainer>
      <NavigationBar>
        {selectedProject && (
          <>
            <NavigationIcon onClick={() => setSelectedProject(null)}>
              <FaArrowLeft />
            </NavigationIcon>
            <ProjectTitleInNav>{selectedProject.name}</ProjectTitleInNav>
          </>
        )}
      </NavigationBar>

      {selectedProject ? (
        <ProjectDetails>
          <ProjectImage src={selectedProject.image} alt={selectedProject.name} />
          <ProjectDescription>{selectedProject.description}</ProjectDescription>
          <div
            dangerouslySetInnerHTML={{
              __html: selectedProject.details.replace(/\n/g, "<br />"),
            }}
          />
          <GitHubLink
            href={selectedProject.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir sur GitHub
          </GitHubLink>
        </ProjectDetails>
      ) : (
        <ProjectGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id} onClick={() => setSelectedProject(project)}>
              <ProjectImage src={project.image} alt={project.name} />
              <ProjectInfo>
                <ProjectName>{project.name}</ProjectName>
                <ProjectPeriod>{project.period}</ProjectPeriod>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      )}
    </ProjectContainer>
  );
};

export default ProjectApp;