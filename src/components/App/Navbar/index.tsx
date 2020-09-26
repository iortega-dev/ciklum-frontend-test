import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// Logo asset
import logo from '~Assets/images/ll-logo-green.svg'
// Styled components
import { Section, Header, Img } from './styled'

const Navbar = () => {
  const { t } = useTranslation()
  
  return (
    <Section>
      <Header className="container">
        <Link to="/" title={t('Header.LogoTitle')}>
          <Img src={logo} alt="Lottoland"/>
        </Link>
      </Header>
    </Section>
  )
}

export default Navbar
