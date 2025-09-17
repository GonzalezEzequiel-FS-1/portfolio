import { Text, Container, Stack, Tabs } from "@mantine/core";
import React from "react";
import Footer from "../components/footer/Footer";
import AboutMeCarousel from "./AboutMeCarrousel";

const PanelText = ({ children }) => (
  <Text size="lg" className="text-center w-full">
    {children}
  </Text>
);

const AboutMe = () => {
  return (
    <div className="h-screen flex flex-col justify-between items-center">
      <section className="pt-22 md:pt-20">
        <Container
          styles={{
            root: {
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            },
          }}
        >
          {/* <Text
          size="2rem"
          fw={900}
          variant="gradient"
          gradient={{ from: "violet", to: "blue", deg: 202 }}
          className="text-left w-full"
        >
          About:
        </Text> */}

          <div className="flex h-full flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src="/Imgs/croppedImage.jpg"
              alt="Zeke Gonzalez"
              className="transition-all duration-200 ease-in-out rounded-lg max-w-[250px] md:max-w-[320px] lg:max-w-[400px] md:mt-5 h-auto"
            />
            <AboutMeCarousel />
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default AboutMe;
