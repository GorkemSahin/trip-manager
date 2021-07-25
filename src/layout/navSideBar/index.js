import React from 'react'
import { Logo, Plus } from '../../assets/icons'
import { Button } from '../../components/button/Button'
import Menu from '../menu'
import { useHistory } from 'react-router-dom'
import { StyledDiv } from './styled'
import items from '../../constants/menuItems'

const NavSideBar = ({ ...rest }) => {
  const history = useHistory()
  return (
    <StyledDiv {...rest}>
      <Logo />
      <Button
        mode="primary"
        style={{ margin: '2em 0 1em 0', width: '100%' }}
        onClick={() => history.push('/trip/new')}
        icon={<Plus />}
      >
        New Trip
      </Button>
      <Menu items={items} />
    </StyledDiv>
  )
}

export default NavSideBar
