import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  
  max-width: 95vw;

  width: 100%;
  padding: 10px;
  border-radius: 20px;
  background: var(--white);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));

  grid-area: barChart;

  transition: 0.2s;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(156, 105, 226, 0.5));
  }
`