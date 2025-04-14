import styled from "@emotion/styled";
import { motion } from "framer-motion";

const StyledTaskbarApp = styled(motion.div)`
  display: flex;
  flex-direction: column; /* Permet d'empiler l'icône et le label */
  align-items: center;
  justify-content: center;
  padding: 8px; /* Réduction du padding global */
  border-radius: 8px;
  user-select: none;
  transition: background-color 200ms;
  background-color: ${({ theme: { taskbarAppActive }, isfocused }) =>
    isfocused === "true" ? taskbarAppActive : "transparent"};
  &:hover {
    background-color: ${({ theme: { taskbarApp } }) => taskbarApp};
  }
  &:active {
    background-color: ${({ theme: { taskbarAppActive } }) => taskbarAppActive};
  }
`;

export default StyledTaskbarApp;