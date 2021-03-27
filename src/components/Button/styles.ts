import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface ContainerProps {
  variation: 'default' | 'expense' | 'income'
}

const buttonVariations = {
  default: css`
    background: var(--light-purple);
    color: var(--white);

    &:hover {
      background: ${shade(0.2, '#9C69E2')}
    }
  `,
  expense: css`
    background: var(--red);
    color: var(--white);

    &:hover {
      background: ${shade(0.2, '#FF4C61')}
    }
  `,
  income: css`
    background: var(--green);
    color: var(--white);

    &:hover {
      background: ${shade(0.2, '#33D69F')}
    }
  `
}

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  
  ${(props) => buttonVariations[props.variation || 'default']}

  width: 100%;
  height: 50px;

  border-radius: 20px;

  font-weight: bold;
  font-size: 1.6rem;

  transition: background 0.2s;

  margin: 10px 0;

  img {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
`