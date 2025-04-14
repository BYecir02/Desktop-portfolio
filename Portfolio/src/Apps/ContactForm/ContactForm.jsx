import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  StyledForm,
  Title,
  Subtitle,
  Input,
  TextArea,
  Button,
  StatusMessage,
} from "./ContactForm.style";

const ContactForm = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");
    setIsError(false);

    try {
      const response = await fetch("https://formspree.io/f/mdkebboo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Erreur lors de l'envoi.");
        setIsError(true);
      }
    } catch (error) {
      setStatus("Erreur lors de l'envoi.");
      setIsError(true);
    }
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
      {status && (
        <StatusMessage theme={theme} isError={isError}>
          {status}
        </StatusMessage>
      )}
    </StyledForm>
  );
};

export default ContactForm;