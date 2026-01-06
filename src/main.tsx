import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"
import { TimelineProvider } from "./contexts/timeline.tsx"
import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TimelineProvider>
      <App />
    </TimelineProvider>
  </StrictMode>
)
