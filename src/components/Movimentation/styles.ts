import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
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

  &:hover {
    background: ${shade(0.2, '#6F52ED')}
  }
`