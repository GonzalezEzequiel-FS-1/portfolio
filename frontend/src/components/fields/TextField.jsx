import React from 'react'
import PropTypes from "prop-types"
import { TextInput } from '@mantine/core'
const TextField = ({label, description, placeholder, onChange, value, icon, error, asterisk, disabled, ariaLabel}) => {
  return (
    <>
     <TextInput
      label={label}
      description={description}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      icon={icon}
      error={error}
      asterisk={asterisk}
      disabled={disabled}
      aria-label={ariaLabel}
     />
    </>
  )
}

export default TextField
