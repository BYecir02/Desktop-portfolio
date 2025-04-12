import StyledDesktop from "./Desktop.style";
import Taskbar from "../Taskbar/Taskbar";
import Window from "../Window/Window";
import { useApps } from "../../Hooks/useApps";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";
import DesktopIcon from "../DesktopIcon/DesktopIcon";
import { FaFolder, FaTools, FaEnvelope } from "react-icons/fa";

const Desktop = () => {
  const appsManager = useApps();
  const constraintsRef = useRef(null);
  // Liste des icônes du bureau
  const desktopIcons = [
    {
      id: 1,
      label: "File Explorer",
      icon: <FaFolder size={48} />,
      onClick: () => console.log("File Explorer ouvert !"),
    },
    {
      id: 2,
      label: "Outils",
      icon: <FaTools size={48} />,
      onClick: () => console.log("Outils ouverts !"),
    },
    {
      id: 3,
      label: "Contact",
      icon: <FaEnvelope size={48} />,
      onClick: () => console.log("Contact ouvert !"),
    },
  ];

  return (
    <StyledDesktop
      initial={{ opacity: 0, scale: 0.8, borderRadius: "10px" }}
      animate={{ opacity: 1, scale: 1, borderRadius: "0px" }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ type: "spring", mass: 0.6, stiffness: 200, damping: 20 }}
      ref={constraintsRef}
    >
          {/* Affichage des icônes du bureau */}
          <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
          position: "relative",
          zIndex: 1, // Au-dessus de l'arrière-plan
        }}
      >
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon.icon}
            label={icon.label}
            onClick={icon.onClick}
          />
        ))}
      </div>
      {/* Section de présentation en arrière-plan */}
      <div
        style={{
          position: "absolute", // Position absolue pour ne pas interférer
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent
          zIndex: 0, // Envoyer en arrière-plan
          pointerEvents: "none", // Empêche les interactions
        }}
      >
        <h1 style={{ margin: 0, fontSize: "4rem", fontWeight: "bold" }}>
          BADIROU Mohamed Yecir
        </h1>
        <h2 style={{ margin: 0, fontWeight: "normal", fontSize: "2rem" }}>
          Développeur Fullstack | Alternance
        </h2>
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