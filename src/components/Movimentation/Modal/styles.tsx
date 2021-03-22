import styled from 'styled-components'

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  height: 100vh;
  width: 100vw;

  z-index: 30;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background: var(--white);
  border-radius: 12px;
  width: 300px;
  height: fit-content;
  position: relative;
  
  padding: 60px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  button.close {
    background: transparent;
    border: none;

    width: fit-content;

    position: absolute;
    top: 20px;
    right: 20px;

    img {
      width: 20px;
    }
  }

  h2 {
    text-align: left;
    margin-left: 5px;
    width: 100%;
    margin-bottom: 10px;
   
    font-style: normal;
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 2.8rem;
    letter-spacing: 0.01em;
  }

  h2.income {
    color: var(--green);
  }

  h2.expense {
    color: var(--red);
  }

  div, button {
    width: 100%;
  }
`