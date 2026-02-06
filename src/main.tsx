import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { ThemeProvider } from "./contexts/theme.tsx"
import { TimelineProvider } from "./contexts/timeline.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <TimelineProvider>
        <App />
      </TimelineProvider>
    </ThemeProvider>
  </StrictMode>
)
