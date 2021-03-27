import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  position: relative;
  overflow: hidden;

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

  .close {
    position: absolute;
    top: 20px;
    right: 20px;

    img {
      width: 20px;
      transition: 0.2s;
    }

    &:hover {
      img {
        transform: rotate(180deg)
      }
    }
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
        transform: translateY(50px)
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

  height: 600px;
  width: 400px;

  background: var(--white);
  border-radius: 35px;

  box-shadow: -17px 8px 100px rgba(0, 0, 0, 0.05);

  form {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 3.2rem;
    color: var(--title);
    font-weight: normal;
    margin-bottom: 20px;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h1 {
    font-size: 1.8rem;
    margin: 10px 0;
    font-weight: 500;
  }

  img {
    height: 75px;
    border-radius: 50%;
  }
`

export const AvatarInput = styled.div`
  position: relative;
  align-self: center;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  label {
    position: absolute;
    width: 35px;
    height: 35px;
    background: var(--light-purple);
    border-radius: 50%;
    right: 0;
    bottom: 0;
    transition: background-color 0.2s;
    cursor: pointer;

    input {
      display: none;
    }

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 18px;
      height: 18px;
      color: var(--white);
    }

    &:hover {
      background: ${shade(0.2, '#9C69E2')}
    }
  }
`