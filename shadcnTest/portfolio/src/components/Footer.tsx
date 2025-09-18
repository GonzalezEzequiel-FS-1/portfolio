import React from "react";
import { Anchor, Text, Button, Container } from "@mantine/core";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const linksAndicons = [
    {
      icon: FaEnvelope,
      label: "Email",
      href: "mailto:ezequiel.gonzalez@egwebdev.com",
    },
    {
      icon: FaPhone,
      label: "(407) 864-3595",
      href: "tel:+14078643595",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/egwebdev",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      href: "https://github.com/GonzalezEzequiel-FS-1",
    },
  ];
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
  const primaryColor = "gray-300";
  const secondaryColor = "gray-500";

  return (
    <footer className="w-full bg-gray-900/30 px-12 py-2 flex items-center justify-center text-center flex-col gap-0">
      {/* Contact & Socials */}
      <Container className="md:w-8/12 flex flex-col items-center gap-2">
        <Text
          classNames={{
            root: "text-lg font-medium tracking-tight text-gray-200",
          }}
        >
          Ezequiel Gonzalez
        </Text>
        <Text
          classNames={{
            root: `text-sm text-${secondaryColor}`,
          }}
        >
          Web Developer | Problem Solver | Creator
        </Text>

        {/* Use flexbox with wrapping */}
        <div className="flex flex-wrap justify-center gap-8 mt-4 mb-3">
          {linksAndicons.map((item, index) => {
            const Icon = item.icon;
            return (
              <Anchor
                key={index}
                href={item.href}
                target="_blank"
                className="flex flex-col items-center gap-1 text-gray-300"
              >
                <div className="flex flex-col items-center justify-center">
                  <Icon />
                  <Text classNames={{ root: `hover:text-white` }}>
                    {item.label}
                  </Text>
                </div>
              </Anchor>
            );
          })}
        </div>
      </Container>

      <div className="flex flex-col gap-0 leading-0">
        <Button
          variant="transparent"
          classNames={{ root: "m-0 p-0" }}
          onClick={handleNavigateLogin}
        >
          Admin Login
        </Button>
        {/* Bottom Section: Copyright */}
        <Text
          size="sm"
          color={primaryColor}
          align="center"
          className="tracking-wide"
        >
          © 2025 Ezequiel Gonzalez. All rights reserved.
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
