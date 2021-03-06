import React from 'react'
import Button from '../../components/Button'
import TextField from '../../components/TextField'

import arrowRight from '../../assets/icons/arrowRight.svg'
import manWalking from '../../assets/images/ilustration.png'

import { Container, MainCard } from './styles'

const SignIn: React.FC = () => {
  return (
    <Container>
      <MainCard>
        <h1>Faça seu Login</h1>

        <div>

          <TextField placeholder="E-mail" />
          
          <TextField placeholder="Senha" />

          <Button label="Entrar" />

          <a href='/forgot'>Esqueci minha senha</a>

        </div>
        
        <a href='/signUp' className='signup'>
          Criar conta
          <img src={arrowRight} alt='Criar conta'/>
        </a>
      
      </MainCard>

      <img src={manWalking} alt='Faça login' className='ilustration'/>
    </Container>
  )
}

export default SignIn