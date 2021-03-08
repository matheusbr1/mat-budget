import styled from 'styled-components'

export const Container = styled.div`
  background: var(--background);
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 2%;

  div.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.title {
    grid-area: title;
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
`

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  margin: 20px 0;
  
  @media (max-width: 1180px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media (max-width: 645px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const TopInfosGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 20% 35% 35%;
  grid-template-areas: "title select profile";
  margin: 20px 0;
  gap: 5%;

  @media (max-width: 1180px) {
    grid-template-columns: 150px 1fr 1fr;
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 10px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: "title profile" "select select";
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 150px;
  }
`