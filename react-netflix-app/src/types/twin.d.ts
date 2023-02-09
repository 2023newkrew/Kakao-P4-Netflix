import st, { StyledComponent, css, StyledInterface } from '@types/styled-components';

declare module 'twin.macro' {
  const styled: StyledInterface;
  const css: typeof css;
}
