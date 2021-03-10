import styled, { css } from 'styled-components'

interface InputProps {
  isFocused: boolean;
  isFilled: boolean;
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

    color: var(--description);

    ${props => (props.isFilled || props.isFocused) && css`
      border-color: var(--white-purple);
      color: var(--white-purple);
    `}

    &::placeholder {
      color: var(--description);

      ${props => props.isFocused && css`
        color: var(--white-purple);
      `}
    }
  }
`