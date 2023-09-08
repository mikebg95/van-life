import React from 'react'
import { Link } from "react-router-dom"
import VanTypeButton from './VanTypeButton'

const Van = ({ van }) => {
    const { id, imageUrl, name, price, type } = van

    return (
        <Link to={`/vans/${id}`}>
            <section className="Van">
                <div className="img-container">
                    <img src={imageUrl} alt={name} />
                </div>

                <section className="info">
                    <div className="name">{name}</div>
                    <div className="cost">
                        <div className="price">${price}</div>
                        <span className="time">/day</span>
                    </div>
                </section>

                <VanTypeButton type={type} />
            </section>
        </Link>
    )
}

export default Van