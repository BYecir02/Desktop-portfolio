import StyledDesktop from "./Desktop.style";
import Taskbar from "../Taskbar/Taskbar";
import Window from "../Window/Window";
import { useApps } from "../../Hooks/useApps";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import DesktopIcon from "../DesktopIcon/DesktopIcon";
import { FaFolder, FaUser, FaTools, FaEnvelope, FaFileAlt, FaProjectDiagram } from "react-icons/fa";

const Desktop = () => {
  const appsManager = useApps();
  const constraintsRef = useRef(null);

  return (
    <StyledDesktop
      initial={{ opacity: 0, scale: 0.8, borderRadius: "10px" }}
      animate={{ opacity: 1, scale: 1, borderRadius: "0px" }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", mass: 0.6, stiffness: 200, damping: 20 }}
      ref={constraintsRef}
    >
      {/* Présentation en arrière-plan */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          zIndex: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1
          style={{
            fontSize: window.innerWidth < 768 ? "2.5rem" : "4rem",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          BADIROU Mohamed Yecir
        </h1>
        <h2
          style={{
            fontSize: window.innerWidth < 768 ? "1.5rem" : "2rem",
            fontWeight: "normal",
            margin: 0,
          }}
        >
          Développeur Fullstack
        </h2>
      </div>

      {/* Conteneur des icônes du bureau */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        {/* Icônes du bureau */}
        <div
          style={{
            pointerEvents: "auto",
          }}
        >
          <DesktopIcon
            icon={<FaUser size={42} />}
            label="À propos"
            onClick={() =>
              appsManager.openApp(
                appsManager.systemApps.find((app) => app.name === "About")
              )
            }
          />
          <DesktopIcon
            icon={<FaProjectDiagram size={42} />} // Nouvelle icône pour Projet
            label="Projet"
            onClick={() =>
              appsManager.openApp(
                appsManager.installedApps.find((app) => app.name === "Projet")
              )
            }
          />
          <DesktopIcon
            icon={<FaFolder size={42} />}
            label="File Explorer"
            onClick={() =>
              appsManager.openApp(
                appsManager.systemApps.find((app) => app.name === "File Explorer")
              )
            }
          />
        </div>
        <div
          style={{
            pointerEvents: "auto",
          }}
        ></div>
        <div
          style={{
            pointerEvents: "auto",
          }}
        >
          <DesktopIcon
            icon={<FaEnvelope size={42} />}
            label="Contact"
            onClick={() =>
              appsManager.openApp(
                appsManager.installedApps.find((app) => app.name === "Contact")
              )
            }
          />
          <DesktopIcon
            icon={<FaFileAlt size={42} />}
            label="CV"
            onClick={() =>
              appsManager.openApp(
                appsManager.installedApps.find((app) => app.name === "CV")
              )
            }
          />
          <DesktopIcon
            icon={<FaTools size={42} />} // Icône pour les compétences
            label="Compétences"
            onClick={() =>
              appsManager.openApp(
                appsManager.installedApps.find((app) => app.name === "Compétences")
              )
            }
          />
        </div>
        <div
          style={{
            pointerEvents: "auto",
          }}
        ></div>
      </div>

      {/* Contenu interactif */}
      <AnimatePresence>
        {appsManager.openWindows.map((app) => {
          console.log("Fenêtre ouverte :", app);
          return (
            <Window
              key={app.name}
              {...app}
              appsManager={appsManager}
              constraintsRef={constraintsRef}
            />
          );
        })}
      </AnimatePresence>
      <Taskbar appsManager={appsManager} />
    </StyledDesktop>
  );
};

export default Desktop;