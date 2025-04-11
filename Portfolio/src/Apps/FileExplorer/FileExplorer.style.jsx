// filepath: c:\Users\badir\Desktop\Github\Portfolio\src\Apps\FileExplorer\FileExplorer.style.jsx
import styled from "styled-components";

export const StyledFileExplorer = styled.div`
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 300px;
`;

export const FileList = styled.div`
  margin-top: 16px;
`;

export const FileItem = styled.div`
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: #f9f9f9;
`;

export const FolderItem = styled(FileItem)`
  background-color: #e6f7ff;
  cursor: pointer;

  &:hover {
    background-color: #bae7ff;
  }
`;

export default StyledFileExplorer;