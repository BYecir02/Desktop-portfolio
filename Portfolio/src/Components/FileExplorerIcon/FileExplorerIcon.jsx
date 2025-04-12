import styled from "@emotion/styled";
import { FaFolder } from "react-icons/fa";

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconLabel = styled.span`
  margin-top: 5px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
`;

const FileExplorerIcon = ({ onOpen }) => {
  return (
    <IconWrapper onClick={onOpen}>
      <FaFolder size={48} />
      <IconLabel>File Explorer</IconLabel>
    </IconWrapper>
  );
};

export default FileExplorerIcon;