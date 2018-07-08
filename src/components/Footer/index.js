import React from 'react'

import { Link } from '../commons'
import { Footer, FooterItem, FooterList } from './elements'

const AppFooter = ({ buildTime, copyright, links, siteUrl }) => {
  const { creativeCommons, gatsby, now, src, styled } = links
  return (
    <Footer>
      <FooterList>
        <FooterItem>
          <Link ext href={src.href} text={`Last Built: ${buildTime}`} />
        </FooterItem>
        <FooterItem>
          <Link ext href={siteUrl} text={copyright} />
        </FooterItem>
        <FooterItem>
          <Link ext href={creativeCommons.href} text={creativeCommons.text} />
        </FooterItem>
      </FooterList>
      <FooterList>
        <FooterItem>
          <Link ext href={gatsby.href} text={gatsby.text} />
        </FooterItem>
        <FooterItem>
          <Link ext href={styled.href} text={styled.text} />
        </FooterItem>
        <FooterItem>
          <Link ext href={now.href} text={now.text} />
        </FooterItem>
      </FooterList>
    </Footer>
  )
}

export default AppFooter
