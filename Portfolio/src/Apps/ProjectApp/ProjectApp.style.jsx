import styled from "@emotion/styled";

// Composants stylisés
export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  height: 100%;
  font-size: 1rem;
`;

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
`;

export const NavigationIcon = styled.div`
  font-size: 0.7rem;
  cursor: pointer;
  color: ${({ theme }) => theme.color};

  &:hover {
    color: ${({ theme }) => theme.taskbarApp};
  }
`;

export const ProjectTitleInNav = styled.h2`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.color};
  margin: 0;
  flex-grow: 1;
  text-align: center;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`;

export const ProjectCard = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectInfo = styled.div`
  padding: 15px;
`;

export const ProjectName = styled.h3`
  font-size: 1.2rem;
  margin: 0 0 10px;
  color: ${({ theme }) => theme.color};
`;

export const ProjectPeriod = styled.p`
  font-size: 0.9rem;
  margin: 0;
  color: ${({ theme }) => theme.taskbarApp};
`;

export const ProjectDetails = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ProjectDescription = styled.p`
  margin-bottom: 20px;
  line-height: 1.6;
  color: ${({ theme }) => theme.color};
`;

export const GitHubLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 10px;
  color: ${({ theme }) => theme.background};
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;

  &:hover {
    background-color: ${({ theme }) => theme.color};
    color: ${({ theme }) => theme.taskbarApp};
  }
`;

export default ProjectContainer;