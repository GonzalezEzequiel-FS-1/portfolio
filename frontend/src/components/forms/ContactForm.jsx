import { useForm } from '@mantine/form'
import TextField from '../fields/TextField'
import { Button, Alert } from '@mantine/core'
import MultiLineTextInput from '../fields/MultiLineTextInput.jsx'
import axios from 'axios'
import { useState } from 'react'

const ContactForm = () => {
    const[newAlert, setNewAlert]=useState('')
    const form = useForm({
        mode:'uncontrolled',
        initialValues:{
            contactName:'',
            contactLastName:'',
            email:'',
            message:''
        },
        validate:{
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            contactName: (value) => (value.trim().length > 0 ? null : 'Name is required'),
        }
    })
    
const handleFormSubmit = async (values) => {
  try {
    const response = await axios.post('http://localhost:3000/api/contact', {
      firstName: values.contactName,
      lastName: values.contactLastName,
      email: values.email,
      message: values.message,
    });

    console.log('Contact saved:', response.data);
    form.reset(); // clears the form
    setNewAlert('Your message has been sent!');
    
  } catch (err) {
    if (err.response) {
      // Request made and server responded
      console.error('Error response:', err.response.data);
      alert(`Error: ${err.response.data.error}`);
    } else if (err.request) {
      // Request made but no response received
      console.error('No response received:', err.request);
      alert('No response from server. Try again later.');
    } else {
      // Something happened in setting up the request
      console.error('Axios error:', err.message);
      alert('Something went wrong. Try again later.');
    }
  }
};

    return (
        <form className="relative flex flex-col gap-5 justify-around h-full w-full" onSubmit={form.onSubmit(handleFormSubmit)}>
            {newAlert && <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-fit text-center"><Alert title='Success' styles={{ root:{display:'flex', justifyContent:'center'}}} color='green'>{newAlert}</Alert></div>}
        <TextField
            label={"First Name:"}
            description={"Please provide us with your first name."}
            placeholder={'Type your name'}
            {...form.getInputProps('contactName')}    
        />
        <TextField
            label={"Last Name:"}
            description={"Please provide us with your last name."}
            placeholder={'Type your name'}
            {...form.getInputProps('contactLastName')}    
        />
        <TextField
            label={"Email:"}
            description={"Please provide us with your email."}
            placeholder={'abc@defg.com'}
            {...form.getInputProps('email')}    
        />
        <MultiLineTextInput
            label={'Message'}
            description={'What would you like to let us know?'}
            minRows={6}
            {...form.getInputProps('message')}
        />
        <Button type='submit'>Submit</Button>
        </form>
    )
}

export default ContactForm
