import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  background: var(--white-purple);

  width: 65%;
  height: 50px;

  color: var(--white);
  border-radius: 50px;

  font-weight: bold;
  font-size: 1.6rem;

  transition: background 0.2s;

  margin: 10px 0;

  &:hover {
    background: ${shade(0.2, '#9C69E2')}
  }
`