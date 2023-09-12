import { Route, Routes } from "react-router"
import './App.css'
import { Header } from "./components/Header"
import { Homepage } from "./pages/Homepage"
import { Contact } from "./pages/Contact"
import { About } from "./pages/About"





function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </>
  )
}

export default App
