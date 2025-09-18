import React from "react";
import PropTypes from "prop-types";
import { TextInput } from "@mantine/core";
const TextField = (props) => {
  return (
    <>
      <TextInput
        {...props}
        styles={{
          label: { fontSize: "1.25rem" },
          input: {
            backgroundColor: "#44444450",
            fontWeight: 800,
            letterSpacing: ".15rem",
          },
        }}
        classNames={{
          root: "w-full lg:2/5",
        }}
      />
    </>
  );
};

export default TextField;
