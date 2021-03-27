import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--light-purple);
  height: 100vh;

  img.ilustration {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 400px;
    height: 350px
  }

  @media (max-width: 1215px) {
    img.ilustration {
      display: none;  
    }
  }
`

export const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateY(-50px)
    }
    to {
        opacity: 1;
        transform: translateX(0)
    }
`

export const MainCard = styled.main`
  animation: ${appearFromLeft} 1s;

  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 10px;
  padding: 0 45px;
  
  height: 500px;
  width: 380px;

  background: var(--white);
  border-radius: 35px;

  box-shadow: -17px 8px 100px rgba(0, 0, 0, 0.05);

  form {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 3.2rem;
    color: var(--title);
    font-weight: normal;
    margin-bottom: 10px;
  }

  div.titleContainer {
    margin-bottom: 15px;
    
    span {
      font-size: 1.4rem;
      color: var(--description);
    }
  }

  a {
    font-size: 1.4rem;
    color: var(--description);
    text-decoration: none;

    transition: color 0.2s;

    margin-top: 10px;

    &:hover {
      color: ${shade(0.2, '#A6ACBE')}
    }
  }

  a.sign-in {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 125px;

    position: absolute;
    bottom: 50px;
    left: 60px;
    
    img {
      transform: rotate(180deg)
    }
  }
`