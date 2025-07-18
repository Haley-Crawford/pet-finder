import { useState, useEffect } from 'react'
import axios from 'axios'
import { Aside } from './Aside'
import { Main } from './Main'

export const Content = () => {

    const [animals, setAnimals] = useState(null)
    const [filters, setFilters] = useState({
        gender: 'male,female,unknown',
        after: new Date('2000-01-01').toISOString(),
        before: new Date('2025-07-17').toISOString(),
        location: 'New York City, NY',
        distance: 500
    })

    const fetchData = async () => {
        axios.get('http://localhost:5000/api/animals', {
            params: filters
        })
            .then(res => {
                setAnimals(res.data.animals)
            })
            .catch(err => {
                console.error(err)
            })
    }

  useEffect(() => {
    fetchData()
  }, [])

    return (
        animals && <div className='content'>
            <Aside animals={animals}/>
            <Main animals={animals} setAnimals={setAnimals} filters={filters} setFilters={setFilters} fetchData={fetchData}/>
        </div>
    )
}