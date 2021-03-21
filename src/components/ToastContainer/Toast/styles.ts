import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

interface ContainerProps {
  type?: 'success' | 'error' | 'info';
  hasDescription: number;
}

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `
}

export const Container = styled(animated.div) <ContainerProps>`
  position: relative;
  padding: 16px 30px 16px 16px;
  box-shadow: 2px 2px 8px rgba(0,0,0,0.2);
  border-radius: 10px;
  display: flex;

  & + div {
    margin-top: 8px;
  }

  ${(props) => toastTypeVariations[props.type || 'info']}

  > svg {
    margin: 4px 12px 0 0
  } 

  div {
    strong {
      font-size: 1.4rem;
    }

    p {
        margin-top: 4px;
        font-size: 1.4rem;
        opacity: 0.8;
        line-height: 2rem;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 12px;
    opacity: 0.6;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${props => !props.hasDescription && css`
      align-items: center;
      padding: 20px 50px 20px 16px;

      svg {
          margin-top: 0;
      }
  `}
`