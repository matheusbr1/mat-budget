import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  
  max-width: 95vw;

  width: 100%;
  padding: 10px;
  border-radius: 20px;
  background: var(--white);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));

  grid-area: barChart;

  transition: 0.2s;

  div.title {
    padding: 25px;
    border-bottom: 1px solid #EEF0F7;

    h2 {
      font-size: 1.6rem;
    }
  }

  canvas {
    margin-top: 25px;
  }

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(156, 105, 226, 0.5));
  }
`