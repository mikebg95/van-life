import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"
import { Link } from "react-router-dom"
import VanTypeButton from "../components/VanTypeButton"

const VanDetail = () => {
    const { id } = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
        fetch(`/api/vans/${id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [id])

    return (
        <>
            {van &&
                <section className="VanDetail">
                    <Link to=".." relative="path" className="back" >
                        <BiArrowBack />
                        <span>Back to all vans</span>
                    </Link>

                    <div className="img-container">
                        <img src={van.imageUrl} alt={van.name} />
                    </div>

                    <VanTypeButton type={van.type} />

                    <div className="name">{van.name}</div>
                    <span className="price">${van.price}</span>
                    <span className="time">/day</span>

                    <div className="description">{van.description}</div>

                    <button className="rent-btn">Rent this van</button>
                </section>
            }
            {
                !van && <h2 className="loading">Loading van...</h2>
            }
        </>
    )
}

export default VanDetail
