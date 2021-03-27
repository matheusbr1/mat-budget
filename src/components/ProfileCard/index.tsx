import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

import { Container } from './styles'

import logout from '../../assets/icons/logout.svg'

const ProfileCard: React.FC = () => {

  const history = useHistory()

  const handleNavigateToProfile = useCallback(() => {
    history.push('/profile')
  }, [history])

  const handleSignOut = useCallback(() => {
    history.push('/')
  }, [history]) 

  return (
    <Container>

      <div>
        <span>Olá</span>
        
        <h1>Matheus Baron</h1>
      </div>
      
      <button type="button" onClick={handleNavigateToProfile} >
        <img 
          src="https://avatars.githubusercontent.com/u/28275815?v=4" 
          alt="Matheus Baron" 
          className="profile" 
        />
      </button>
      
      <button onClick={handleSignOut} >
        <img src={logout} alt="Logout" className="logout"/>
      </button>

    </Container>
  )
}

export default ProfileCard