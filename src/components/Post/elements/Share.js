import React from 'react'
import FacebookIcon from 'react-share/lib/FacebookIcon'
import FacebookShareButton from 'react-share/lib/FacebookShareButton'
import GooglePlusIcon from 'react-share/lib/GooglePlusIcon'
import GooglePlusShareButton from 'react-share/lib/GooglePlusShareButton'
import LinkedinIcon from 'react-share/lib/LinkedinIcon'
import LinkedinShareButton from 'react-share/lib/LinkedinShareButton'
import RedditIcon from 'react-share/lib/RedditIcon'
import RedditShareButton from 'react-share/lib/RedditShareButton'
import TelegramIcon from 'react-share/lib/TelegramIcon'
import TelegramShareButton from 'react-share/lib/TelegramShareButton'
import TwitterIcon from 'react-share/lib/TwitterIcon'
import TwitterShareButton from 'react-share/lib/TwitterShareButton'
import { string } from 'prop-types'

import { List } from '../../commons'

const ShareList = List.extend`
  display: flex;
  grid-auto-flow: unset;
  grid-gap: unset;
  grid-template-columns: unset;
  justify-content: left;
  padding: 1em 0;
  > * {
    padding: 0 0.35em;
  }
`

const Share = ({ title, url }) => (
  <ShareList>
    <FacebookShareButton quote={title} url={url}>
      <FacebookIcon round size={32} />
    </FacebookShareButton>
    <GooglePlusShareButton url={url}>
      <GooglePlusIcon round size={32} />
    </GooglePlusShareButton>
    <LinkedinShareButton title={title} url={url}>
      <LinkedinIcon round size={32} />
    </LinkedinShareButton>
    <RedditShareButton title={title} url={url}>
      <RedditIcon round size={32} />
    </RedditShareButton>
    <TelegramShareButton title={title} url={url}>
      <TelegramIcon round size={32} />
    </TelegramShareButton>
    <TwitterShareButton title={title} url={url}>
      <TwitterIcon round size={32} />
    </TwitterShareButton>
  </ShareList>
)

Share.propTypes = {
  title: string.isRequired,
  url: string.isRequired
}

export default Share
