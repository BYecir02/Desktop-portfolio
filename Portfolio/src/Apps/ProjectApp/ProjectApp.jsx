import React, { useState } from "react";
import matchcv from "../../assets/images/matchcv.png";
import Portfolio from "../../assets/images/Portfolio.png";
import { FaArrowLeft, FaGithub } from "react-icons/fa";

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
      name: "Portfolio Desktop",
      description:
        "Un portfolio interactif conçu comme un système d’exploitation desktop, avec fenêtres, barre de tâches et thème sombre. Une manière originale de présenter mes projets et compétences.",
      details: `
    - Tech : React, Emotion, Context API
    - Expérience immersive type OS
    - Responsive + Dark Mode
      `,
      period: "2025",
      type: "Portfolio interactif",
      github: "https://github.com/username/matchcv",
      image: Portfolio,
    },
    {
      id: 2,
      name: "MatchCV",
      description: "Plateforme qui aide à optimiser la recherche d’emploi/alternance en analysant les annonces, comparant le profil utilisateur et générant des CV/lettres sur mesure avec suivi des candidatures.",
      details: `
        Fonctionnalités : analyse d’offres (IA), matching profil/annonce, génération PDF, suivi de candidatures.  
        Stack : React, Django, SQLite, OpenAI, jsPDF.
      `,
      period: "En cours",
      type: "Développement Web",
      github: "https://github.com/username/matchcv",
      image: matchcv,
    },
    {
        id: 3,
        name: "Application de gestion de sortie",
        description:
          "Application web facilitant l'organisation et la gestion des événements en centralisant les inscriptions et les notifications des participants.",
        details: `
          - Technologies : Figma, React JS, Node JS et Express, MySQL
        `,
        period: "Juin 2024",
        type: "Application Web",
        github: "https://github.com/username/projet2",
        image: matchcv,
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
          <FaGithub size={24} style={{ color: "#4078c0" }} /> {/* Icône GitHub avec couleur */}
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