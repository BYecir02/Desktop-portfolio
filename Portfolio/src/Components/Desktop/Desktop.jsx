import StyledDesktop from "./Desktop.style";
import Taskbar from "../Taskbar/Taskbar";
import Window from "../Window/Window";
import { useApps } from "../../Hooks/useApps";
import { useRef } from "react"; // Suppression de useState, car FileFrame n'est plus utilisé
import { AnimatePresence } from "framer-motion";
import DesktopIcon from "../DesktopIcon/DesktopIcon";
import { FaFolder, FaTools, FaEnvelope, FaFileAlt } from "react-icons/fa"; // Ajout de FaFileAlt

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
          zIndex: 0, // Envoyer en arrière-plan
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond noir semi-transparent
          padding: "20px", // Ajout d'un padding pour espacer le contenu
          borderRadius: "10px", // Bordures arrondies pour un effet plus esthétique
        }}
      >
        <h1 style={{ fontSize: "4rem", fontWeight: "bold", margin: 0 }}>
          BADIROU Mohamed Yecir
        </h1>
        <h2 style={{ fontSize: "2rem", fontWeight: "normal", margin: 0 }}>
          Développeur Fullstack | Alternance
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
            icon={<FaFolder size={42} />}
            label="File Explorer"
            onClick={() =>
              appsManager.openApp(
                appsManager.installedApps.find(
                  (app) => app.name === "File Explorer"
                )
              )
            }
          />
        </div>
        <div
          style={{
            pointerEvents: "auto",
          }}
        >
          <DesktopIcon
            icon={<FaTools size={42} />}
            label="Outils"
            onClick={() =>
              appsManager.openApp(
                appsManager.installedApps.find(
                  (app) => app.name === "Calculator"
                )
              )
            }
          />
        </div>
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
        </div>
        <div
          style={{
            pointerEvents: "auto",
          }}
        >
          <DesktopIcon
            icon={<FaFileAlt size={42} />}
            label="CV"
            onClick={() =>
              appsManager.openApp(
                appsManager.installedApps.find((app) => app.name === "CV")
              )
            }
          />
        </div>
      </div>

      {/* Contenu interactif */}
      <AnimatePresence>
        {appsManager.openWindows.map((app) => {
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