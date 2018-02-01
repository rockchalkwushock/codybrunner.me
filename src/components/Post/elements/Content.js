import styled from 'styled-components'

/**
 * TODO
 *
 * 1. Target the background-color of .gatsby-highlight and give a higher contrast.
 * 2. Go through old posts and fix broken things.
 * 3. Link colors need to be fixed.
 * 4. Need to set top & bottom margin for pictures (gatsby-config)
 */

const Content = styled.section`
  padding: 2em 0 0 0;

  > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.post.ftFm};
    margin: 0.75em 0;
  }

  > ol,
  p,
  ul {
    color: ${({ theme }) => theme.post.ftClr};
    font-family: ${({ theme }) => theme.post.ftFm};
    font-size: ${({ theme }) => theme.post.ftSz};
    font-weight: ${({ theme }) => theme.post.ftWt};
    letter-spacing: ${({ theme }) => theme.post.ltSp};
    line-height: ${({ theme }) => theme.post.lnHt};
    padding: 0.5em 0;
  }

  > ol,
  ul {
    margin-left: 1.5em;
  }

  > ol li,
  ul li {
    margin: 0.25em 0;
  }

  > p a {
    color: red;
    transition: all 0.2s ease-in-out;
    :visited {
      color: red;
    }
    :hover {
      color: green;
    }
  }

  > blockquote {
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 10px solid #7a9eb1;
    border-radius: 20px 0px;
    border-right: 10px solid #7a9eb1;
    margin: 0.5em 0;
    padding: 0.25em 0.75em;
  }

  > blockquote p {
    color: rgba(0, 0, 0, 0.8);
    font-style: italic;
    font-size: 1.1rem;
  }

  > ul li p {
    padding: 0;
  }

  > ul .task-list-item p {
    color: blue;
  }

  > blockquote:last-child {
    background-color: #000;
  }

  > blockquote p:last-child {
    text-align: center;
  }

  > p:last-child {
    text-align: center;
  }
`

Content.displayName = 'Content'

export default Content
