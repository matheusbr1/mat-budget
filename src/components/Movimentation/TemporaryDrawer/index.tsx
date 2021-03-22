import React from 'react'

import { Container } from './styles'

import { List, ListItem, ListItemText, SwipeableDrawer } from "@material-ui/core";

interface TemporaryDrawerProps {
  isOpen: boolean
  handleToggleDrawer(open:boolean): any
}

const TemporaryDrawer: React.FC<TemporaryDrawerProps> = ({ 
  isOpen,
  handleToggleDrawer
 }) => (
    <Container>
      <SwipeableDrawer
        anchor='bottom'
        open={isOpen}
        onClose={() => handleToggleDrawer(false)}
        onOpen={() => handleToggleDrawer(true)}
      >
        <div
          role="presentation"
          onClick={() => handleToggleDrawer(false)}
          onKeyDown={() => handleToggleDrawer(false)}
        >
          <List>
            {["Nova Receita", "Nova Despesa"].map((text, index) => (
              <ListItem button key={index}>
                <ListItemText primary={text}/>
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
  </Container>
)

export default TemporaryDrawer