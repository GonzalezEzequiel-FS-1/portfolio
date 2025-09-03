import React from 'react'
import { useDisclosure } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'
import ContactForm from '../forms/ContactForm'
const FormModal = () => {
  const [opened, {open, close}] = useDisclosure(false)
    return (
    <>
      <Modal opened={opened} onClose={close} title="Contact Form" centered>
        <ContactForm />
      </Modal>
      <Button  onClick={open}>Contact Me</Button>
    </>
  )
}

export default FormModal
