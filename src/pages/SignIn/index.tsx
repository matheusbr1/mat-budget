import React, { useCallback, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import Button from '../../components/Button'
import TextField from '../../components/TextField'

import arrow from '../../assets/icons/arrow.svg'
import manWalking from '../../assets/images/ilustration.png'

import { Container, MainCard } from './styles'

const SignIn: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const history = useHistory()

  const handleSignIn = useCallback(() => {
    history.push('/dashboard')
  }, [history])

  return (
    <Container>

      <MainCard>
        <h1>Faça seu Login</h1>

        <Form ref={formRef} onSubmit={handleSignIn} >

          <TextField 
            placeholder="E-mail" 
            colorOnFill 
          />
          
          <TextField 
            placeholder="Senha" 
            type='password' 
            colorOnFill 
          />

          <Button label="Entrar" />

          <Link to='/forgot'>Esqueci minha senha</Link>

        </Form>
        
        <Link to='/signUp' className='signup'>
          Criar conta
          <img src={arrow} alt='Criar conta'/>
        </Link>
      
      </MainCard>

      <img src={manWalking} alt='Faça login' className='ilustration'/>
    </Container>
  )
}

export default SignIn