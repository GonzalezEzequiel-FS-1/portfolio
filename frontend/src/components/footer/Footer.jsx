import React from "react";
import { Anchor, Group, Text, Button } from "@mantine/core";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const nav = useNavigate();
  const handleNavigateLogin = (e) => {
    e.preventDefault();
    try {
      nav("/login");
    } catch (err) {
      console.error(err);
    }
  };
  // Define colors explicitly
  const primaryColor = "gray.300";
  const secondaryColor = "gray.500";
  const hoverColor = "white";

  return (
    <footer className="w-full bg-gray-900/30 px-12 py-2 flex items-center justify-center text-center flex-col gap-0">
      {/* Contact & Socials */}
      <div className="md:w-8/12 flex flex-col items-center gap-2">
        <p className="text-lg font-medium tracking-tight text-gray-200">
          Ezequiel Gonzalez
        </p>
        <p className={`text-sm text-${secondaryColor}`}>
          Web Developer | Problem Solver | Creator
        </p>

        <Group spacing="lg" center mt={4} mb={3}>
          <Anchor
            href="mailto:youremail@example.com"
            className={`flex items-center gap-2 text-${primaryColor} hover:text-${hoverColor}`}
            target="_blank"
          >
            <div className="flex flex-col items-center justify-center">
              <FaEnvelope />
              <p className="text-center">Email</p>
            </div>
          </Anchor>

          <Anchor
            href="tel:+14078643595"
            className={`flex items-center gap-2 text-${primaryColor} hover:text-${hoverColor}`}
          >
            <div className="flex flex-col items-center justify-center">
              <FaPhone />
              <p>(407) 864-3595</p>
            </div>
          </Anchor>
          <Anchor
            href="https://linkedin.com/in/ezequielgonzalezhidalgo"
            target="_blank"
            className={`flex items-center gap-2 text-${primaryColor} hover:text-${hoverColor}`}
          >
            <div className="flex flex-col items-center justify-center">
              <FaLinkedin />
              <p>LinkedIn</p>
            </div>
          </Anchor>
          <Anchor
            href="https://github.com/GonzalezEzequiel-FS-1"
            target="_blank"
            className={`flex items-center gap-2 text-${primaryColor} hover:text-${hoverColor}`}
          >
            <div className="flex flex-col items-center justify-center">
              <FaGithub />
              <p>GitHub</p>
            </div>
          </Anchor>
        </Group>
      </div>

      <div className="flex flex-col gap-0 leading-0">
        <Button
          variant="transparent"
          classNames={{ root: "m-0 p-0" }}
          onClick={(e) => {
            e.preventDefault(); // prevents any default form or link behavior
            nav("/login"); // navigates to login page
          }}
        >
          Admin Login
        </Button>
        {/* Bottom Section: Copyright */}
        <Text size="sm" color={"gray"} align="center" className="tracking-wide">
          © 2025 Ezequiel Gonzalez. All rights reserved.
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
