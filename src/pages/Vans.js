import { React, useEffect, useState } from 'react'
import Van from '../components/Van'
import { useSearchParams } from 'react-router-dom'

const Vans = () => {
    const [vans, setVans] = useState([])
    const [filteredVans, setFilteredVans] = useState([])
    const filterOptions = ["simple", "luxury", "rugged"]
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")

    console.log(typeFilter)

    async function fetchVans() {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
            })
    }
 
    useEffect(() => {
        fetchVans()
    }, [])

    useEffect(() => {
        setFilteredVans(typeFilter ? vans.filter(van => van.type === typeFilter) : vans)
    }, [vans, typeFilter])

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            }
            else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }


    return (
        <section className="Vans">
            <div className="title">Explore our van options</div>
            <section className="filters">
                {filterOptions.map(filterOption => (
                    <button
                        className={typeFilter === filterOption ? "selected" : ""}
                        onClick={() => handleFilterChange("type", filterOption)}
                    >
                        {filterOption.substring(0, 1).toUpperCase() + filterOption.substring(1)}
                    </button>
                ))}

                {typeFilter && <button className="clear-btn" onClick={() => handleFilterChange("type", null)}>
                    Clear filters
                </button>}
            </section>

            {vans.length > 0 ? 
                <section className="vans">
                    {filteredVans.map(van => (
                        <Van key={van.id} van={van} />
                    ))}
                </section>
                : <h2 className="loading">Loading vans...</h2>

            }
        </section>
    )
}

export default Vans
