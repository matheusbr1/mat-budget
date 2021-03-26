import React, { useEffect, useRef } from 'react'

import { useField } from '@unform/core'

import { Container } from './styles'

import { Select as MaterialSelect } from '@material-ui/core';

interface SelectProps {
  value: any
  name: string
  style?: React.CSSProperties
  variation?: 'expense' | 'income'
  onChange(e: React.ChangeEvent<any>):void
}

const Select: React.FC<SelectProps> = (
  { value, name, onChange, variation, style, children }
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

  const styles = {
    fontSize: '1.6rem',
    borderRadius: 20,
    border: '1px solid var(--field-border)',
    color: 'var(--input-text)',
    ...style
  }

  return (
    <Container variation={variation || 'default'} >
      <MaterialSelect
        inputRef={inputRef}
        variant='outlined'
        onChange={onChange}
        value={value}
        style={styles}
      >
        {children}
      </MaterialSelect>
      {error}
    </Container>
  )
}

export default Select

export const Unregistered: React.FC<Omit<SelectProps, 'name'>> = (
  { value, onChange, variation, style, children }
) => {
  const styles = {
    fontSize: '1.6rem',
    borderRadius: 20,
    border: '1px solid var(--field-border)',
    color: 'var(--input-text)',
    ...style
  }

  return (
    <Container variation={variation || 'default'} >
      <MaterialSelect
        variant='outlined'
        onChange={onChange}
        value={value}
        style={styles}
      >
        {children}
      </MaterialSelect>
    </Container>
  )
}