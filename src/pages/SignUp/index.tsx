import React, { useCallback, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import Button from '../../components/Button'
import TextField from '../../components/TextField'

import arrow from '../../assets/icons/arrow.svg'
import manWalking from '../../assets/images/ilustration.png'

import { Container, MainCard } from './styles'
import { useToast } from '../../hooks/toast'

const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const { addToast } = useToast()

  const history = useHistory()

  const handleSignUp = useCallback(() => {
    addToast({
      type: 'success',
      title: 'Conta criada',
      description: 'Sua conta foi criada com sucesso e já pode ser utilizada!'
    })

    history.goBack()
  }, [history, addToast])

  return (
    <Container>
      <MainCard>

        <div className="titleContainer" >
          <h1>Faça seu cadastro</h1>
          <span>É gratuíto, rápido e fácil ;)</span>
        </div>

        <Form ref={formRef} onSubmit={handleSignUp} >
          
        <TextField placeholder="Nome" colorOnFill />

          <TextField placeholder="E-mail" colorOnFill />
          
          <TextField placeholder="Senha" colorOnFill />

          <Button label="Cadastrar" />
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