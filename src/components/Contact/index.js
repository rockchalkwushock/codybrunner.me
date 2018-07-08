import React, { Component } from 'react'
import axios from 'axios'

import { Heading, Section } from '../commons'
import { Button, Form, FormItem, Input, Label, TextArea } from './elements'

// TODO:
// 1. Nothing is being validated on input or submission.
// 2. UX for validation.
// 3. Display message for successful sent message.
class Contact extends Component {
  state = {
    company: '',
    email: '',
    message: '',
    name: '',
    phone: ''
  }
  handleOnChange = e => {
    const name = e.target.name
    const query = e.target.value
    this.setState(state => ({
      ...state,
      [name]: query
    }))
  }
  handleOnSubmit = async e => {
    e.preventDefault()
    await axios.post('https://codybrunner-api.now.sh/form', this.state)
    this.setState(state => ({
      ...state,
      company: '',
      email: '',
      message: '',
      name: '',
      phone: ''
    }))
  }
  render() {
    return (
      <Section id="contact">
        <Heading alt size="2rem">
          Contact Me
        </Heading>
        <Form onSubmit={this.handleOnSubmit}>
          <FormItem>
            <Label> Name </Label>
            <Input
              name="name"
              onChange={this.handleOnChange}
              type="text"
              value={this.state.name}
            />
          </FormItem>
          <FormItem>
            <Label> Company </Label>
            <Input
              name="company"
              onChange={this.handleOnChange}
              type="text"
              value={this.state.company}
            />
          </FormItem>
          <FormItem>
            <Label> Email </Label>
            <Input
              name="email"
              onChange={this.handleOnChange}
              type="email"
              value={this.state.email}
            />
          </FormItem>
          <FormItem>
            <Label> Phone </Label>
            <Input
              name="phone"
              onChange={this.handleOnChange}
              type="tel"
              value={this.state.phone}
            />
          </FormItem>
          <FormItem full>
            <Label> Message </Label>
            <TextArea
              name="message"
              onChange={this.handleOnChange}
              value={this.state.message}
            />
          </FormItem>
          <FormItem full>
            <Button onClick={this.handleOnSubmit} type="submit">
              Submit
            </Button>
          </FormItem>
        </Form>
      </Section>
    )
  }
}

export default Contact
