import { useState, useMemo } from "react";
import Clock from "../Apps/Clock/Clock";
import Calculator from "../Apps/Calculator/Calculator";
import FileExplorer from "../Apps/FileExplorer/FileExplorer";
import ContactForm from "../Apps/ContactForm/ContactForm";
import About from "../Apps/About/About";

const apps = [
  {
    name: "About",
    icon: "\uE77B", // Icône Bitmoji ou similaire
    width: 500,
    height: 600,
    app: About, // Composant associé
  },
  {
    name: "Calculator",
    icon: "\uE1D0",
    width: 350,
    height: 500,
    app: Calculator,
  },
  {
    name: "File Explorer",
    icon: "\uE8DA",
    width: 800,
    height: 600,
    app: FileExplorer,
  },
  {
    name: "CV", // Nouvelle application pour le CV
    icon: "\uE8A5", // Icône pour le CV
    width: 800, // Largeur de la fenêtre
    height: 600, // Hauteur de la fenêtre
    content: () => (
      <iframe
        src="./CV.pdf" // Chemin vers le fichier PDF
        style={{
          width: "100%",
          height: "100%",
          border: "none",
        }}
        title="CV"
      />
    ),
  },
  {
    name: "Contact", // Nouvelle application pour le formulaire de contact
    icon: "\uE8C3", // Icône pour le contact
    width: 500,
    height: 500,
    app: ContactForm, // Utilise le composant ContactForm
  },
];

export const useApps = () => {
  const [openApps, setOpenApps] = useState([]);
  const [focusedApp, setFocusedApp] = useState(null);
  const [openWindows, setOpenWindows] = useState([]);
  const [installedApps] = useState(apps);
  const [windowPos, setWindowPos] = useState({});
  const systemApps = useMemo(
    () => [
      {
        name: "Clock",
        icon: "\uE121",
        width: 450,
        height: 250,
        app: Clock,
      },
      {
        name: "Settings",
        icon: "\uE713",
        width: 700,
        height: 500,
      },

    ],
    []
  );

  const openApp = (app) => {
    if (openApps.find((openApp) => openApp.name === app.name)) {
      focusApp(app);
      return;
    }
    setOpenApps((appsList) => {
      return [...appsList, app];
    });
    setOpenWindows((windowsList) => {
      const zIndex = windowsList.length + 1;
      return [...windowsList, { ...app, zIndex }];
    });
    setFocusedApp(app);
  };

  const focusApp = (app) => {
    if (openWindows.length > 1 && focusedApp?.name !== app.name) {
      setFocusedApp(app);
      const newWindows = [...openWindows];
      newWindows.forEach((win) => {
        if (win.name === app.name) {
          win.zIndex = newWindows.length + 1;
        } else if (win.zIndex > 1) {
          win.zIndex -= 1;
        }
      });
    }
  };

  const closeApp = (app) => {
    setOpenApps((appsList) => {
      return appsList.filter((openApp) => openApp.name !== app.name);
    });
    setOpenWindows((windowsList) => {
      const newWindows = windowsList.filter(
        (openWindow) => openWindow.name !== app.name
      );
      if (newWindows.length === 0) {
        return newWindows;
      }
      if (focusedApp?.name === app.name) {
        const newApp = newWindows.find(
          (win) => win.zIndex >= newWindows.length
        );
        setFocusedApp(newApp);
      }
      return newWindows;
    });
  };

  const centerWindows = () => {
    setWindowPos({});
    setTimeout(() => {
      setWindowPos({ x: 0, y: 0 });
    }, 100);
  };

  return {
    focusApp,
    openApps,
    openApp,
    installedApps,
    systemApps,
    openWindows,
    focusedApp,
    closeApp,
    centerWindows,
    windowPos,
  };
};