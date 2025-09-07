import { Text } from "@mantine/core";
import React from "react";

const Specializations = () => {
  return (
    <div className=" flex flex-col justify-around items-center gap-1 md:w-3/5 w-3/4 mt-10 text-center">
      <Text
        styles={{
          root: {
            padding: "0rem 0rem 1rem 0rem",
            textAlign: "center",
          },
        }}
        size="3rem"
        fw={900}
        variant="gradient"
        gradient={{ from: "violet", to: "blue", deg: 202 }}
      >
        What I Love doing?
      </Text>
      <Text size={{ base: "2xl", sm: "sm" }}>
        I specialize in modern web development, leveraging a diverse set of
        tools and technologies to build fast, scalable, and visually engaging
        applications. From frontend frameworks to backend solutions, I craft
        end-to-end experiences that meet both user and business needs.
      </Text>
    </div>
  );
};

export default Specializations;
