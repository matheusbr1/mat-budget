import styled from 'styled-components'

export const Container = styled.div`
  background: var(--background);
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 5%;

  div.title {
    margin-left: 5px;

    h1 {
      font-weight: 600;
      font-size: 3rem;
      color: var(--title);
    }

    span {
      font-size: 1.6rem;
      color: var(--description);
    }
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;

  div.componentTest {
    width: 195px;
    text-align: center;
  }
`