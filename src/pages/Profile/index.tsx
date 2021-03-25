import React, { useCallback, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'

import Button from '../../components/Button'
import TextField from '../../components/TextField'

import closeIcon from '../../assets/icons/close.svg'
import manWalking from '../../assets/images/ilustration.png'

import { Container, MainCard, Header } from './styles'
import { useToast } from '../../hooks/toast'

const Profile: React.FC = () => {

  const formRef = useRef<FormHandles>(null)

  const { addToast } = useToast()

  const history = useHistory()

  const handleChangeProfile = useCallback(() => {
    addToast({
      type: 'success',
      title: 'Perfil Atualizado',
      description: 'Seu perfil foi atualizado com sucesso, as novas informações já foram salvas'
    })


    history.push('/dashboard')
  }, [history, addToast])

  return (
    <Container>
      
      <MainCard>

      <Link to='/dashboard' className="close" >
        <img src={closeIcon} alt="Retornar para o dashboard"/>
      </Link>

        <Form ref={formRef} onSubmit={handleChangeProfile} >

          <Header>

            <img src="https://github.com/matheusbr1.png" alt="Matheus Baron" />
            
            <h1>Matheus Baron Ribeiro</h1>

          </Header>

          <TextField placeholder="Nome" colorOnFill />
          
          <TextField placeholder="E-mail" colorOnFill />
          
          <TextField placeholder="Senha Atual" colorOnFill />
          
          <TextField placeholder="Nova Senha" colorOnFill />
          
          <TextField placeholder="Confirme a nova Senha" colorOnFill />

          <Button label="Salvar" />
        </Form>
      
      </MainCard>

      <img src={manWalking} alt='Faça login' className='ilustration'/>
    </Container>
  )
}

export default Profile