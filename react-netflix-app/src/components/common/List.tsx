import { COLORS } from '@constants/colors.contant';
import { HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

const List = ({ children, className, ...rest }: PropsWithChildren & HTMLAttributes<HTMLUListElement>) => {
  return (
    <ListContainer
      className={className}
      {...rest}
    >
      {children}
    </ListContainer>
  );
};

List.Card = function ListCard({ children, className, ...rest}: PropsWithChildren & HTMLAttributes<HTMLLIElement>) {
  return (
    <CardContainer
      className={className}
      {...rest}
    >
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