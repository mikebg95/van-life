import React from "react"
import { ReactDOM } from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        </BrowserRouter>
        <Footer />
      </div>
  );
}

export default App;
