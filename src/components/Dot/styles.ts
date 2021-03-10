import styled from 'styled-components'

interface DotProps {
  color: string
}

export const Container = styled.span<DotProps>`
  background: ${props => props.color};

  width: 8px;
  height: 8px;

  display: block;
  border-radius: 50%;
`