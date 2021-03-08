import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 350px;
  height: 95px;

  background: var(--white);
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));

  padding: 10px;

  div {
    width: max-content;
  }

  h1 {
    font-weight: 500;
    font-size: 1.6rem;
    color: var(--title);
    margin-top: 5px;
  }

  span {
    font-weight: 500;
    font-size: 1.4rem;
    color: var(--description);
  }

  img.profile {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  img.logout {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`