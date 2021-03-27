import styled, { css } from 'styled-components'

interface CardProps {
  type:  'balance' | 'income' | 'expense'
}

export const Container = styled.div<CardProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 110px;

  border-radius: 20px;
  background: var(--white);

  padding: 10px;
  
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));

  transition: 0.2s;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(156, 105, 226, 0.5));
  }

  div {
    width: 70px;
    height: 70px;

    display:  flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    ${props => props.type === 'balance' && css`
      background: rgba(255, 198, 104, 0.21);
    `}

    ${props => props.type === 'income' && css`
      background: rgba(51, 214, 159, 0.2);
    `}

    ${props => props.type === 'expense' && css`
      background: rgba(255, 76, 97, 0.2);
    `}
  }
`

export const Infos = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  height: 100%;
  width: max-content;

  h3 {
    font-weight: bold;
    font-size: 2.6rem;
    color: var(--title);
    margin-bottom: 10px;
  }

  span {
    font-size: 1.4rem;
    color: var(--description);
  }
`