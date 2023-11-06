import './TitleAndLocation.scss'

export default function TitleAndLocation({ title, location }) {
    return (
        <div className='titleAndLocation'>
            <h1 className='titleAndLocation_title'>{title}</h1>
            <h2 className='titleAndLocation_location'>{location}</h2>
        </div>
    )
}

