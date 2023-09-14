import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanPhotos = () => {
  const { imageUrl, name } = useOutletContext()

  return (
    <section className="HostVanPhotos">
      <div className="img-container">
        <img src={imageUrl} alt={name} />
      </div>
    </section>
  )
}

export default HostVanPhotos
