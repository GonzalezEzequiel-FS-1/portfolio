import React from "react";
import ReactDOM from "react-dom/client";

// Mantine Provider and Theming
import { MantineProvider, ColorSchemeScript } from "@mantine/core";

// Importing Mantine's Date Provider
import { DatesProvider } from "@mantine/dates";

// Importing required CSS Packages
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/tiptap/styles.css";
import "./index.css";

import App from "./App.jsx";
import { ThemeProvider } from "./Theming/mantineColorScheme.jsx";
import { PostProvider } from "../context/PostContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <PostProvider>
        <ThemeProvider>
          <DatesProvider settings={{ locale: "en", firstDayOfWeek: 0 }}>
            <App />
          </DatesProvider>
        </ThemeProvider>
      </PostProvider>
    </MantineProvider>
  </React.StrictMode>
);
