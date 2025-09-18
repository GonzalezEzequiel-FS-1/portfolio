import { useForm } from "@mantine/form";
import TextField from "../components/fields/TextField.jsx";
import MultiLineTextInput from "../components/fields/MultiLineTextInput.jsx.jsx";
import { Button, Alert, Container, Text, Flex, TextInput } from "@mantine/core";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../components/footer/Footer.jsx";
import PhoneNumberInput from "../components/fields/PhoneNumberInput.jsx";
import { formatPhoneNumber } from "../utils/formatPhoneNumber.js";
const ContactMe = () => {
  const [newAlert, setNewAlert] = useState("");

  const [phone, setPhone] = useState("");

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhone(formatted);
  };

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
    if (values.length === 0 || !values) {
      return { error: `Values not Received from form` };
    }
    try {
      const sentData = await axios.post("/api/contact", {
        firstName: values.contactName,
        lastName: values.contactLastName,
        email: values.email,
        phone: values.phone,
        message: values.message,
      });
      console.log(`Submited Values: ${JSON.stringify(sentData)}`);

      //form.reset();
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
    <div className="transition-all duration-500 ease-in-out flex flex-col lg:flex-row  items-center justify-center lg:justify-center gap-0 lg:gap-6 h-screen lg:p-2/4">
      <div className="mb-8 lg:mb-0 lg:h-1/3 text-center max-w-2xl">
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
        <Text
          size="lg"
          color="gray.6"
          styles={{
            root: {
              lineHeight: "1.75rem",
              fontWeight: 500,
              maxWidth: "25rem",
              margin: "0 auto",
            },
          }}
        >
          We’d love to hear from you! Whether you have questions, suggestions,
          or just want to say hello, fill out the form and we’ll get back to you
          as quickly as possible. Your message matters, and we’re here to
          listen.
        </Text>
      </div>
      <div className="min-w-2xl">
        {" "}
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
          className="w-full lg:max-w-2xl flex flex-col gap-5 p-6 rounded-2xl border border-stone-600 shadow-lg"
          onSubmit={form.onSubmit(handleFormSubmit)}
        >
          <section className="flex w-full lg:flex-row flex-col items-center justify-between lg:gap-6">
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
              classNames={{
                root: "w-full lg:2/5",
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
              classNames={{
                root: "w-full lg:2/5",
              }}
              {...form.getInputProps("contactLastName")}
            />
          </section>

          <section className="transition-all duration-200 ease-in-out flex w-full items-center lg:flex-row flex-col justify-between lg:gap-6">
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
              classNames={{
                root: "w-full lg:2/5",
              }}
              {...form.getInputProps("email")}
            />

            <PhoneNumberInput
              {...form.getInputProps("phone")}
              onChange={(val) => form.setFieldValue("phone", val)}
            />
          </section>
          <section>
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
          </section>

          <div className="w-full flex justify-center mt-4">
            <Button type="submit" className="w-full sm:w-1/2">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div className="absolute w-screen bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default ContactMe;
