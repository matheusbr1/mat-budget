import styled from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--white-purple);
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

export const MainCard = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 10px;

  width: 460px;
  height: 630px;

  background: var(--white);
  border-radius: 50px;

  box-shadow: -17px 8px 100px rgba(0, 0, 0, 0.05);

  @media (max-height: 768px) {
    height: 600px;
  }

  > div {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 3.6rem;
    color: var(--title);
    font-weight: normal;
    margin-bottom: 30px;
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

  a.signup {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90px;

    position: absolute;
    bottom: 70px;
    right: 100px;
  }
`