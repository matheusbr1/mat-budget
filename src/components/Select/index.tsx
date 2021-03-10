import React, { useCallback, useState } from 'react'

import { Container, Options, Option } from './styles'

import caretDown from '../../assets/icons/caretDown.svg'

const Select: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false)

  const [currentOption, setCurrentOption] = useState('Selecione')

  const handleClick = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])
  
  const handleBlur = useCallback(() => {
    setIsOpen(false)
  },[])

  const handleSelect = useCallback((e) => {
    setCurrentOption(e.target.innerText)
  },[])

  return (
    <Container onBlur={handleBlur} onClick={handleClick} isOpen={isOpen} >
      <span>{currentOption}</span>

      <img src={caretDown} alt="Selecione" />

      {
        isOpen && (
          <Options>
            <Option onClick={handleSelect}>Janeiro</Option>
            <Option onClick={handleSelect}>Fevereiro</Option>
            <Option onClick={handleSelect}>Março</Option>
            <Option onClick={handleSelect}>Abril</Option>
            <Option onClick={handleSelect}>Maio</Option>
            <Option onClick={handleSelect}>Junho</Option>
            <Option onClick={handleSelect}>Julho</Option>
            <Option onClick={handleSelect}>Agosto</Option>
            <Option onClick={handleSelect}>Setembro</Option>
            <Option onClick={handleSelect}>Outubro</Option>
            <Option onClick={handleSelect}>Novembro</Option>
            <Option onClick={handleSelect}>Dezembro</Option>
          </Options>
        )
      }
   
    </Container>
  )
}

export default Select