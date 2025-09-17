import { Text, Container, Stack, Tabs } from "@mantine/core";
import React from "react";

const PanelText = ({ children }) => (
  <Text size="lg" className="text-center w-full">
    {children}
  </Text>
);

const AboutMe = () => {
  return (
    <Container
      size="lg"
      py={{ base: "4rem", md: "6rem" }}
      className="transition-all duration-500 ease-in-out w-screen flex flex-col items-center justify-between h-screen"
    >
      <Stack spacing="2rem" align="center">
        <Text
          size="2rem"
          fw={900}
          variant="gradient"
          gradient={{ from: "violet", to: "blue", deg: 202 }}
          className="text-left w-full"
        >
          About:
        </Text>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src="/Imgs/croppedImage.jpg"
            alt="Zeke Gonzalez"
            className="transition-all duration-200 ease-in-out rounded-lg max-w-[250px] md:max-w-[320px] lg:max-w-[400px] h-auto"
          />

          <Tabs
            defaultValue="story"
            grow
            justify="center"
            classNames={{
              root: "mb-10",
            }}
          >
            <Tabs.List>
              <Tabs.Tab value="story">
                <Text
                  align="center"
                  size="1rem"
                  fw={900}
                  variant="gradient"
                  gradient={{ from: "violet", to: "blue", deg: 202 }}
                >
                  The Story So Far
                </Text>
              </Tabs.Tab>

              <Tabs.Tab value="journey">
                <Text
                  align="center"
                  size="1rem"
                  fw={900}
                  variant="gradient"
                  gradient={{ from: "violet", to: "blue", deg: 202 }}
                >
                  From Care to Code
                </Text>
              </Tabs.Tab>

              <Tabs.Tab value="tinkering">
                <Text
                  align="center"
                  size="1rem"
                  fw={900}
                  variant="gradient"
                  gradient={{ from: "violet", to: "blue", deg: 202 }}
                >
                  Tinkerer at Heart
                </Text>
              </Tabs.Tab>

              <Tabs.Tab value="philosophy">
                <Text
                  align="center"
                  size="1rem"
                  fw={900}
                  variant="gradient"
                  gradient={{ from: "violet", to: "blue", deg: 202 }}
                >
                  Problem-Solving Style
                </Text>
              </Tabs.Tab>

              <Tabs.Tab value="collab">
                <Text
                  align="center"
                  size="1rem"
                  fw={900}
                  variant="gradient"
                  gradient={{ from: "violet", to: "blue", deg: 202 }}
                >
                  Let’s Build Something Cool
                </Text>
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="story">
              <PanelText>
                I’m Zeke Gonzalez, a paramedic, web developer, and lifelong
                problem solver. My journey into technology didn’t start behind a
                keyboard—it began in the field, navigating the unpredictable,
                high-stakes world of emergency medicine. Years of assessing
                critical situations, documenting meticulously, and staying calm
                under pressure taught me skills I now bring to every line of
                code I write.
              </PanelText>
            </Tabs.Panel>

            <Tabs.Panel value="journey">
              <PanelText>
                I discovered web development as a way to channel that same
                curiosity and problem-solving energy into building tools that
                actually make people’s lives easier. After earning my Bachelor’s
                degree in Web Development from Full Sail University, I dove into
                the MERN stack, React, Docker, and modern full-stack practices,
                creating applications that combine efficiency, user experience,
                and a touch of fun. One of my favorite projects, Momentum,
                reflects this philosophy: a productivity platform designed
                specifically for people with ADHD, blending science-backed
                strategies with gamification to help users organize, focus, and
                achieve their goals.
              </PanelText>
            </Tabs.Panel>

            <Tabs.Panel value="tinkering">
              <PanelText>
                Beyond the professional, I’m a tinkerer at heart. From 3D
                printing custom keyboards to experimenting with firmware like
                ZMK, I love understanding how things work and making them
                better. I approach web development the same way—careful
                planning, thoughtful execution, and an eye for detail, all while
                keeping the user experience front and center.
              </PanelText>
            </Tabs.Panel>

            <Tabs.Panel value="philosophy">
              <PanelText>
                At the intersection of medicine, technology, and creativity,
                I’ve built a unique perspective: one that combines empathy,
                precision, and curiosity. Whether it’s collaborating with a
                team, optimizing code, or mentoring others, I bring the same
                focus and dedication I’ve carried throughout my career.
              </PanelText>
            </Tabs.Panel>

            <Tabs.Panel value="collab">
              <PanelText>
                Outside of work, I’m a devoted family man, a lifelong learner,
                and someone who believes that a little humor and curiosity can
                go a long way—even in the most complex projects. If you’re
                looking for a developer who combines technical expertise with
                real-world problem-solving, let’s build something together.
              </PanelText>
            </Tabs.Panel>
          </Tabs>
        </div>
      </Stack>
    </Container>
  );
};

export default AboutMe;
