import React from 'react'
import { useOutletContext } from 'react-router-dom'

const HostVanInfo = () => {
  const { name, type, description } = useOutletContext()

  return (
    <section className="HostVanInfo">
      <div className="title"><span>Name: </span>{name}</div>
      <div className="title"><span>Type: </span>{type.substring(0, 1).toUpperCase() + type.slice(1)}</div>
      <div className="title"><span>Description: </span>{description}</div>
      <div className="title"><span>Visibility: </span>Public</div>

    </section>
  )
}

export default HostVanInfo
