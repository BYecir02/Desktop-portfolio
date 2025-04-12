import StyledWindow, {
  StyledWindowTitle,
  StyledWindowTitleWrapper,
  StyledWindowContent,
  StyledWindowClose,
} from "./Window.style";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import { useDragControls } from "framer-motion";
import { useState, useEffect } from "react";

const Window = ({
  icon,
  name,
  app,
  content, // Ajout de la prop "content"
  width,
  height,
  zIndex,
  appsManager,
  constraintsRef,
}) => {
  const controls = useDragControls();
  const winPos = appsManager.windowPos;

  const [isFullScreen, setIsFullScreen] = useState(false);
  const [drawContent, setDrawContent] = useState(false);
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Mettre à jour la taille de l'écran lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startDrag = (event) => {
    controls.start(event);
    appsManager.focusApp({ name });
  };

  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  setTimeout(() => {
    if (app || content) {
      setDrawContent(true);
    }
  }, 500);

  const App = app;

  return (
    <StyledWindow
      drag={!isFullScreen}
      style={{
        zIndex,
        width: isFullScreen ? "100vw" : Math.min(width, screenSize.width - 2),
        height: isFullScreen
          ? "100vh"
          : Math.min(height, screenSize.height - 20),
        top: isFullScreen ? 0 : undefined,
        left: isFullScreen ? 0 : undefined,
        maxWidth: screenSize.width,
        maxHeight: screenSize.height - 50,
        minWidth: 300,
        minHeight: 200,
      }}
      dragControls={controls}
      dragConstraints={constraintsRef}
      dragListener={false}
      dragElastic={0.5}
      dragMomentum={false}
      transition={{ type: "spring", mass: 0.6, stiffness: 200, damping: 20 }}
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        ...winPos,
      }}
      exit={{ opacity: 0, scale: 0.95 }}
      isfocused={`${appsManager.focusedApp.name === name}`}
    >
      <StyledWindowTitleWrapper onPointerDown={startDrag}>
        <StyledWindowTitle>
          <Icon>{icon}</Icon>
          <Text>{name}</Text>
        </StyledWindowTitle>
        <div style={{ display: "flex", gap: "15px" }}>
          <StyledWindowClose onClick={toggleFullScreen}>
            <Icon>{isFullScreen ? "\uE923" : "\uE739"}</Icon>
          </StyledWindowClose>
          <StyledWindowClose onClick={() => appsManager.closeApp({ name })}>
            <Icon>&#xE106;</Icon>
          </StyledWindowClose>
        </div>
      </StyledWindowTitleWrapper>
      <StyledWindowContent>
        {drawContent ? (
          app ? (
            <App />
          ) : (
            content && (
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <iframe
                  src="./CV.pdf"
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    objectFit: "contain", // S'assure que le contenu s'adapte à la fenêtre
                  }}
                  title="CV"
                />
              </div>
            )
          )
        ) : (
          <Icon>{icon}</Icon>
        )}
      </StyledWindowContent>
    </StyledWindow>
  );
};

export default Window;