import styled from "@emotion/styled";

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const IconLabel = styled.span`
  margin-top: 5px;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.text};
`;

const DesktopIcon = ({ icon, label, onClick }) => {
  return (
    <IconWrapper onClick={onClick}>
      {icon}
      <IconLabel>{label}</IconLabel>
    </IconWrapper>
  );
};

export default DesktopIcon;