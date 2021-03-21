import React, { useCallback, useState } from 'react'

import { Container } from './styles'

import { monthList } from '../../mocks'

import { Select as MaterialSelect, MenuItem } from '@material-ui/core';

const Select: React.FC = () => {

  const [month, setMonth] = useState('Janeiro')

  const handleSelect = useCallback((e) => {
    setMonth(e.target.value)
  },[])

  return (
    <Container>
      <MaterialSelect
        onFocus={() => console.log('focus')}
        onBlur={() => console.log('blur')}
        variant='outlined'
        onChange={handleSelect}
        value={month}
        style={{ 
          fontSize: '1.6rem',
          color: 'var(--title)',
          borderRadius: 10
        }}
      >
        {monthList.map(month => (
          <MenuItem
           value={month} 
           key={month} 
           style={{ 
             fontSize: '1.6rem',
             color: 'var(--title)'
            }}
           >
             { month }
          </MenuItem>
        ))}
      </MaterialSelect>
    </Container>
  )
}

export default Select