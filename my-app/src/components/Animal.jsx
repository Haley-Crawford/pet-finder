export const Animal = ({ animal }) => {
    return (
        <div className='animal'>
            <img src={animal.photos[0]?.full || 'https://placehold.co/200?text=No+Image+Available'}/>
            <div className='flex'>
                <h2 className='animal-name'>{animal.name}</h2>
                <a href={animal.url} target='_blank'>
                    <i className='fa-solid fa-arrow-up-right-from-square'></i>
                </a>
            </div>
            <div className='flex'>
                <p>Gender: {animal.gender}</p>
                <p>Age: {animal.age}</p>
            </div>
        </div>
    )
}