import { COLORS } from '@constants/colors.contant';
import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const List = ({ children }: PropsWithChildren) => {
  return (
    <ListContainer>
      {children}
    </ListContainer>
  );
};

List.Card = function ListCard({children}: PropsWithChildren) {
  return (
    <CardContainer>
      {children}
    </CardContainer>
  );
};

export default List;

const ListContainer = styled.ul`
  display: flex;
  border-bottom: 8px solid ${COLORS.gray500};
  gap: 8px;
`;

const CardContainer = styled.li`
  border-radius: 8px;
`;