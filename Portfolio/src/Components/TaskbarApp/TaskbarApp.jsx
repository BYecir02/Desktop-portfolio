import StyledTaskbarApp from "./TaskbarApp.style";
import Icon from "../Icon/Icon";

const TaskbarApp = ({ icon, app, label, ...rest }) => {
  return (
    <StyledTaskbarApp
      {...rest} // Passe uniquement les propriétés restantes
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: "0%" }}
      exit={{ opacity: 0, y: "100%" }}
    >
      <Icon>{icon}</Icon>
      {label && (
        <div
          style={{
            fontSize: "0.8rem",
            marginTop: "5px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          {label}
        </div>
      )}
    </StyledTaskbarApp>
  );
};

export default TaskbarApp;