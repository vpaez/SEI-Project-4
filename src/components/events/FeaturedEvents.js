import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedEvents = ({exhibitions}) => {
  return(
    <section className="section">
      <h1 className="title is-2"> Whats on</h1>
      <div className="container">
        <div className="columns is-multiline">
          {exhibitions.map(exhibition =>
            <div key={exhibition.id} className="column is-one-quarter-desktop is-one-third-tablet">
              <Link to={`/events/${exhibition.id}`}>
                <figure>
                  <img src={exhibition.image} alt={exhibition.name}/>
                </figure>
                <h2 className="title is-4">{exhibition.name}</h2>
                <p>Date: {`${exhibition.start_date} - ${exhibition.end_date}`}</p>
                <p>{exhibition.venue}</p>
              </Link>
            </div>

          )}
        </div>
      </div>
    </section>
  )
}


export default FeaturedEvents
