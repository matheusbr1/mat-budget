import styled from 'styled-components'

export const Container = styled.div`
  grid-area: select;

  margin: 10px 0; 
  width: 100%;

  > div {
    width: 98%;
  }

  .Mui-focused {
    color: var(--white-purple);
  }

  .MuiOutlinedInput-root:hover 
  .MuiOutlinedInput-notchedOutline {
    border-color: var(--title);
  }

  .MuiOutlinedInput-root.Mui-focused 
  .MuiOutlinedInput-notchedOutline {
    border-color: var(--white-purple);
  }

  .MuiSvgIcon-root {
    font-size: 2rem;
  }

  .MuiSelect-icon {
    top: unset;
  }
`