import styled from 'styled-components';

const MovieListItem = styled.li`
  flex-shrink: 0;
  border-radius: var(--border-radius);

  display: flex;
  width: calc(
    (100% - var(--display-gap) * (var(--display-number) - 1)) /
      var(--display-number)
  );
  aspect-ratio: 2/3;
`;

export default MovieListItem;
