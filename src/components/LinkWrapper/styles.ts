import styled from 'styled-components';

export const Container = styled.a`
  position: fixed;
  z-index: 1100; // bigger tha leaflet
  top: var(--medium);
  right: var(--medium);
  color: var(--white);
  cursor: pointer;

  svg {
    width: 3.2rem;
    height: 3.2rem;
    transition: color 0.3s ease-in-out;
  }

  &:hover svg {
    color: var(--highlight);
  }
`;
