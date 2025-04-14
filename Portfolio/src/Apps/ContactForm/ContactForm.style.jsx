import styled from "@emotion/styled";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.appContent};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.color};
  text-align: center;
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.color};
  text-align: center;
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  font-size: 1rem;
  background: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.color};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
  background: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${({ theme }) => theme.color};
    outline: none;
  }
`;

export const Button = styled.button`
  padding: 12px;
  background-color: ${({ theme }) => theme.taskbarAppActive};
  color: ${({ theme }) => theme.color};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.taskbarApp};
  }
`;

export const StatusMessage = styled.p`
  color: ${({ theme, isError }) => (isError ? "red" : theme.color)};
  text-align: center;
  font-size: 0.9rem;
`;

