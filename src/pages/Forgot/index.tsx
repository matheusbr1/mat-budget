import React, { useCallback, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import Button from '../../components/Button'
import TextField from '../../components/TextField'

import arrow from '../../assets/icons/arrow.svg'
import manWalking from '../../assets/images/ilustration.png'

import { Container, MainCard } from './styles'

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const history = useHistory()

  return (
    <Container>
      <MainCard>

        <div className="titleContainer" >
          <h1>Faça seu cadastro</h1>
          <span>
            Informe um e-mail válido para receber instruções para a recuperação de senha
          </span>
        </div>

        <Form ref={formRef} onSubmit={() => {}} >

          <TextField placeholder="E-mail" />

          <Button label="Enviar" />
        </Form>
         
        <Link to='/' className='signin'>
          <img src={arrow} alt='Voltar para o login'/>
          Voltar para o login
        </Link>
      
      </MainCard>

      <img src={manWalking} alt='Faça login' className='ilustration'/>
    </Container>
  )
}

export default SignUp