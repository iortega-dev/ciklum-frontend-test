import React from 'react'
import { Link } from 'react-router-dom'
// Logo asset
import logo from '~Assets/images/ll-logo-green.svg'
// Styled components
import { Section, Header, Img } from './styled'

const Navbar = () => {
  return (
    <Section>
      <Header className="container">
        <Link to="/" title="Play Lotto Online and win Millions at Lottoland.com">
          <Img src={logo} alt="Lottoland"/>
        </Link>
      </Header>
    </Section>
  )
}

export default Navbar
