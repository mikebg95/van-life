import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import Layout from "./components/Layout"
import Dashboard from "./components/Dashboard"
import Income from "./components/Income"
import Reviews from "./components/Reviews"
import HostLayout from "./components/HostLayout"
import HostVans from "./components/HostVans"
import HostVanDetailDetails from "./components/HostVanDetailDetails"
import HostVanDetailPricing from "./components/HostVanDetailPricing"
import HostVanDetailPhotos from "./components/HostVanDetailPhotos"
import HostVanDetailLayout from "./components/HostVanDetailLayout"

import "./server"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />
            

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />

              <Route path="vans">
                <Route index element={<HostVans />} />
                <Route path=":id" element={<HostVanDetailLayout />}>
                  <Route index element={<HostVanDetailDetails />}/>
                  <Route path="pricing" element={<HostVanDetailPricing />} />
                  <Route path="photos" element={<HostVanDetailPhotos />} />
                </Route>
              </Route>
              
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
