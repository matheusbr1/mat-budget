import styled from 'styled-components'

export const Container = styled.div`
  width: calc(50% - 5px);
  height: max-content;
  max-width: 95vw;

  border-radius: 20px;
  background: var(--white);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));

  transition: 0.2s;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(156, 105, 226, 0.5));
  }

  @media (max-width: 580px) {
    width: 100%;
  }

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

  div.categoryInfos {
    display: flex;
    flex-direction: column;
    
    padding: 25px;

    @media (max-width: 1100px) {
      padding: 25px 15px;
    }

    div.line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px;

      div {
        display: flex;
        align-items: center;

        p {
          margin-left: 10px;
          font-size: 1.4rem;
          color: var(--description);
        }
      } 

      p {
        color: var(--title);
        font-size: 1.6rem;
        font-weight: 500;

        span {
          margin-left: 5px;
          color: var(--description);
        }
      }
    }
  }
`

export const WidhoutData = styled.div`
  height: 200px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`