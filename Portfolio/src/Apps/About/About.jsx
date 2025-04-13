import React from "react";
import styled from "@emotion/styled";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.appContent};
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  border-bottom: 2px solid ${({ theme }) => theme.primary};
  padding-bottom: 10px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.background};
  padding: 10px 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: ${({ theme }) => theme.primary};
    color: #fff;

    a {
      color: #fff;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;

  a {
    color: ${({ theme }) => theme.color};
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.color};
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #fff;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Title>À propos de moi</Title>
      <InfoItem>
        👋 Salut, moi c’est Badirou Mohamed Yecir, développeur web & mobile passionné, toujours prêt à relever de nouveaux défis !
        Je suis curieux, autonome, et j’aime transformer des idées en projets concrets, que ce soit en front, en back, ou même un mix des deux.
        Actuellement en recherche d’une alternance dans le domaine du développement, je continue à renforcer mes compétences à travers des projets perso et pro.
        <br />💡 Mon objectif ? Créer des expériences digitales utiles, intuitives et stylées.
      </InfoItem>
      <InfoItem>
        <FaPhone /> +33 07 83 84 27 94
      </InfoItem>
      <InfoItem>
        <FaEnvelope /> <Link href="mailto:Badirouyecir@gmail.com">Badirouyecir@gmail.com</Link>
      </InfoItem>
      <InfoItem>
        <FaMapMarkerAlt /> Lille, France
      </InfoItem>
      <SocialLinks>
        <Link href="https://www.linkedin.com/in/mohamed-yecir-badirou-4b46a2299/" target="_blank">
          <FaLinkedin />
        </Link>
        <Link href="https://github.com/your-profile" target="_blank">
          <FaGithub />
        </Link>
        <Link href="https://instagram.com/your-profile" target="_blank">
          <FaInstagram />
        </Link>
      </SocialLinks>
    </AboutContainer>
  );
};

export default About;