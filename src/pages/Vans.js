import { React, useEffect, useState } from 'react'
import Van from '../components/Van'

const Vans = () => {
    const [vans, setVans] = useState([])
    const [filters, setFilters] = useState([])
    const [filteredVans, setFilteredVans] = useState([])
    const allFilters = ["simple", "luxury", "rugged"]

    async function fetchVans() {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => {
                setVans(data.vans)
                setFilteredVans(data.vans)
            })
    }

    function addFilter(filter) {
        if (filters.includes(filter)) {
            setFilters(prevFilters => prevFilters.filter(f => f !== filter))
        }
        else {
            if (filters.length === allFilters.length - 1) {
                clearFilters()
            }
            else {
                setFilters([...filters, filter])
            }
        }
    }

    function clearFilters() {
        setFilters([])
    }

    function isFilterSelected(filter) {
        return filters.includes(filter);
      }
 
    useEffect(() => {
        fetchVans()
    }, [])

    useEffect(() => {
        if (filters.length === 0 || filters.length === 3) {
            setFilteredVans(vans)
        } 
        else {
            setFilteredVans(vans.filter(van => filters.includes(van.type)))
        }
    }, [filters, vans])

    return (
        <section className="Vans">
            <div className="title">Explore our van options</div>
            <section className="filters">
                {allFilters.map(filter => (
                    <button
                        onClick={() => addFilter(filter)}
                        className={isFilterSelected(filter) ? "selected" : ""}
                    >
                        {filter.substring(0, 1).toUpperCase() + filter.substring(1)}
                    </button>
                ))}

                <button className="clear-btn" onClick={clearFilters}>
                    Clear filters
                </button>
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
