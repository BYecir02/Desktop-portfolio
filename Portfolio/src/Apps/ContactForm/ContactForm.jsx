import React, { useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.appContent}; /* Couleur du thème */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color}; /* Couleur du texte selon le thème */
  text-align: center;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.color}; /* Couleur du texte selon le thème */
  text-align: center;
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.border}; /* Bordure selon le thème */
  border-radius: 5px;
  font-size: 1rem;
  background: none; /* Couleur de fond selon le thème */
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.color}; /* Couleur de focus selon le thème */
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.border}; /* Bordure selon le thème */
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  background: none; /* Couleur de fond selon le thème */
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.color}; /* Couleur de focus selon le thème */
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px;
  background-color: ${({ theme }) => theme.taskbarAppActive}; /* Couleur du bouton selon le thème */
  color: ${({ theme }) => theme.color};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.taskbarApp}; /* Couleur au survol */
  }
`;

const ContactForm = () => {
  const theme = useTheme(); // Accéder au thème

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message envoyé !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <StyledForm onSubmit={handleSubmit} theme={theme}>
      <Title theme={theme}>Me contacter !</Title>
      <Subtitle theme={theme}>
        Remplissez le formulaire ci-dessous pour m'envoyer un message.
      </Subtitle>
      <Input
        type="text"
        name="name"
        placeholder="Votre nom"
        value={formData.name}
        onChange={handleChange}
        required
        theme={theme}
      />
      <Input
        type="email"
        name="email"
        placeholder="Votre email"
        value={formData.email}
        onChange={handleChange}
        required
        theme={theme}
      />
      <TextArea
        name="message"
        placeholder="Votre message"
        rows="5"
        value={formData.message}
        onChange={handleChange}
        required
        theme={theme}
      />
      <Button type="submit" theme={theme}>
        Envoyer
      </Button>
    </StyledForm>
  );
};

export default ContactForm;