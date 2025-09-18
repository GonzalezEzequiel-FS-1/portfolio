import { Routes, Route } from "react-router-dom";
import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Home from "./Pages/Home";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <div className="bg-slate-950">
      <MantineProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </MantineProvider>
    </div>
  );
}

export default App;
