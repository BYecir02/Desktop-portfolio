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
        "MatchCV est une plateforme dédiée à l’optimisation de la recherche d’emploi et d’alternance. L’utilisateur y insère des annonces d’emploi, et l'outil analyse ces annonces pour extraire les informations essentielles telles que les compétences requises, le titre du poste, et les autres critères. Ensuite, l’utilisateur peut comparer son profil aux critères de l’annonce et générer un CV et une lettre de motivation personnalisés, exportables en format PDF. L'outil permet aussi de suivre l’évolution des candidatures : l’état des candidatures envoyées, des réponses obtenues, des entretiens programmés, etc.",
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