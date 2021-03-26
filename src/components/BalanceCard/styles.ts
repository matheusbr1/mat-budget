import styled from 'styled-components'

export const Container = styled.div`
  height: 200px;
  width: 100%;
  background: var(--white);
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));
  
  grid-area: balanceCard;
  
  transition: 0.2s;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(156, 105, 226, 0.5));
  }

  div.title {
    padding: 25px;
    border-bottom: 1px solid #EEF0F7;

    h2 {
      font-size: 1.6rem;
    }
  }

  div.categorys {
    display: flex;
    flex-direction: column;
    
    padding: 15px 25px;

    @media (max-width: 1100px) {
      padding: 15px;
    }

    div.line {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 6px;

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