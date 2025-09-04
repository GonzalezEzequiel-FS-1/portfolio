import { Text, Container, Stack } from '@mantine/core'
import React from 'react'

const AboutMe = () => {
    return (
        <Container size="lg" py="6rem">
            <Stack spacing="2rem" align="center">
                <Text
                    styles={{
                        root: {
                            padding: '0rem 0rem 1rem 0rem'
                        }
                    }}
                    size="3rem"
                    fw={900}
                    variant="gradient"
                    gradient={{ from: 'violet', to: 'blue', deg: 202 }}
                >
                    About Me:
                </Text>

                <Text size="lg" color="dimmed" align="justify">
                    I’m <strong>Ezequiel Gonzalez</strong>, a versatile and results-driven Web Developer, embedded systems enthusiast, and creative problem solver. I specialize in building high-impact digital solutions that are not only functional but scalable, intuitive, and engaging.

                    My expertise spans <strong>MERN stack development, React, modern front-end frameworks, and RESTful API design</strong>, as well as <strong>embedded programming for hardware integration</strong>. I thrive at the intersection of software and hardware, turning complex challenges into elegant solutions that deliver measurable results.

                    I engineer experiences end-to-end: designing sleek, responsive user interfaces, implementing robust back-end architectures, optimizing data flow, and connecting applications to external APIs. My strong foundation in embedded systems allows me to bridge the gap between software and physical devices, making me uniquely positioned to solve diverse technical challenges.

                    I am constantly learning and experimenting with emerging technologies, optimizing workflows, and refining my craft. Whether collaborating on a team or leading a project from concept to deployment, I bring energy, precision, and a results-first mindset to everything I build.

                    Let’s collaborate to create innovative, high-performing solutions that make an impact.
                </Text>
            </Stack>
        </Container>
    )
}

export default AboutMe
