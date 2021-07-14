import React from 'react'
import { Link } from 'react-router-dom'

export const Card = () => (
    <div className="card">
        <img className="card-img-top" src={''} alt={''} />
        <div className="card-body">
            <h5 className="card-title">React JS</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to={'/profile/' + 'react'} className="btn btn-primary">Go somewhere</Link>
        </div>
    </div>
)