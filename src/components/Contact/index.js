/* eslint-disable no-nested-ternary */
import React, { Component } from 'react'
import axios from 'axios'

import { Heading, Loading, Section } from '../commons'
import {
  Button,
  Form,
  FormItem,
  Input,
  Label,
  Message,
  Oops,
  TextArea
} from './elements'
import validate from '../../utils/validate'

class Contact extends Component {
  state = {
    error: false,
    errors: {
      company: '',
      email: '',
      message: '',
      name: '',
      phone: ''
    },
    loading: false,
    message: '',
    values: {
      company: '',
      email: '',
      message: '',
      name: '',
      phone: ''
    }
  }
  handleOnChange = e => {
    const name = e.target.name
    const query = e.target.value
    this.setState({
      values: {
        ...this.state.values,
        [name]: query
      }
    })
  }
  handleOnSubmit = async e => {
    // 1. Validate Form
    if (!this.validateForm(this.state)) {
      e.preventDefault()
      return
    }

    // 2. Prevent form reset & set loading state.
    e.preventDefault()
    this.setState(state => ({ ...state, loading: true }))

    try {
      // 3. Make Request
      const { data } = await axios.post(
        'https://codybrunner-api.now.sh/form',
        this.state
      )
      // 4. Error State
      if (!data.message) {
        this.setState(state => ({
          ...state,
          error: true,
          loading: false,
          message: 'Yikes something went wrong, try back later.',
          values: {
            company: '',
            email: '',
            message: '',
            name: '',
            phone: ''
          }
        }))
      }
      // 5. Success State
      this.setState(state => ({
        ...state,
        loading: false,
        message: data.message,
        values: {
          company: '',
          email: '',
          message: '',
          name: '',
          phone: ''
        }
      }))
    } catch (error) {
      throw error
    }
  }
  validateForm = ({ values }) => {
    const errors = validate(values)
    const isValid = !Object.keys(errors).some(key => errors[key])
    if (!isValid) {
      this.setState(state => ({
        ...state,
        errors: {
          company: errors.company ? errors.company : '',
          email: errors.email ? errors.email : '',
          message: errors.message ? errors.message : '',
          name: errors.name ? errors.name : '',
          phone: errors.phone ? errors.phone : ''
        }
      }))
      return isValid
    }
    return isValid
  }
  render() {
    return (
      <Section id="contact">
        <Heading alt size="2rem">
          Contact Me
        </Heading>
        {this.state.loading ? (
          <Loading />
        ) : this.state.message ? (
          <Message>{this.state.message}</Message>
        ) : (
          <Form onSubmit={this.handleOnSubmit}>
            <FormItem>
              <Label> First Name </Label>
              {this.state.errors.name ? (
                <Oops>{this.state.errors.name}</Oops>
              ) : null}
              <Input
                name="name"
                onChange={this.handleOnChange}
                type="text"
                value={this.state.values.name}
              />
            </FormItem>
            <FormItem>
              <Label> Company </Label>
              {this.state.errors.company ? (
                <Oops>{this.state.errors.company}</Oops>
              ) : null}
              <Input
                name="company"
                onChange={this.handleOnChange}
                type="text"
                value={this.state.values.company}
              />
            </FormItem>
            <FormItem>
              <Label> Email </Label>
              {this.state.errors.email ? (
                <Oops>{this.state.errors.email}</Oops>
              ) : null}
              <Input
                name="email"
                onChange={this.handleOnChange}
                type="email"
                value={this.state.values.email}
              />
            </FormItem>
            <FormItem>
              <Label> Phone (no dashes) </Label>
              {this.state.errors.phone ? (
                <Oops>{this.state.errors.phone}</Oops>
              ) : null}
              <Input
                name="phone"
                onChange={this.handleOnChange}
                type="tel"
                value={this.state.values.phone}
              />
            </FormItem>
            <FormItem full>
              <Label> Message </Label>
              {this.state.errors.message ? (
                <Oops>{this.state.errors.message}</Oops>
              ) : null}
              <TextArea
                name="message"
                onChange={this.handleOnChange}
                value={this.state.values.message}
              />
            </FormItem>
            <FormItem full>
              <Button onClick={this.handleOnSubmit} type="submit">
                Submit
              </Button>
            </FormItem>
          </Form>
        )}
      </Section>
    )
  }
}

export default Contact
