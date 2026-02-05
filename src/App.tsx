import "./App.css"
import { Viewport } from "./components/core/viewport"
import { Footer } from "./components/layout/footer"
import { Navbar } from "./components/layout/navbar"

function App() {
  return (
    <>
    <Navbar className='fixed top-4 left-4 z-10' />

    <Viewport />

    <Footer />
    </>
  )
}

export default App
