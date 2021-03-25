import styled, { css } from 'styled-components'

interface ContainerProps {
  variation: 'expense' | 'income' | 'default'
}

const selectVariations: any = {
  expense:  css`
    border-color: var(--red);
` ,
  income:  css`
    border-color: var(--green);
` , 
  default: css`
    border-color: var(--white-purple)
  ` 
}

export const Container = styled.div<ContainerProps>`
  grid-area: select;

  border-radius: 20px;
  margin: 10px 0; 
  width: 100%;

  > div {
    width: 100%;
  }

  .Mui-focused {
    color: var(--white-purple);
  }

  .PrivateNotchedOutline-root-1 {
    border-color: var(--field-border);
  }

  .MuiOutlinedInput-input {
    padding: 12px 20px;
  }

  .MuiOutlinedInput-root:hover 
  .MuiOutlinedInput-notchedOutline {
    border-width: 2px;
    transition: border-color 0.2s;
    ${props => selectVariations[props.variation]};
  }

  .MuiOutlinedInput-root.Mui-focused 
  .MuiOutlinedInput-notchedOutline {
    ${props => selectVariations[props.variation]};
  }

  .MuiSvgIcon-root {
    font-size: 2rem;
  }

  .MuiSelect-icon {
    top: unset;
  }
`