import React, { useCallback, useState } from 'react'

import { Container } from './styles'

import { useTransition } from 'react-spring'

import Toast from './Toast'

export interface ToastMessage {
  id: number
  type?: 'success' | 'error' | 'info'
  title: string
  description?: string
}

const ToastContainer: React.FC = () => {

  const [messages,setMessages] = useState<ToastMessage[]>([
    {
      id: 0,
      type: 'error',
      title: 'Ocorreu um erro inesperado',
      description: 'Erro ao tentar logar, tente novamente'
    },
    {
      id: 1,
      type: 'success',
      title: 'Conta criada',
      description: 'Conta criada com sucesso'
    },
    {
      id: 2,
      type: 'info',
      title: 'Some info title',
      description: 'Some info description'
    }
  ])
  
  const messagesWithTransitions = useTransition(
      messages,
      message => message.id,
      {
        from: { right: '-120%' },
        enter: { right: '0%' },
        leave: { right: '-120%' },
      }
  )

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast key={key} message={item} />
      ))}
    </Container>
  )
}

export default ToastContainer