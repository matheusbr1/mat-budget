import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  grid-area: profile;

  width: 100%;
  height: 85px;


  background: var(--white);
  border-radius: 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));

  padding: 10px;

  transition: 0.2s;

  &:hover {
    filter: drop-shadow(0px 4px 4px rgba(156, 105, 226, 0.5));
  }

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
  
  @media (max-width: 500px) {
    width: 150px;

    div {
      display: none;
    }
  }
`