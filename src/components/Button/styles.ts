import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  
  background: var(--white-purple);

  width: 70%;
  height: 50px;

  color: var(--white);
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

  &:hover {
    background: ${shade(0.2, '#9C69E2')}
  }
`