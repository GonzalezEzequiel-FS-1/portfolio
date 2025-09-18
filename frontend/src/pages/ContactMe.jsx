import { useForm } from "@mantine/form";
import TextField from "../components/fields/TextField.jsx";
import MultiLineTextInput from "../components/fields/MultiLineTextInput.jsx.jsx";
import { Button, Alert, Container, Text, Flex, TextInput } from "@mantine/core";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "../components/footer/Footer.jsx";
import PhoneNumberInput from "../components/fields/PhoneNumberInput.jsx";
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
    <div className="flex items-center justify-center h-screen px-4">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6  w-7xl">
        <div className="text-center max-w-2xl">
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
            Looking to hire, contract services, or collaborate on a web project?
            I’m ready to help bring your ideas to life. Whether it’s building a
            new website, improving an existing project, or teaming up on a
            creative idea, send me a message and let’s discuss how we can work
            together.
          </Text>
        </div>
        <div className="sm:min-w-2xl">
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
            className="lg:max-w-2xl  flex flex-col gap-5 p-6 rounded-2xl border border-stone-600 shadow-lg"
            onSubmit={form.onSubmit(handleFormSubmit)}
          >
            <section className="flex w-full lg:flex-col items-center justify-between  gap-6">
              <TextField
                label="First Name:"
                description="Please provide your first name."
                placeholder="Type your name"
                {...form.getInputProps("contactName")}
              />

              <TextField
                label="Last Name:"
                description="Please provide your last name."
                placeholder="Type your last name"
                {...form.getInputProps("contactLastName")}
              />
            </section>

            <section className="flex w-full lg:flex-col items-center justify-between  gap-6">
              <TextField
                label="Email:"
                description="Please provide your email."
                placeholder="abc@defg.com"
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

            <div className="flex justify-center mt-4">
              <Button type="submit" className="sm:w-1/2">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="sr-only lg:not-sr-only  lg:absolute lg:w-screen lg:bottom-0">
        <Footer />
      </div>
    </div>
  );
};

export default ContactMe;
