import React from 'react'
import { Link } from 'react-router-dom'

import { Container } from './styles'

import logout from '../../assets/icons/logout.svg'

const ProfileCard: React.FC = () => {

  return (
    <Container>

      <div>
        <span>Olá</span>
        
        <h1>Matheus Baron</h1>
      </div>
      
      <img 
        src="https://avatars.githubusercontent.com/u/28275815?v=4" 
        alt="Matheus Baron" 
        className="profile" 
      />
      
      <Link to="/">
        <img src={logout} alt="Logout" className="logout"/>
      </Link>

    </Container>
  )
}

export default ProfileCard