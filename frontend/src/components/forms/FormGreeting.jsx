import { Text } from '@mantine/core'
import React from 'react'

const FormGreeting = () => {
  return (
        <div className="sr-only md:not-sr-only md:text-center md:max-w-2xl">
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
  )
}

export default FormGreeting
