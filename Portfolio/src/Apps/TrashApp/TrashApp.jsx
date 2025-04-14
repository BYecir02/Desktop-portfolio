import React from "react";
import styled from "@emotion/styled";

const TrashContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: ${({ theme }) => theme.appContent};
  color: ${({ theme }) => theme.color};
  font-family: "Arial", sans-serif;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TrashIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 20px;
`;

const TrashMessage = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const TrashApp = () => {
  return (
    <TrashContainer>
      <TrashIcon>🗑️</TrashIcon>
      <TrashMessage>Tu voulais jeter ton CV ? 😅</TrashMessage>
    </TrashContainer>
  );
};

export default TrashApp;