export const Aside = ({ animals }) => {
    return (
        <aside className='aside'>
            <ul className='aside-ul'>
                <li className='aside-li'>
                    <h3>Location</h3>
                    <h1>New York, USA</h1>
                </li>
                <li className='aside-li'>
                    <h3>Animals Found</h3>
                    <h1>{animals.length}</h1>
                </li>
                <li className='aside-li'>
                    <h3>Last Search</h3>
                    <h1>{new Date().toLocaleString()}</h1>
                </li>
            </ul>
        </aside>
    )
}