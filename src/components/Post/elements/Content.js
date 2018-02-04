import styled from 'styled-components'

/**
 * TODO
 *
 * 2. Go through old posts and fix broken things.
 */

const Content = styled.section`
  padding-top: 1em;

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

  > blockquote p em a,
  > ol li a,
  > p a,
  > ul li a {
    color: ${({ theme }) => theme.post.linkClr};
    font-weight: ${({ theme }) => theme.post.linkWt};
    text-decoration: underline ${({ theme }) => theme.post.linkClr};
    transition: all 0.2s ease-in-out;
    :visited {
      color: ${({ theme }) => theme.post.linkClr};
    }
    :hover {
      color: ${({ theme }) => theme.post.linkHvClr};
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

  .gatsby-resp-image-link {
    padding: 0.25em 0;
  }

  .gatsby-highlight pre {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

Content.displayName = 'Content'

export default Content
