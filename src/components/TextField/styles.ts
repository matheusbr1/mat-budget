import styled, { css } from 'styled-components'

interface InputProps {
  isFocused: boolean
  isFilled: boolean
  variation:  'expense' | 'income' | 'default'
}

const inputVariations: any = {
  expense:  css`
    border-color: var(--red);
    color: var(--red);
` ,
  income:  css`
    border-color: var(--green);
    color: var(--green);
` , 
  default: css`
    border-color: var(--white-purple);
    color: var(--white-purple);
  ` 
}

export const Container = styled.div<InputProps>`
  width: 70%;

  input {
    width: 100%;
    height: 50px;
    
    padding: 12px 20px;
    margin: 10px 0;

    font-size: 1.6rem;
    transition: 0.2s;
    
    border: 2px solid var(--field-border);
    border-radius: 20px;

    color: var(--input-text);

    ${props => (props.isFilled || props.isFocused) &&
      inputVariations[props.variation]
    }

    &::placeholder {
      ${props => props.isFocused && inputVariations[props.variation]}
    }

    &:hover {
      ${props => inputVariations[props.variation]}
    }
  }
`