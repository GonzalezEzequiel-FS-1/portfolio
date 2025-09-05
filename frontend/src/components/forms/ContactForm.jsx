import { useForm } from '@mantine/form'
import TextField from '../fields/TextField'
import { Button, Alert, Container, Text } from '@mantine/core'
import MultiLineTextInput from '../fields/MultiLineTextInput.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'

const ContactForm = () => {
  const [newAlert, setNewAlert] = useState('')
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      contactName: '',
      contactLastName: '',
      email: '',
      message: ''
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      contactName: (value) => (value.trim().length > 0 ? null : 'Name is required'),
    }
  })

  const handleFormSubmit = async (values) => {
    try {
      await axios.post('https://www.egwebdev.com/api/contact', {
        firstName: values.contactName,
        lastName: values.contactLastName,
        email: values.email,
        message: values.message,
      })

      form.reset()
      setNewAlert('Your message has been sent!')

    } catch (err) {
      console.error(err)
      alert('Something went wrong. Try again later.')
    }
  }

  // Automatically hide success message after 5 seconds
  useEffect(() => {
    if (newAlert) {
      const timer = setTimeout(() => setNewAlert(''), 5000)
      return () => clearTimeout(timer)
    }
  }, [newAlert])

  return (
    <Container className="w-full max-w-2xl flex flex-col items-center justify-center py-10">
      <Text
        size={48}
        fw={900}
        variant="gradient"
        gradient={{ from: 'violet', to: 'blue', deg: 202 }}
        style={{ paddingBottom: '2rem', lineHeight: 1.1 }}
        align="center"
      >
        Let's get in Touch:
      </Text>

      {newAlert && (
        <Alert color="green" mb="1.5rem" variant="filled" radius="md" style={{ width: '100%' }}>
          {newAlert}
        </Alert>
      )}

      <form className="w-2/4 flex flex-col gap-5 p-6 rounded-2xl border border-stone-600 shadow-lg" onSubmit={form.onSubmit(handleFormSubmit)}>
        <TextField
          label="First Name:"
          description="Please provide your first name."
          placeholder="Type your name"
          styles={{ label: { fontSize: '1.25rem', fontWeight: 800, letterSpacing: '.15rem' }, input: { backgroundColor: '#44444450', fontWeight: 800, letterSpacing: '.15rem' } }}
          {...form.getInputProps('contactName')}
        />

        <TextField
          label="Last Name:"
          description="Please provide your last name."
          placeholder="Type your last name"
          styles={{ label: { fontSize: '1.25rem' }, input: { backgroundColor: '#44444450', fontWeight: 800, letterSpacing: '.15rem' } }}
          {...form.getInputProps('contactLastName')}
        />

        <TextField
          label="Email:"
          description="Please provide your email."
          placeholder="abc@defg.com"
          styles={{ label: { fontSize: '1.25rem' }, input: { backgroundColor: '#44444450', fontWeight: 800, letterSpacing: '.15rem' } }}
          {...form.getInputProps('email')}
        />

        <MultiLineTextInput
          label="Message"
          description="What would you like to let us know?"
          minRows={6}
          styles={{ label: { fontSize: '1.25rem' }, input: { backgroundColor: '#44444450', fontWeight: 800, letterSpacing: '.15rem' } }}
          {...form.getInputProps('message')}
        />

        <div className="w-full flex justify-center mt-4">
          <Button type="submit" styles={{ root: { width: '50%' } }}>Submit</Button>
        </div>
      </form>
    </Container>
  )
}

export default ContactForm
