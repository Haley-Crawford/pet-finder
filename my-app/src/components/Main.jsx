import { Search } from './Search'
import { Animal } from './Animal'

export const Main = ({ animals, setAnimals, filters, setFilters, fetchData }) => {
    return (
        <section className='section'>
            <Search setAnimals={setAnimals} filters={filters} setFilters={setFilters} fetchData={fetchData}/>
            <h2>Populating animals in a {filters.distance} mile radius of New York City, New York.</h2>
            <main className='main'>
                {animals?.map(animal => (                    
                    <Animal animal={animal} key={animal.id}/>
                ))}
            </main>
        </section>
    )
}