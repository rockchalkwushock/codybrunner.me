import styled from 'styled-components'

const Form = styled.form`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr;

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

const Label = styled.label`
  color: ${({ theme }) => theme.colors.secondary};
  display: block;
  padding-bottom: 0.5rem;
`

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.alt};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.85rem;
  width: 100%;
`

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
    -webkit-transition: background-color 2s ease-out;
    -moz-transition: background-color 2s ease-out;
    transition: background-color 2s ease-out;
  }

  :hover {
    outline: none;
    -webkit-transition: background-color 2s ease-out;
    -moz-transition: background-color 2s ease-out;
    transition: background-color 2s ease-out;
  }
`

const TextArea = styled.textarea`
  background-color: ${({ theme }) => theme.colors.alt};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.85rem;
  width: 100%;
`

export { Button, Form, FormItem, Input, Label, TextArea }
