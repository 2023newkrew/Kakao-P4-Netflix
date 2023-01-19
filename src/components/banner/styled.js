import styled from 'styled-components';

const StyledDiv = styled.div`
  z-index: 0;
  position: relative;
  width: 100%;
  aspect-ratio: 16/9;
  margin-bottom: -6.25%;
  background: no-repeat url(${({ url }) => url});
  background-size: cover;

  &::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    background: linear-gradient(transparent, black);
  }
`;

const StyledSection = styled.section`
  width: 40%;
  position: absolute;
  bottom: 25%;
  left: var(--lr-padding);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

const StyledDescription = styled.div``;
const StyledTitle = styled.h2``;

const StyledButtonContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
`;

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 70%;
  font-weight: 500;
  border: none;
  border-radius: 4%;
  padding: 2% 4%;
`;

const StyledInfoButton = styled(StyledButton)`
  background-color: rgba(120, 120, 120, 0.8);
  color: white;
`;

export {
  StyledDiv,
  StyledSection,
  StyledDescription,
  StyledTitle,
  StyledButtonContainer,
  StyledButton,
  StyledInfoButton,
};
