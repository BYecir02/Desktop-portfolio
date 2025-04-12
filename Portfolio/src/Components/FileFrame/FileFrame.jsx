import React, { useState } from "react"; // Ajout de useState
import styled from "@emotion/styled";
import { motion } from "framer-motion"; // Import de framer-motion
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { FaDownload, FaExpand, FaCompress } from "react-icons/fa"; // Import des icônes pour plein écran

const FileFrameWrapper = styled(motion.div)`
  position: absolute;
  background-color: ${({ theme }) => theme.appContent}; /* Utilisation du thème */
  border: 1px solid ${({ theme }) => theme.border}; /* Bordure basée sur le thème */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  padding: 16px;
  z-index: 10;
`;

const FileFrameHeader = styled.div`
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: grab; /* Indique que l'en-tête est déplaçable */
`;

const FileFrameContent = styled.div`
  overflow-y: auto;
  width: 100%;
  height: calc(100% - 40px); /* Ajuste la hauteur pour exclure l'en-tête */
`;

const FileFrame = ({ title, filePath, onClose }) => {
  const [isFullScreen, setIsFullScreen] = useState(false); // État pour le mode plein écran

  return (
    <FileFrameWrapper
      drag
      dragConstraints={{ top: 0, left: 0, right: window.innerWidth - 600, bottom: window.innerHeight - 400 }}
      dragElastic={0.2}
      dragMomentum={false}
      style={{
        width: isFullScreen ? "100vw" : "600px", // Largeur en plein écran ou normale
        height: isFullScreen ? "100vh" : "400px", // Hauteur en plein écran ou normale
        top: isFullScreen ? 0 : "20%",
        left: isFullScreen ? 0 : "20%",
        transform: isFullScreen ? "none" : "translate(0, 0)",
      }}
    >
      <FileFrameHeader>
        <span>{title}</span>
        <div>
          {/* Bouton de téléchargement */}
          <a
            href={filePath}
            download
            style={{
              marginRight: "10px",
              textDecoration: "none",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
            }}
            title="Télécharger le fichier"
          >
            <FaDownload size={18} />
          </a>
          {/* Bouton plein écran */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              marginRight: "10px",
                color: "white",
            }}
            onClick={() => setIsFullScreen(!isFullScreen)} // Basculer entre plein écran et normal
            title={isFullScreen ? "Quitter le plein écran" : "Plein écran"}
          >
            {isFullScreen ? <FaCompress size={18} /> : <FaExpand size={18} />}
          </button>
          {/* Bouton de fermeture */}
          <button
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
                color: "white",
            }}
            onClick={onClose}
          >
            ✖
          </button>
        </div>
      </FileFrameHeader>
      <FileFrameContent>
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl={filePath}
            defaultScale="page-width" // Ajuste le PDF pour qu'il s'adapte à la largeur du FileFrame
          />
        </Worker>
      </FileFrameContent>
    </FileFrameWrapper>
  );
};

export default FileFrame;