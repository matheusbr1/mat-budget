import React from 'react'

import { Container } from './styles'

import { Select as MaterialSelect } from '@material-ui/core';

interface SelectProps {
  value: any
  style?: React.CSSProperties
  variation?: 'expense' | 'income'
  onChange(e: React.ChangeEvent<any>):void
}

const Select: React.FC<SelectProps> = ({ value, onChange, variation, style, children }) => {

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
        onFocus={() => console.log('focus')}
        onBlur={() => console.log('blur')}
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

export default Select