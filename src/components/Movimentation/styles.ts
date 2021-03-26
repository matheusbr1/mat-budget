import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface ButtonProps {
  active: boolean
}

export const Container = styled.button<ButtonProps>`
  width: 70px;
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--purple);
  border-radius: 50%;

  cursor: pointer;

  position: fixed;
  bottom: 30px;
  right: 30px;

  z-index: 20;

  transition: 0.2s;

  ${props => props.active && css` 
    transform: rotate(45deg);
  `}

  &:hover {
    background: ${shade(0.2, '#6F52ED')};
  }
`