import styled, { css } from 'styled-components'

interface SelectProps {
  isOpen: boolean
}

export const Container = styled.div<SelectProps>`
  position: relative;
  
  grid-area: select;

  padding: 20px 0;
  margin: 10px 0; 
  
  width: 100%;

  font-size: 1.6rem;
  color: #96999C;
  background: var(--white);
  z-index: 10;
  cursor: pointer;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.2));

  ${props => props.isOpen  ? css`
    border-radius: 20px 20px 0 0 ;
  ` : css`
    border-radius: 20px;
  `}

  span {
    padding: 10px 30px;
  }

  img {
    position: absolute;
    right: 20px
  }
`

export const Options = styled.div`
  position: absolute;
  top: 45px;
  background: var(--white);
  width: 100%;
  border-radius: 0 0 20px 20px;
  padding-bottom: 10px;
`

export const Option = styled.div`
  padding: 10px 30px;
  transition: 0.2s;

  &:hover {
    background: #F4F6F6;
  }
  
  &:last-child:hover {
    background: #F4F6F6;
    border-radius: 0 0 20px 20px;
  }
`
