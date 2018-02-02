import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  GooglePlusIcon,
  GooglePlusShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  RedditIcon,
  RedditShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share'
import { string } from 'prop-types'

import List from '../../List'

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
