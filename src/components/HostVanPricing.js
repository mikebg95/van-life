import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPricing = () => {
  const { price } = useOutletContext()

  return (
    <section className="HostVanPricing">
      <div>${price}.00<span>/day</span></div>
    </section>
  )
}

export default HostVanPricing
