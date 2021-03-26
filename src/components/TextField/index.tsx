import React, { useEffect, useCallback, useRef, useState } from 'react'
import { useField } from '@unform/core'

import { Container } from './styles'

import { currency } from '../../utils/masks'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variation?: 'expense' | 'income'
  mask?: 'currency'
  name: string
  colorOnFill?: boolean
}

const TextField: React.FC<TextFieldProps> = (
  { name, mask, variation, colorOnFill, ...rest }
) => {

  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, registerField, error } = useField(name)

  useEffect(() => {
    registerField({
      name,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [name, registerField, fieldName])

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputBlur = useCallback(() => {
      setIsFocused(false)
      setIsFilled(!!inputRef.current?.value)
  }, [])

  const handleInputFocus = useCallback(() => {
      setIsFocused(true)
  }, [])

  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    switch (mask) {
      case 'currency' : currency(e)
        break
      default: 
        return e
    }
  }, [mask])

  return (
    <Container 
      isFocused={isFocused} 
      isFilled={isFilled && !!colorOnFill} 
      variation={variation || 'default'}
    >
      <input 
        ref={inputRef}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        onKeyUp={handleKeyUp}
        {...rest} 
      />

      {error}

    </Container>
  )
}

export default TextField