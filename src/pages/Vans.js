import { React, useEffect, useState } from 'react'
import Van from '../components/Van'

const Vans = () => {
    const [vans, setVans] = useState([])


    async function fetchVans() {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }
 
    useEffect(() => {
        fetchVans()
    }, [])

    useEffect(() => {  
        console.log(vans)
    }, [vans])

    return (
        <section className="Vans">
            <div className="title">Explore our van options</div>
            <section className="filters">
                <button>Simple</button>
                <button>Luxury</button>
                <button>Rugged</button>
                <button className="clear-btn">Clear filters</button>
            </section>

            <section className="vans">
                {vans.map(van => (
                    <Van key={van.id} van={van} />
                ))}
            </section>
        </section>
    )
}

export default Vans
