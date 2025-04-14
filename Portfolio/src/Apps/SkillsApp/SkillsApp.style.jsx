import styled from "@emotion/styled";

export const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.appContent};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color};
  text-align: center;
`;

export const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

export const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SkillIcon = styled.div`
  font-size: 3rem;
  color: ${({ color }) => color};
  margin-bottom: 10px;
`;

export const SkillName = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color};
  margin: 0;
  text-align: center;
`;