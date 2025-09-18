import { TextInput } from "@mantine/core";
import React, { useState, useEffect } from "react";
import { formatPhoneNumber } from "../../utils/formatPhoneNumber";

const PhoneNumberInput = ({
  value,
  onChange,
  label = "Phone Number",
  ...props
}) => {
  const [phone, setPhone] = useState(value || "");

  // Keep internal state in sync if form value changes
  useEffect(() => {
    if (value !== phone) setPhone(value || "");
  }, [value]);

  const handleChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
    if (onChange) onChange(formatted); // pass value up to Mantine form
  };

  return (
    <TextInput
      {...props}
      description="Type your Phone Number"
      value={phone}
      onChange={handleChange}
      label={label}
      placeholder="(123) 456-7890"
      styles={{
        root: { width: "100%" },
        label: { fontSize: "1.25rem" },
        input: {
          backgroundColor: "#44444450",
          fontWeight: 800,
          letterSpacing: ".15rem",
        },
      }}
    />
  );
};

export default PhoneNumberInput;
