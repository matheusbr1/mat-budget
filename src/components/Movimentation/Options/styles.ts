import styled from 'styled-components'
import { shade } from 'polished'

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  height: 100vh;
  width: 100vw;

  z-index: 20;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  button {
    cursor: pointer;
    position: fixed;
    z-index: 20;
    font-size: 1.5rem;
    font-weight: 600;

    & + button {
      margin-top: 10px;
    }

    padding: 14px;
    border-radius: 10px;
  }

  button.income {
    bottom: 50px;
    right: 110px;
    
    background: var(--green);
    color: var(--white);

    &:hover {
      background: ${shade(0.2, '#33D69F')}
    }
  }

  button.expense {
    bottom: 105px;
    right: 80px;

    background: var(--red);
    color: var(--white);

    &:hover {
      background: ${shade(0.2, '#FF4C61')}
    }
  }
`