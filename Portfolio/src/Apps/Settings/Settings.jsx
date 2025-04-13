import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";
import { themes } from "../../Themes/themes"; // Importation des thèmes

const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.appContent};
  border-radius: 6px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color};
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.primary};
  padding-bottom: 3px;
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  color: ${({ theme }) => theme.color};
`;

const Select = styled.select`
  padding: 3px 6px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 3px;
  background-color: ${({ theme }) => theme.appContent};
  color: ${({ theme }) => theme.color};
  font-size: 0.8rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Settings = ({ setTheme }) => {
  const theme = useTheme();

  const handleThemeChange = (e) => {
    const selectedTheme = e.target.value;
    console.log("Thème sélectionné :", selectedTheme);

    // Vérification si setTheme est défini
    if (typeof setTheme === "function") {
      setTheme(selectedTheme === "light" ? themes.light : themes.dark);
    } else {
      console.error("setTheme n'est pas défini ou n'est pas une fonction !");
    }
  };

  return (
    <SettingsContainer>
      <Title>Paramètres</Title>
      <Option>
        <span>Thème</span>
        <Select onChange={handleThemeChange} defaultValue={theme.name}>
          <option value="light">Clair</option>
          <option value="dark">Sombre</option>
        </Select>
      </Option>
    </SettingsContainer>
  );
};

export default Settings;