import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledTaskbarMenu = styled(motion.div)`
  position: absolute;
  z-index: 998;
  left: 50%;
  bottom: 60px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  border-radius: 16px;
  background-color: ${({ theme: { taskbarMenu } }) => taskbarMenu};
  backdrop-filter: blur(20px) saturate(180%);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  width: 90%; /* Largeur dynamique */
  max-width: 600px; /* Largeur maximale */
  max-height: 80vh; /* Hauteur maximale pour éviter le débordement */
  overflow-y: auto; /* Ajout d'un défilement vertical si nécessaire */

  @media (max-height: 500px) {
    bottom: 10px; /* Ajuste la position si l'écran est très petit */
  }
`;

export const StyledTaskbarSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 10px;
`;

export const StyledSectionTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 8px;
`;

export const StyledAppIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 0.8rem;
  color: white;

  & > svg {
    font-size: 1.8rem;
    margin-bottom: 3px;
  }
`;

export default StyledTaskbarMenu;