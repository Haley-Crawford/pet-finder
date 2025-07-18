export const Search = ({ filters, setFilters, fetchData }) => {

    const handleReset = () => {
        setFilters({
            gender: 'male,female,unknown',
            after: new Date('2000-01-01').toISOString(),
            before: new Date('2025-07-17').toISOString(),
            location: 'New York City, NY',
            distance: 500
        })

        fetchData()
    }

    const handleFilters = (e) => {
        let { name, value } = e.target
        if (['before', 'after'].includes(name)) {
            value = new Date(value).toISOString()
        }
        setFilters(prev => ({
            ...prev, [name] : value 
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchData()
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='filters'>
                    <div className='wrapper'>
                        <label htmlFor='gender'>Gender</label>
                        <select name='gender' id='gender' onChange={handleFilters}>
                            <option value=''>All</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </div>
                    <div className='wrapper'>
                        <label htmlFor='earliest-date'>Earliest Date</label>
                        <input type='date' name='after' id='earliest-date' value={filters.after.slice(0,10)} onChange={handleFilters}/>
                    </div>
                    <div className='wrapper'>
                        <label htmlFor='latest-date'>Latest Date</label>
                        <input type='date' name='before' id='latest-date' value={filters.before.slice(0,10)} onChange={handleFilters}/>
                    </div>
                    <div className='wrapper'>
                        <label htmlFor='distance'>Distance (miles)</label>
                        <input type='number' name='distance' id='distance' pattern='^\d{5}(-\d{4})?$' min={1} max={500} value={filters.distance} onChange={handleFilters}/>
                    </div>
                </div>
                <button type='submit'>Search!</button>
                <button type='button' onClick={handleReset}>Reset!</button>
            </form>
        </>
    )
}