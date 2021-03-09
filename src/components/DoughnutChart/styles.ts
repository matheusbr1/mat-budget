import styled from 'styled-components'

interface DotProps {
  color: string;
}

export const Container = styled.div`
  width: calc(50% - 5px);
  height: 572px;

  padding: 10px;
  border-radius: 20px;
  background: var(--white);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));

  div.title {
    padding: 25px;
    border-bottom: 1px solid #EEF0F7;
    font-size: 1.2rem;
  }

  div.categoryInfos {
    display: flex;
    flex-direction: column;
    
    padding: 25px;

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
export const Dot = styled.span<DotProps>`
  background: ${props => props.color};

  width: 8px;
  height: 8px;

  display: block;
  border-radius: 50%;
`