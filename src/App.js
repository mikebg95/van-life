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
import HostVanInfo from "./components/HostVanInfo"
import HostVanPricing from "./components/HostVanPricing"
import HostVanPhotos from "./components/HostVanPhotos"
import HostVanDetail from "./components/HostVanDetail"

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
                <Route path=":id" element={<HostVanDetail />}>
                  <Route index element={<HostVanInfo />}/>
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
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
