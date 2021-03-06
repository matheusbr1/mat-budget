import styled, { css } from 'styled-components'

interface CardProps {
  type:  'balance' | 'income' | 'expense'
}

export const Container = styled.div<CardProps>`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 350px;
  height: 125px;

  border-radius: 20px;
  background: var(--white);

  padding: 10px;
  margin: 10px;
  
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));

  div {
    width: 70px;
    height: 70px;

    display:  flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;

    background: rgba(255, 198, 104, 0.21);
    background: 'rgba(255, 76, 97, 0.2)';
    background: 'rgba(51, 214, 159, 0.2)';

    ${props => props.type === 'balance' && css`
      background: 'rgba(255, 198, 104, 0.21)';
    `}

    ${props => props.type === 'income' && css`
      background: 'rgba(51, 214, 159, 0.2)';
    `}

    ${props => props.type === 'expense' && css`
      background: 'rgba(255, 76, 97, 0.2)';
    `}
  }
`

export const Infos = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 100%;

  h3 {
    font-weight: bold;
    font-size: 2.8rem;
    color: var(--title);
    margin-bottom: 10px;
  }

  span {
    font-size: 1.4rem;
    color: var(--description);
  }
`