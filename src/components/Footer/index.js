import React from 'react'
import { shape, string } from 'prop-types'

import { Container, Footer } from './elements'
import Link from '../Link'

const SiteFooter = ({ buildTime, copyright, links, siteUrl }) => {
  const { creativeCommons, gatsby, now, src } = links
  return (
    <Footer>
      <Container left>
        <Link ext href={src.href} text={`Last build: ${buildTime}`} />
        <Link ext href={siteUrl} text={copyright} />
        <Link ext href={creativeCommons.href} text={creativeCommons.text} />
      </Container>
      <Container>
        <Link ext href={gatsby.href} text={gatsby.text} />
        <Link ext href={now.href} text={now.text} />
      </Container>
    </Footer>
  )
}

SiteFooter.propTypes = {
  builtTime: string,
  copyright: string.isRequired,
  links: shape({
    creativeCommons: shape({
      href: string.isRequired,
      text: string.isRequired
    }),
    gatsby: shape({
      href: string.isRequired,
      text: string.isRequired
    }),
    now: shape({
      href: string.isRequired,
      text: string.isRequired
    }),
    src: shape({
      href: string.isRequired
    })
  }),
  siteUrl: string.isRequired
}

export default SiteFooter
