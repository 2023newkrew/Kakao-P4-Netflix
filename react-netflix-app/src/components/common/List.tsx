
import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import styled from 'styled-components';

const List = forwardRef(function List(
  { children, className, ...rest }: PropsWithChildren & HTMLAttributes<HTMLUListElement>,
  ref: ((instance: HTMLUListElement | null) => void) | React.RefObject<HTMLUListElement> | null | undefined
) {
  return (
    <ListContainer
      className={className}
      ref={ref}
      {...rest}
    >
      {children}
    </ListContainer>
  );
});

const ListCard = ({ children, className, ...rest }: PropsWithChildren & HTMLAttributes<HTMLLIElement>) => {
  return (
    <CardContainer
      className={className}
      {...rest}
    >
      {children}
    </CardContainer>
  );
};

export {
  List,
  ListCard
};

const ListContainer = styled.ul`
  display: flex;
`;

const CardContainer = styled.li`
  border-radius: 8px;
`;