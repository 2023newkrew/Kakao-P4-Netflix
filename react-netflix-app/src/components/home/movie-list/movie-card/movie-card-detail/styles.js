import styled from '@emotion/styled';

export const DetailButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const DetailIconButton = styled.img`
  width: 16px;
  height: 15px;
  padding: 8px;
  border-radius: 16px;
  background-color: white;
  cursor: pointer;
`;

export const MovieCardDetailContainer = styled.div`
  position: absolute;
  bottom: -100px;
  width: 100%;
  height: 100px;
  background-color: var(--background-card-color);
  box-shadow: 0 2px 2px 1px rgba(0, 0, 0, 0.2);
  font-size: 0.8rem;
  overflow: hidden;
  white-space: nowrap;
`;

export const GenresContainer = styled.div`
  display: flex;

  span:not(:last-child)::after {
    content: '\\00B7';
  }
`;

export const DetailInfoContainer = styled.div``;

export const TitleContainer = styled.div`
  font-weight: bold;
`;

export const GenreText = styled.span``;

export const MovieCardDetailContent = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
