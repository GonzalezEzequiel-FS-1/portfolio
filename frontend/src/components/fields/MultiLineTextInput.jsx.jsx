import React from 'react'
import { Textarea } from '@mantine/core'
import {PropTypes} from "prop-types"
const MultiLineTextInput = ({styles, label, description, placeholder, minRows, error, asterisk, disabled, value, onChange}) => {
  return (

     <Textarea
     label={label}
     description={description}
     placeholder={placeholder}
     minRows={minRows}
     
     error={error}
     asterisk={asterisk}
     disabled={disabled}
     value={value}
     onChange={onChange}
     styles={styles}
     />
  )
}

export default MultiLineTextInput

MultiLineTextInput.propTypes={
    label: PropTypes.string,
    description: PropTypes.string,
    placeholder: PropTypes.string,
    minRows: PropTypes.number,
    error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    asterisk: PropTypes.bool,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func,
    autoSize: PropTypes.bool
}