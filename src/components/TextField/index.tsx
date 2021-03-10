import React, { useCallback, useRef, useState } from 'react'

import { Container } from './styles'

type TextFieldProps = React.InputHTMLAttributes<HTMLInputElement>

const TextField: React.FC<TextFieldProps> = ({ ...rest }) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputBlur = useCallback(() => {
      setIsFocused(false)
      setIsFilled(!!inputRef.current?.value)
  }, [])

  const handleInputFocus = useCallback(() => {
      setIsFocused(true)
  }, [])

  return (
    <Container isFocused={isFocused} isFilled={isFilled} >
      <input 
        ref={inputRef}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        {...rest} 
      />
    </Container>
  )
}

export default TextField