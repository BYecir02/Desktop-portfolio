import StyledTaskbarMenu, {
  StyledTaskbarSection,
  StyledSectionTitle,
} from "./TaskbarMenu.style";
import TaskbarApp from "../TaskbarApp/TaskbarApp";

const TaskbarMenu = ({ isOpen, setIsOpen, appsManager, ...rest }) => {
  const openApp = (app) => {
    appsManager.openApp(app);
    setIsOpen(false);
  };

  return (
    <StyledTaskbarMenu
      initial={{ opacity: 0, y: "200px", x: "-50%" }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0px" : "200px" }}
      transition={{
        type: "spring",
        mass: 0.3,
        stiffness: 300,
        damping: 20,
      }}
      {...rest}
    >
      {/* Applications utilisateur */}
      <div>
        <StyledSectionTitle>Applications</StyledSectionTitle>
        <StyledTaskbarSection>
          {appsManager.installedApps.map((app, index) => (
            <TaskbarApp
              key={index}
              icon={app.icon}
              app={app}
              onClick={() => openApp(app)}
              label={app.name}
            />
          ))}
        </StyledTaskbarSection>
      </div>

      {/* Applications système */}
      <div>
        <StyledSectionTitle>Système</StyledSectionTitle>
        <StyledTaskbarSection>
          {appsManager.systemApps.map((app, index) => (
            <TaskbarApp
              key={index}
              icon={app.icon}
              app={app}
              onClick={() => openApp(app)}
              label={app.name}
            />
          ))}
        </StyledTaskbarSection>
      </div>
    </StyledTaskbarMenu>
  );
};

export default TaskbarMenu;