import styled from 'styled-components'
import { bool, string } from 'prop-types'

const Form = styled.form`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.maxWidth};

  @media (min-width: ${({ theme }) => theme.screen.large}) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const FormItem = styled.div`
  margin: 0;
  @media (min-width: ${({ theme }) => theme.screen.large}) {
    grid-column: ${({ full }) => (full ? '1 / 3' : 'initial')};
  }
`

FormItem.propTypes = {
  full: bool
}

const Label = styled.label`
  color: ${({ theme }) => theme.colors.secondary};
  display: block;
  padding-bottom: 0.5rem;
`

Label.propTypes = {
  'aria-controls': string,
  'aria-label': string
}

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.alt};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.85rem;
  width: 100%;
`

Input.propTypes = {
  'aria-controls': string,
  'aria-label': string
}

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.alt};
  outline: none;
  padding: 0.85rem;
  text-transform: uppercase;
  width: 100%;

  :focus {
    outline: none;
    -webkit-transition: background-color 1s ease-out;
    -moz-transition: background-color 1s ease-out;
    transition: background-color 1s ease-out;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.alt};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.secondary};
    -webkit-transition: background-color 1s ease-out;
    -moz-transition: background-color 1s ease-out;
    transition: background-color 1s ease-out;
  }
`

Button.propTypes = {
  'aria-controls': string,
  'aria-label': string
}

const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.alt};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.85rem;
  width: 100%;
`

TextArea.propTypes = {
  'aria-controls': string,
  'aria-label': string
}

const Message = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`

const Oops = styled.h5`
  color: yellow;
  margin: unset;
  margin-bottom: 0.5rem;
`

export { Button, Form, FormItem, Input, Label, Message, Oops, TextArea }
