import "./App.css"
import { Viewport } from "./components/core/viewport"
import { Footer } from "./components/layout/footer"
import { Navbar } from "./components/layout/navbar"

function App() {
  return (
    <div className='flex flex-col flex-1'>
      <div className='relative flex flex-1 flex-col gap-4'>
        <Navbar className='fixed top-4 left-4 z-10' />

        <Viewport />

        <Footer />
      </div>
    </div>
  )
}

export default App
