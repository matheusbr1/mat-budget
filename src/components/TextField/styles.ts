import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface InputProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
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
    border-color: var(--light-purple);
    color: var(--light-purple);
  ` 
}

const inputErrored = css`
  border-color: var(--input-error);
  color: var(--input-text);
`

export const Container = styled.div<InputProps>`
  width: 100%;
  position: relative;

  input {
    width: 100%;
    height: 50px;
    
    padding: 12px 50px 12px 20px;

    margin: 10px 0;

    font-size: 1.6rem;
    transition: 0.2s;
    
    border: 2px solid var(--field-border);
    border-radius: 20px;

    color: var(--input-text);

    ${props => (props.isFilled) &&
      inputVariations[props.variation]
    }

    ${props => props.isErrored 
      && inputErrored
    }

    ${props => (props.isFocused) &&
      inputVariations[props.variation]
    }

    &::placeholder {
      ${props => props.isFocused && !props.isErrored && 
        inputVariations[props.variation]
      }
    }

    &:hover {
      ${props => !props.isErrored 
        && inputVariations[props.variation]
      }
    }
  }
`

export const Error = styled(Tooltip)`
  height: 25px;
  z-index: 10;

  position: absolute;
  right: 18px;
  top: 24px;

  .tooltip-content > span {
    background: var(--input-error);

    &::before {
      border-color: var(--input-error) transparent;
    }
  }
`