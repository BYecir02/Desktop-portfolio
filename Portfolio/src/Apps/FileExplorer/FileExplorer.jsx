import styled from "@emotion/styled";
import { FaFolder, FaTools, FaEnvelope, FaFileAlt, FaPenFancy, FaFlask } from "react-icons/fa"; // Import des icônes

const Navbar = styled.div`
  position: fixed;
  top: 0; /* Positionnement en haut */
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Ombre vers le bas */
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &:active {
    transform: scale(0.95);
  }
`;

const IconLabel = styled.span`
  margin-top: 5px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
`;

const FileExplorer = () => {
  const portfolioItems = [
    { id: 1, name: 'Projets', icon: <FaFolder size={24} /> },
    { id: 2, name: 'Compétences', icon: <FaTools size={24} /> },
    { id: 3, name: 'Contact', icon: <FaEnvelope size={24} /> },
    { id: 4, name: 'CV', icon: <FaFileAlt size={24} /> },
    { id: 5, name: 'Blog', icon: <FaPenFancy size={24} /> },
    { id: 6, name: 'Labs', icon: <FaFlask size={24} /> },
  ];

  return (
    <Navbar>
      {portfolioItems.map((item) => (
        <NavItem key={item.id} onClick={() => console.log('Open:', item.name)}>
          {item.icon}
          <IconLabel>{item.name}</IconLabel>
        </NavItem>
      ))}
    </Navbar>
  );
};

export default FileExplorer;