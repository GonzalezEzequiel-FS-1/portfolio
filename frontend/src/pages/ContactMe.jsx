import { useForm } from "@mantine/form";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TextField from "../components/fields/TextField";
import MultiLineTextInput from "../components/fields/MultiLineTextInput.jsx";
import { Button, Alert, Container, Text } from "@mantine/core";
const DBURL = "/api/contact";
const DEVDBURL = "https://localhost:3000/api/contact";
const ContactMe = () => {
  const [newAlert, setNewAlert] = useState("");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      contactName: "",
      contactLastName: "",
      phone: "",
      email: "",
      message: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      contactName: (value) =>
        value.trim().length > 0 ? null : "Name is required",
    },
  });

  const handleFormSubmit = async (values) => {
    try {
      // await axios.post("/api/contact", {
      //   firstName: values.contactName,
      //   lastName: values.contactLastName,
      //   email: values.email,
      //   phone: values.phoneNumber,
      //   message: values.message,
      // });
      // form.reset();
      console.log(values);
      setNewAlert("Your message has been sent!");
    } catch (err) {
      console.error(err);
      setNewAlert("Something went wrong. Try again later.");
    }
  };

  // Hide alert after 5 seconds
  useEffect(() => {
    if (newAlert) {
      const timer = setTimeout(() => setNewAlert(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [newAlert]);

  return (
    <Container size="lg" py={{ base: "3rem", md: "6rem" }} px="1rem">
      <Text
        styles={{
          root: {
            textAlign: "center",
            paddingBottom: "1rem",
          },
        }}
        size={"3rem"}
        fw={900}
        variant="gradient"
        gradient={{ from: "violet", to: "blue", deg: 202 }}
      >
        Let's get in Touch:
      </Text>

      {newAlert && (
        <Alert
          color="green"
          mb="1.5rem"
          variant="filled"
          radius="md"
          style={{ width: "100%" }}
        >
          {newAlert}
        </Alert>
      )}

      <form
        className="w-full max-w-2xl flex flex-col gap-5 p-6 rounded-2xl border border-stone-600 shadow-lg"
        onSubmit={form.onSubmit(handleFormSubmit)}
      >
        <TextField
          label="First Name:"
          description="Please provide your first name."
          placeholder="Type your name"
          styles={{
            label: {
              fontSize: "1.25rem",
              fontWeight: 800,
              letterSpacing: ".15rem",
            },
            input: {
              backgroundColor: "#44444450",
              fontWeight: 800,
              letterSpacing: ".15rem",
            },
          }}
          {...form.getInputProps("contactName")}
        />

        <TextField
          label="Last Name:"
          description="Please provide your last name."
          placeholder="Type your last name"
          styles={{
            label: { fontSize: "1.25rem" },
            input: {
              backgroundColor: "#44444450",
              fontWeight: 800,
              letterSpacing: ".15rem",
            },
          }}
          {...form.getInputProps("contactLastName")}
        />

        <TextField
          label="Email:"
          description="Please provide your email."
          placeholder="abc@defg.com"
          styles={{
            label: { fontSize: "1.25rem" },
            input: {
              backgroundColor: "#44444450",
              fontWeight: 800,
              letterSpacing: ".15rem",
            },
          }}
          {...form.getInputProps("email")}
        />

        <TextField
          label="Phone:"
          description="Please provide your Phone number."
          placeholder="123-456-7890"
          styles={{
            label: { fontSize: "1.25rem" },
            input: {
              backgroundColor: "#44444450",
              fontWeight: 800,
              letterSpacing: ".15rem",
            },
          }}
          {...form.getInputProps("phone")}
        />

        <MultiLineTextInput
          label="Message"
          description="What would you like to let us know?"
          minRows={6}
          styles={{
            label: { fontSize: "1.25rem" },
            input: {
              backgroundColor: "#44444450",
              fontWeight: 800,
              letterSpacing: ".15rem",
            },
          }}
          {...form.getInputProps("message")}
        />

        <div className="w-full flex justify-center mt-4">
          <Button type="submit" className="w-full sm:w-1/2">
            Submittt
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default ContactMe;
