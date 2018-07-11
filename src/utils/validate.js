import isAlpha from 'validator/lib/isAlpha'
import isEmail from 'validator/lib/isEmail'
import isMobilePhone from 'validator/lib/isMobilePhone'
import matches from 'validator/lib/matches'

const REGEX = /^[0-9A-Z.!?,;'\s]+$/i
const REQUIRED = 'Required'
const VALID = 'Not a valid entry'

export default values => {
  const errors = {}
  // Company
  if (!values.company) {
    errors.company = REQUIRED
  }
  // Email
  if (!values.email) {
    errors.email = REQUIRED
  } else if (!isEmail(values.email)) {
    errors.email = VALID
  }
  // Message
  if (!values.message) {
    errors.message = REQUIRED
  } else if (values.message.length < 10) {
    errors.message = VALID
  } else if (values.message.length > 140) {
    errors.message = VALID
  } else if (!matches(values.message, REGEX)) {
    errors.message = VALID
  }
  // Name
  if (!values.name) {
    errors.name = REQUIRED
  } else if (!isAlpha(values.name, 'en-US')) {
    errors.name = VALID
  } else if (values.name.length < 2) {
    errors.name = VALID
  }
  // Phone
  if (!values.phone) {
    errors.phone = REQUIRED
  } else if (!isMobilePhone(values.phone, 'en-US')) {
    errors.phone = VALID
  }

  return errors
}
